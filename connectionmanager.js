define([ "events", "apiclient", "appStorage" ], function(events, apiClientFactory, appStorage) {
    "use strict";
    function paramsToString(params) {
        var values = [];
        for (var key in params) {
            var value = params[key];
            null !== value && void 0 !== value && "" !== value && values.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
        return values.join("&");
    }
    function resolveFailure(instance, resolve) {
        resolve({
            State: ConnectionState.Unavailable,
            ConnectUser: instance.connectUser()
        });
    }
    function mergeServers(credentialProvider, list1, list2) {
        for (var i = 0, length = list2.length; i < length; i++) credentialProvider.addOrUpdateServer(list1, list2[i]);
        return list1;
    }
    function updateServerInfo(server, systemInfo) {
        server.Name = systemInfo.ServerName, server.Id = systemInfo.Id, systemInfo.LocalAddress && (server.LocalAddress = systemInfo.LocalAddress), 
        systemInfo.WanAddress && (server.RemoteAddress = systemInfo.WanAddress), systemInfo.MacAddress && (server.WakeOnLanInfos = [ {
            MacAddress: systemInfo.MacAddress
        } ]);
    }
    function getEmbyServerUrl(baseUrl, handler) {
        return baseUrl + "/emby/" + handler;
    }
    function getFetchPromise(request) {
        var headers = request.headers || {};
        "json" === request.dataType && (headers.accept = "application/json");
        var fetchRequest = {
            headers: headers,
            method: request.type,
            credentials: "same-origin"
        }, contentType = request.contentType;
        return request.data && ("string" == typeof request.data ? fetchRequest.body = request.data : (fetchRequest.body = paramsToString(request.data), 
        contentType = contentType || "application/x-www-form-urlencoded; charset=UTF-8")), 
        contentType && (headers["Content-Type"] = contentType), request.timeout ? fetchWithTimeout(request.url, fetchRequest, request.timeout) : fetch(request.url, fetchRequest);
    }
    function fetchWithTimeout(url, options, timeoutMs) {
        return console.log("fetchWithTimeout: timeoutMs: " + timeoutMs + ", url: " + url), 
        new Promise(function(resolve, reject) {
            var timeout = setTimeout(reject, timeoutMs);
            options = options || {}, options.credentials = "same-origin", fetch(url, options).then(function(response) {
                clearTimeout(timeout), console.log("fetchWithTimeout: succeeded connecting to url: " + url), 
                resolve(response);
            }, function(error) {
                clearTimeout(timeout), console.log("fetchWithTimeout: timed out connecting to url: " + url), 
                reject();
            });
        });
    }
    function ajax(request) {
        if (!request) throw new Error("Request cannot be null");
        return request.headers = request.headers || {}, console.log("ConnectionManager requesting url: " + request.url), 
        getFetchPromise(request).then(function(response) {
            return console.log("ConnectionManager response status: " + response.status + ", url: " + request.url), 
            response.status < 400 ? "json" === request.dataType || "application/json" === request.headers.accept ? response.json() : response : Promise.reject(response);
        }, function(err) {
            throw console.log("ConnectionManager request failed to url: " + request.url), err;
        });
    }
    function tryConnect(url, timeout) {
        return url = getEmbyServerUrl(url, "system/info/public"), console.log("tryConnect url: " + url), 
        ajax({
            type: "GET",
            url: url,
            dataType: "json",
            timeout: timeout || defaultTimeout
        });
    }
    function getConnectUrl(handler) {
        return "https://connect.emby.media/service/" + handler;
    }
    function replaceAll(originalString, strReplace, strWith) {
        var reg = new RegExp(strReplace, "ig");
        return originalString.replace(reg, strWith);
    }
    function normalizeAddress(address) {
        return address = address.trim(), 0 !== address.toLowerCase().indexOf("http") && (address = "http://" + address), 
        address = replaceAll(address, "Http:", "http:"), address = replaceAll(address, "Https:", "https:");
    }
    function stringEqualsIgnoreCase(str1, str2) {
        return (str1 || "").toLowerCase() === (str2 || "").toLowerCase();
    }
    function compareVersions(a, b) {
        a = a.split("."), b = b.split(".");
        for (var i = 0, length = Math.max(a.length, b.length); i < length; i++) {
            var aVal = parseInt(a[i] || "0"), bVal = parseInt(b[i] || "0");
            if (aVal < bVal) return -1;
            if (aVal > bVal) return 1;
        }
        return 0;
    }
    var defaultTimeout = 2e4, ConnectionState = {
        Unavailable: 0,
        ServerSelection: 1,
        ServerSignIn: 2,
        SignedIn: 3,
        ConnectSignIn: 4,
        ServerUpdateNeeded: 5
    }, ConnectionMode = {
        Local: 0,
        Remote: 1,
        Manual: 2
    }, ServerInfo = {
        getServerAddress: function(server, mode) {
            switch (mode) {
              case ConnectionMode.Local:
                return server.LocalAddress;

              case ConnectionMode.Manual:
                return server.ManualAddress;

              case ConnectionMode.Remote:
                return server.RemoteAddress;

              default:
                return server.ManualAddress || server.LocalAddress || server.RemoteAddress;
            }
        }
    }, ConnectionManager = function(credentialProvider, appName, appVersion, deviceName, deviceId, capabilities, devicePixelRatio) {
        function onConnectUserSignIn(user) {
            appStorage.removeItem("lastLocalServerId"), connectUser = user, events.trigger(self, "connectusersignedin", [ user ]);
        }
        function onAuthenticated(apiClient, result, options, saveCredentials) {
            var credentials = credentialProvider.credentials(), servers = credentials.Servers.filter(function(s) {
                return s.Id === result.ServerId;
            }), server = servers.length ? servers[0] : apiClient.serverInfo();
            return options.updateDateLastAccessed !== !1 && (server.DateLastAccessed = new Date().getTime()), 
            server.Id = result.ServerId, saveCredentials ? (server.UserId = result.User.Id, 
            server.AccessToken = result.AccessToken) : (server.UserId = null, server.AccessToken = null), 
            credentialProvider.addOrUpdateServer(credentials.Servers, server), saveUserInfoIntoCredentials(server, result.User), 
            credentialProvider.credentials(credentials), apiClient.serverInfo(server), afterConnected(apiClient, options), 
            onLocalUserSignIn(server, server.LastConnectionMode, result.User);
        }
        function saveUserInfoIntoCredentials(server, user) {
            var info = {
                Id: user.Id,
                IsSignedInOffline: !0
            };
            credentialProvider.addOrUpdateUser(server, info);
        }
        function afterConnected(apiClient, options) {
            options = options || {}, options.reportCapabilities !== !1 && apiClient.reportCapabilities(capabilities), 
            apiClient.enableAutomaticBitrateDetection = options.enableAutomaticBitrateDetection, 
            options.enableWebSocket !== !1 && (console.log("calling apiClient.ensureWebSocket"), 
            apiClient.ensureWebSocket());
        }
        function onLocalUserSignIn(server, connectionMode, user) {
            self.connectUserId() ? appStorage.removeItem("lastLocalServerId") : appStorage.setItem("lastLocalServerId", server.Id), 
            self._getOrAddApiClient(server, connectionMode);
            var promise = self.onLocalUserSignedIn ? self.onLocalUserSignedIn.call(self, user) : Promise.resolve();
            return promise.then(function() {
                events.trigger(self, "localusersignedin", [ user ]);
            });
        }
        function ensureConnectUser(credentials) {
            return connectUser && connectUser.Id === credentials.ConnectUserId ? Promise.resolve() : credentials.ConnectUserId && credentials.ConnectAccessToken ? (connectUser = null, 
            getConnectUser(credentials.ConnectUserId, credentials.ConnectAccessToken).then(function(user) {
                return onConnectUserSignIn(user), Promise.resolve();
            }, function() {
                return Promise.resolve();
            })) : Promise.resolve();
        }
        function getConnectUser(userId, accessToken) {
            if (!userId) throw new Error("null userId");
            if (!accessToken) throw new Error("null accessToken");
            var url = "https://connect.emby.media/service/user?id=" + userId;
            return ajax({
                type: "GET",
                url: url,
                dataType: "json",
                headers: {
                    "X-Application": appName + "/" + appVersion,
                    "X-Connect-UserToken": accessToken
                }
            });
        }
        function addAuthenticationInfoFromConnect(server, connectionMode, credentials) {
            if (!server.ExchangeToken) throw new Error("server.ExchangeToken cannot be null");
            if (!credentials.ConnectUserId) throw new Error("credentials.ConnectUserId cannot be null");
            var url = ServerInfo.getServerAddress(server, connectionMode);
            url = getEmbyServerUrl(url, "Connect/Exchange?format=json&ConnectUserId=" + credentials.ConnectUserId);
            var auth = 'MediaBrowser Client="' + appName + '", Device="' + deviceName + '", DeviceId="' + deviceId + '", Version="' + appVersion + '"';
            return ajax({
                type: "GET",
                url: url,
                dataType: "json",
                headers: {
                    "X-MediaBrowser-Token": server.ExchangeToken,
                    "X-Emby-Authorization": auth
                }
            }).then(function(auth) {
                return server.UserId = auth.LocalUserId, server.AccessToken = auth.AccessToken, 
                auth;
            }, function() {
                return server.UserId = null, server.AccessToken = null, Promise.reject();
            });
        }
        function validateAuthentication(server, connectionMode) {
            var url = ServerInfo.getServerAddress(server, connectionMode);
            return ajax({
                type: "GET",
                url: getEmbyServerUrl(url, "System/Info"),
                dataType: "json",
                headers: {
                    "X-MediaBrowser-Token": server.AccessToken
                }
            }).then(function(systemInfo) {
                return updateServerInfo(server, systemInfo), server.UserId ? ajax({
                    type: "GET",
                    url: getEmbyServerUrl(url, "users/" + server.UserId),
                    dataType: "json",
                    headers: {
                        "X-MediaBrowser-Token": server.AccessToken
                    }
                }).then(function(user) {
                    return onLocalUserSignIn(server, connectionMode, user), Promise.resolve();
                }, function() {
                    return server.UserId = null, server.AccessToken = null, Promise.resolve();
                }) : Promise.resolve();
            }, function() {
                return server.UserId = null, server.AccessToken = null, Promise.resolve();
            });
        }
        function getImageUrl(localUser) {
            if (connectUser && connectUser.ImageUrl) return {
                url: connectUser.ImageUrl
            };
            if (localUser && localUser.PrimaryImageTag) {
                var apiClient = self.getApiClient(localUser), url = apiClient.getUserImageUrl(localUser.Id, {
                    tag: localUser.PrimaryImageTag,
                    type: "Primary"
                });
                return {
                    url: url,
                    supportsParams: !0
                };
            }
            return {
                url: null,
                supportsParams: !1
            };
        }
        function logoutOfServer(apiClient) {
            var serverInfo = apiClient.serverInfo() || {}, logoutInfo = {
                serverId: serverInfo.Id
            };
            return apiClient.logout().then(function() {
                events.trigger(self, "localusersignedout", [ logoutInfo ]);
            }, function() {
                events.trigger(self, "localusersignedout", [ logoutInfo ]);
            });
        }
        function getConnectServers(credentials) {
            if (console.log("Begin getConnectServers"), !credentials.ConnectAccessToken || !credentials.ConnectUserId) return Promise.resolve([]);
            var url = "https://connect.emby.media/service/servers?userId=" + credentials.ConnectUserId;
            return ajax({
                type: "GET",
                url: url,
                dataType: "json",
                headers: {
                    "X-Application": appName + "/" + appVersion,
                    "X-Connect-UserToken": credentials.ConnectAccessToken
                }
            }).then(function(servers) {
                return servers.map(function(i) {
                    return {
                        ExchangeToken: i.AccessKey,
                        ConnectServerId: i.Id,
                        Id: i.SystemId,
                        Name: i.Name,
                        RemoteAddress: i.Url,
                        LocalAddress: i.LocalAddress,
                        UserLinkType: "guest" === (i.UserType || "").toLowerCase() ? "Guest" : "LinkedUser"
                    };
                });
            }, function() {
                return credentials.Servers.slice(0).filter(function(s) {
                    return s.ExchangeToken;
                });
            });
        }
        function filterServers(servers, connectServers) {
            return servers.filter(function(server) {
                return !server.ExchangeToken || connectServers.filter(function(connectServer) {
                    return server.Id === connectServer.Id;
                }).length > 0;
            });
        }
        function findServers() {
            return new Promise(function(resolve, reject) {
                var onFinish = function(foundServers) {
                    var servers = foundServers.map(function(foundServer) {
                        var info = {
                            Id: foundServer.Id,
                            LocalAddress: convertEndpointAddressToManualAddress(foundServer) || foundServer.Address,
                            Name: foundServer.Name
                        };
                        return info.LastConnectionMode = info.ManualAddress ? ConnectionMode.Manual : ConnectionMode.Local, 
                        info;
                    });
                    resolve(servers);
                };
                require([ "serverdiscovery" ], function(serverDiscovery) {
                    serverDiscovery.findServers(1e3).then(onFinish, function() {
                        onFinish([]);
                    });
                });
            });
        }
        function convertEndpointAddressToManualAddress(info) {
            if (info.Address && info.EndpointAddress) {
                var address = info.EndpointAddress.split(":")[0], parts = info.Address.split(":");
                if (parts.length > 1) {
                    var portString = parts[parts.length - 1];
                    isNaN(parseInt(portString)) || (address += ":" + portString);
                }
                return normalizeAddress(address);
            }
            return null;
        }
        function testNextConnectionMode(tests, index, server, options, resolve) {
            if (index >= tests.length) return console.log("Tested all connection modes. Failing server connection."), 
            void resolveFailure(self, resolve);
            var mode = tests[index], address = ServerInfo.getServerAddress(server, mode), enableRetry = !1, skipTest = !1, timeout = defaultTimeout;
            return mode === ConnectionMode.Local ? (enableRetry = !0, timeout = 8e3, stringEqualsIgnoreCase(address, server.ManualAddress) && (console.log("skipping LocalAddress test because it is the same as ManualAddress"), 
            skipTest = !0)) : mode === ConnectionMode.Manual && stringEqualsIgnoreCase(address, server.LocalAddress) && (enableRetry = !0, 
            timeout = 8e3), skipTest || !address ? (console.log("skipping test at index " + index), 
            void testNextConnectionMode(tests, index + 1, server, options, resolve)) : (console.log("testing connection mode " + mode + " with server " + server.Name), 
            void tryConnect(address, timeout).then(function(result) {
                1 === compareVersions(self.minServerVersion(), result.Version) ? (console.log("minServerVersion requirement not met. Server version: " + result.Version), 
                resolve({
                    State: ConnectionState.ServerUpdateNeeded,
                    Servers: [ server ]
                })) : result.Id !== server.Id ? testNextConnectionMode(tests, index + 1, server, options, resolve) : (console.log("calling onSuccessfulConnection with connection mode " + mode + " with server " + server.Name), 
                onSuccessfulConnection(server, result, mode, options, resolve));
            }, function() {
                console.log("test failed for connection mode " + mode + " with server " + server.Name), 
                enableRetry ? testNextConnectionMode(tests, index + 1, server, options, resolve) : testNextConnectionMode(tests, index + 1, server, options, resolve);
            }));
        }
        function onSuccessfulConnection(server, systemInfo, connectionMode, options, resolve) {
            var credentials = credentialProvider.credentials();
            options = options || {}, credentials.ConnectAccessToken && options.enableAutoLogin !== !1 ? ensureConnectUser(credentials).then(function() {
                server.ExchangeToken ? addAuthenticationInfoFromConnect(server, connectionMode, credentials).then(function() {
                    afterConnectValidated(server, credentials, systemInfo, connectionMode, !0, options, resolve);
                }, function() {
                    afterConnectValidated(server, credentials, systemInfo, connectionMode, !0, options, resolve);
                }) : afterConnectValidated(server, credentials, systemInfo, connectionMode, !0, options, resolve);
            }) : afterConnectValidated(server, credentials, systemInfo, connectionMode, !0, options, resolve);
        }
        function afterConnectValidated(server, credentials, systemInfo, connectionMode, verifyLocalAuthentication, options, resolve) {
            if (options = options || {}, options.enableAutoLogin === !1) server.UserId = null, 
            server.AccessToken = null; else if (verifyLocalAuthentication && server.AccessToken && options.enableAutoLogin !== !1) return void validateAuthentication(server, connectionMode).then(function() {
                afterConnectValidated(server, credentials, systemInfo, connectionMode, !1, options, resolve);
            });
            updateServerInfo(server, systemInfo), server.LastConnectionMode = connectionMode, 
            options.updateDateLastAccessed !== !1 && (server.DateLastAccessed = new Date().getTime()), 
            credentialProvider.addOrUpdateServer(credentials.Servers, server), credentialProvider.credentials(credentials);
            var result = {
                Servers: []
            };
            result.ApiClient = self._getOrAddApiClient(server, connectionMode), result.ApiClient.setSystemInfo(systemInfo), 
            result.State = server.AccessToken && options.enableAutoLogin !== !1 ? ConnectionState.SignedIn : ConnectionState.ServerSignIn, 
            result.Servers.push(server), result.ApiClient.updateServerInfo(server, connectionMode), 
            result.State === ConnectionState.SignedIn && afterConnected(result.ApiClient, options), 
            resolve(result), events.trigger(self, "connected", [ result ]);
        }
        function addAppInfoToConnectRequest(request) {
            request.headers = request.headers || {}, request.headers["X-Application"] = appName + "/" + appVersion;
        }
        function exchangePin(pinInfo) {
            if (!pinInfo) throw new Error("pinInfo cannot be null");
            var request = {
                type: "POST",
                url: getConnectUrl("pin/authenticate"),
                data: {
                    deviceId: pinInfo.DeviceId,
                    pin: pinInfo.Pin
                },
                dataType: "json"
            };
            return addAppInfoToConnectRequest(request), ajax(request);
        }
        console.log("Begin ConnectionManager constructor");
        var self = this;
        this._apiClients = [];
        var connectUser;
        self.connectUser = function() {
            return connectUser;
        }, self._minServerVersion = "3.2.19", self.appVersion = function() {
            return appVersion;
        }, self.appName = function() {
            return appName;
        }, self.capabilities = function() {
            return capabilities;
        }, self.deviceId = function() {
            return deviceId;
        }, self.credentialProvider = function() {
            return credentialProvider;
        }, self.connectUserId = function() {
            return credentialProvider.credentials().ConnectUserId;
        }, self.connectToken = function() {
            return credentialProvider.credentials().ConnectAccessToken;
        }, self.getServerInfo = function(id) {
            var servers = credentialProvider.credentials().Servers;
            return servers.filter(function(s) {
                return s.Id === id;
            })[0];
        }, self.getLastUsedServer = function() {
            var servers = credentialProvider.credentials().Servers;
            return servers.sort(function(a, b) {
                return (b.DateLastAccessed || 0) - (a.DateLastAccessed || 0);
            }), servers.length ? servers[0] : null;
        }, self.getLastUsedApiClient = function() {
            var servers = credentialProvider.credentials().Servers;
            if (servers.sort(function(a, b) {
                return (b.DateLastAccessed || 0) - (a.DateLastAccessed || 0);
            }), !servers.length) return null;
            var server = servers[0];
            return self._getOrAddApiClient(server, server.LastConnectionMode);
        }, self.addApiClient = function(apiClient) {
            self._apiClients.push(apiClient);
            var existingServers = credentialProvider.credentials().Servers.filter(function(s) {
                return stringEqualsIgnoreCase(s.ManualAddress, apiClient.serverAddress()) || stringEqualsIgnoreCase(s.LocalAddress, apiClient.serverAddress()) || stringEqualsIgnoreCase(s.RemoteAddress, apiClient.serverAddress());
            }), existingServer = existingServers.length ? existingServers[0] : {};
            if (existingServer.DateLastAccessed = new Date().getTime(), existingServer.LastConnectionMode = ConnectionMode.Manual, 
            existingServer.ManualAddress = apiClient.serverAddress(), apiClient.serverInfo(existingServer), 
            apiClient.onAuthenticated = function(instance, result) {
                return onAuthenticated(instance, result, {}, !0);
            }, !existingServers.length) {
                var credentials = credentialProvider.credentials();
                credentials.Servers = [ existingServer ], credentialProvider.credentials(credentials);
            }
            events.trigger(self, "apiclientcreated", [ apiClient ]), existingServer.Id || apiClient.getPublicSystemInfo().then(function(systemInfo) {
                var credentials = credentialProvider.credentials();
                existingServer.Id = systemInfo.Id, apiClient.serverInfo(existingServer), credentials.Servers = [ existingServer ], 
                credentialProvider.credentials(credentials);
            });
        }, self.clearData = function() {
            console.log("connection manager clearing data"), connectUser = null;
            var credentials = credentialProvider.credentials();
            credentials.ConnectAccessToken = null, credentials.ConnectUserId = null, credentials.Servers = [], 
            credentialProvider.credentials(credentials);
        }, self._getOrAddApiClient = function(server, connectionMode) {
            var apiClient = self.getApiClient(server.Id);
            if (!apiClient) {
                var url = ServerInfo.getServerAddress(server, connectionMode);
                apiClient = new apiClientFactory(url, appName, appVersion, deviceName, deviceId, devicePixelRatio), 
                self._apiClients.push(apiClient), apiClient.serverInfo(server), apiClient.onAuthenticated = function(instance, result) {
                    return onAuthenticated(instance, result, {}, !0);
                }, events.trigger(self, "apiclientcreated", [ apiClient ]);
            }
            return console.log("returning instance from getOrAddApiClient"), apiClient;
        }, self.getOrCreateApiClient = function(serverId) {
            var credentials = credentialProvider.credentials(), servers = credentials.Servers.filter(function(s) {
                return stringEqualsIgnoreCase(s.Id, serverId);
            });
            if (!servers.length) throw new Error("Server not found: " + serverId);
            var server = servers[0];
            return self._getOrAddApiClient(server, server.LastConnectionMode);
        }, self.user = function(apiClient) {
            return new Promise(function(resolve, reject) {
                function onLocalUserDone(e) {
                    var image = getImageUrl(localUser);
                    resolve({
                        localUser: localUser,
                        name: connectUser ? connectUser.Name : localUser ? localUser.Name : null,
                        imageUrl: image.url,
                        supportsImageParams: image.supportsParams
                    });
                }
                function onEnsureConnectUserDone() {
                    apiClient && apiClient.getCurrentUserId() ? apiClient.getCurrentUser().then(function(u) {
                        localUser = u, onLocalUserDone();
                    }, onLocalUserDone) : onLocalUserDone();
                }
                var localUser, credentials = credentialProvider.credentials();
                !credentials.ConnectUserId || !credentials.ConnectAccessToken || apiClient && apiClient.getCurrentUserId() ? onEnsureConnectUserDone() : ensureConnectUser(credentials).then(onEnsureConnectUserDone, onEnsureConnectUserDone);
            });
        }, self.logout = function() {
            console.log("begin connectionManager loguot");
            for (var promises = [], i = 0, length = self._apiClients.length; i < length; i++) {
                var apiClient = self._apiClients[i];
                apiClient.accessToken() && promises.push(logoutOfServer(apiClient));
            }
            return Promise.all(promises).then(function() {
                for (var credentials = credentialProvider.credentials(), servers = credentials.Servers.filter(function(u) {
                    return "Guest" !== u.UserLinkType;
                }), j = 0, numServers = servers.length; j < numServers; j++) {
                    var server = servers[j];
                    server.UserId = null, server.AccessToken = null, server.ExchangeToken = null;
                    for (var serverUsers = server.Users || [], k = 0, numUsers = serverUsers.length; k < numUsers; k++) serverUsers[k].IsSignedInOffline = !1;
                }
                credentials.ConnectAccessToken && appStorage.removeItem("lastLocalServerId"), credentials.Servers = servers, 
                credentials.ConnectAccessToken = null, credentials.ConnectUserId = null, credentialProvider.credentials(credentials), 
                connectUser && (connectUser = null, events.trigger(self, "connectusersignedout"));
            });
        }, self.getSavedServers = function() {
            var credentials = credentialProvider.credentials(), servers = credentials.Servers.slice(0);
            return servers.sort(function(a, b) {
                return (b.DateLastAccessed || 0) - (a.DateLastAccessed || 0);
            }), servers;
        }, self.getAvailableServers = function() {
            console.log("Begin getAvailableServers");
            var credentials = credentialProvider.credentials();
            return Promise.all([ getConnectServers(credentials), findServers() ]).then(function(responses) {
                var connectServers = responses[0], foundServers = responses[1], servers = credentials.Servers.slice(0);
                return mergeServers(credentialProvider, servers, foundServers), mergeServers(credentialProvider, servers, connectServers), 
                servers = filterServers(servers, connectServers), servers.sort(function(a, b) {
                    return (b.DateLastAccessed || 0) - (a.DateLastAccessed || 0);
                }), credentials.Servers = servers, credentialProvider.credentials(credentials), 
                servers;
            });
        }, self.connectToServers = function(servers, options) {
            console.log("Begin connectToServers, with " + servers.length + " servers");
            var defaultServer = 1 === servers.length ? servers[0] : null;
            if (!defaultServer) {
                var lastLocalServerId = appStorage.getItem("lastLocalServerId");
                defaultServer = servers.filter(function(s) {
                    return s.Id === lastLocalServerId;
                })[0];
            }
            if (defaultServer) return self.connectToServer(defaultServer, options).then(function(result) {
                return result.State === ConnectionState.Unavailable && (result.State = ConnectionState.ServerSelection), 
                console.log("resolving connectToServers with result.State: " + result.State), result;
            });
            var firstServer = servers.length ? servers[0] : null;
            return firstServer ? self.connectToServer(firstServer, options).then(function(result) {
                return result.State === ConnectionState.SignedIn ? result : {
                    Servers: servers,
                    State: servers.length || self.connectUser() ? ConnectionState.ServerSelection : ConnectionState.ConnectSignIn,
                    ConnectUser: self.connectUser()
                };
            }) : Promise.resolve({
                Servers: servers,
                State: servers.length || self.connectUser() ? ConnectionState.ServerSelection : ConnectionState.ConnectSignIn,
                ConnectUser: self.connectUser()
            });
        }, self.connectToServer = function(server, options) {
            return console.log("begin connectToServer"), new Promise(function(resolve, reject) {
                var tests = [];
                null != server.LastConnectionMode, tests.indexOf(ConnectionMode.Manual) === -1 && tests.push(ConnectionMode.Manual), 
                tests.indexOf(ConnectionMode.Local) === -1 && tests.push(ConnectionMode.Local), 
                tests.indexOf(ConnectionMode.Remote) === -1 && tests.push(ConnectionMode.Remote), 
                options = options || {}, console.log("beginning connection tests"), testNextConnectionMode(tests, 0, server, options, resolve);
            });
        }, self.connectToAddress = function(address, options) {
            function onFail() {
                return console.log("connectToAddress " + address + " failed"), Promise.resolve({
                    State: ConnectionState.Unavailable,
                    ConnectUser: instance.connectUser()
                });
            }
            if (!address) return Promise.reject();
            address = normalizeAddress(address);
            var instance = this;
            return tryConnect(address, defaultTimeout).then(function(publicInfo) {
                console.log("connectToAddress " + address + " succeeded");
                var server = {
                    ManualAddress: address,
                    LastConnectionMode: ConnectionMode.Manual
                };
                return updateServerInfo(server, publicInfo), self.connectToServer(server, options).catch(onFail);
            }, onFail);
        }, self.loginToConnect = function(username, password) {
            return username && password ? ajax({
                type: "POST",
                url: "https://connect.emby.media/service/user/authenticate",
                data: {
                    nameOrEmail: username,
                    rawpw: password
                },
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                headers: {
                    "X-Application": appName + "/" + appVersion
                }
            }).then(function(result) {
                var credentials = credentialProvider.credentials();
                return credentials.ConnectAccessToken = result.AccessToken, credentials.ConnectUserId = result.User.Id, 
                credentialProvider.credentials(credentials), onConnectUserSignIn(result.User), result;
            }) : Promise.reject();
        }, self.signupForConnect = function(options) {
            var email = options.email, username = options.username, password = options.password, passwordConfirm = options.passwordConfirm;
            if (!email) return Promise.reject({
                errorCode: "invalidinput"
            });
            if (!username) return Promise.reject({
                errorCode: "invalidinput"
            });
            if (!password) return Promise.reject({
                errorCode: "invalidinput"
            });
            if (!passwordConfirm) return Promise.reject({
                errorCode: "passwordmatch"
            });
            if (password !== passwordConfirm) return Promise.reject({
                errorCode: "passwordmatch"
            });
            var data = {
                email: email,
                userName: username,
                rawpw: password
            };
            return options.grecaptcha && (data.grecaptcha = options.grecaptcha), ajax({
                type: "POST",
                url: "https://connect.emby.media/service/register",
                data: data,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                headers: {
                    "X-Application": appName + "/" + appVersion,
                    "X-CONNECT-TOKEN": "CONNECT-REGISTER"
                }
            }).catch(function(response) {
                try {
                    return response.json();
                } catch (err) {
                    throw err;
                }
            }).then(function(result) {
                return result && result.Status ? "SUCCESS" === result.Status ? Promise.resolve(result) : Promise.reject({
                    errorCode: result.Status
                }) : void Promise.reject();
            });
        }, self.getUserInvitations = function() {
            var connectToken = self.connectToken();
            if (!connectToken) throw new Error("null connectToken");
            if (!self.connectUserId()) throw new Error("null connectUserId");
            var url = "https://connect.emby.media/service/servers?userId=" + self.connectUserId() + "&status=Waiting";
            return ajax({
                type: "GET",
                url: url,
                dataType: "json",
                headers: {
                    "X-Connect-UserToken": connectToken,
                    "X-Application": appName + "/" + appVersion
                }
            });
        }, self.deleteServer = function(serverId) {
            if (!serverId) throw new Error("null serverId");
            var server = credentialProvider.credentials().Servers.filter(function(s) {
                return s.Id === serverId;
            });
            return server = server.length ? server[0] : null, new Promise(function(resolve, reject) {
                function onDone() {
                    var credentials = credentialProvider.credentials();
                    credentials.Servers = credentials.Servers.filter(function(s) {
                        return s.Id !== serverId;
                    }), credentialProvider.credentials(credentials), resolve();
                }
                if (!server.ConnectServerId) return void onDone();
                var connectToken = self.connectToken(), connectUserId = self.connectUserId();
                if (!connectToken || !connectUserId) return void onDone();
                var url = "https://connect.emby.media/service/serverAuthorizations?serverId=" + server.ConnectServerId + "&userId=" + connectUserId;
                ajax({
                    type: "DELETE",
                    url: url,
                    headers: {
                        "X-Connect-UserToken": connectToken,
                        "X-Application": appName + "/" + appVersion
                    }
                }).then(onDone, onDone);
            });
        }, self.rejectServer = function(serverId) {
            var connectToken = self.connectToken();
            if (!serverId) throw new Error("null serverId");
            if (!connectToken) throw new Error("null connectToken");
            if (!self.connectUserId()) throw new Error("null connectUserId");
            var url = "https://connect.emby.media/service/serverAuthorizations?serverId=" + serverId + "&userId=" + self.connectUserId();
            return fetch(url, {
                method: "DELETE",
                headers: {
                    "X-Connect-UserToken": connectToken,
                    "X-Application": appName + "/" + appVersion
                }
            });
        }, self.acceptServer = function(serverId) {
            var connectToken = self.connectToken();
            if (!serverId) throw new Error("null serverId");
            if (!connectToken) throw new Error("null connectToken");
            if (!self.connectUserId()) throw new Error("null connectUserId");
            var url = "https://connect.emby.media/service/ServerAuthorizations/accept?serverId=" + serverId + "&userId=" + self.connectUserId();
            return ajax({
                type: "GET",
                url: url,
                headers: {
                    "X-Connect-UserToken": connectToken,
                    "X-Application": appName + "/" + appVersion
                }
            });
        }, self.getRegistrationInfo = function(feature, apiClient) {
            var cacheKey = "regInfo-" + apiClient.serverInfo().Id;
            appStorage.setItem(cacheKey, JSON.stringify({
                lastValidDate: new Date().getTime(),
                deviceId: self.deviceId()
            }));
            return Promise.resolve();
        }, self.createPin = function() {
            var request = {
                type: "POST",
                url: getConnectUrl("pin"),
                data: {
                    deviceId: deviceId
                },
                dataType: "json"
            };
            return addAppInfoToConnectRequest(request), ajax(request);
        }, self.getPinStatus = function(pinInfo) {
            if (!pinInfo) throw new Error("pinInfo cannot be null");
            var queryString = {
                deviceId: pinInfo.DeviceId,
                pin: pinInfo.Pin
            }, request = {
                type: "GET",
                url: getConnectUrl("pin") + "?" + paramsToString(queryString),
                dataType: "json"
            };
            return addAppInfoToConnectRequest(request), ajax(request);
        }, self.exchangePin = function(pinInfo) {
            if (!pinInfo) throw new Error("pinInfo cannot be null");
            return exchangePin(pinInfo).then(function(result) {
                var credentials = credentialProvider.credentials();
                return credentials.ConnectAccessToken = result.AccessToken, credentials.ConnectUserId = result.UserId, 
                credentialProvider.credentials(credentials), ensureConnectUser(credentials);
            });
        };
    };
    return ConnectionManager.prototype.connect = function(options) {
        console.log("Begin connect");
        var instance = this;
        return instance.getAvailableServers().then(function(servers) {
            return instance.connectToServers(servers, options);
        });
    }, ConnectionManager.prototype.isLoggedIntoConnect = function() {
        return !(!this.connectToken() || !this.connectUserId());
    }, ConnectionManager.prototype.getApiClients = function() {
        for (var servers = this.getSavedServers(), i = 0, length = servers.length; i < length; i++) {
            var server = servers[i];
            server.Id && this._getOrAddApiClient(server, server.LastConnectionMode);
        }
        return this._apiClients;
    }, ConnectionManager.prototype.getApiClient = function(item) {
        if (!item) throw new Error("item or serverId cannot be null");
        return item.ServerId && (item = item.ServerId), this._apiClients.filter(function(a) {
            var serverInfo = a.serverInfo();
            return !serverInfo || serverInfo.Id === item;
        })[0];
    }, ConnectionManager.prototype.minServerVersion = function(val) {
        return val && (this._minServerVersion = val), this._minServerVersion;
    }, {
        ConnectionState: ConnectionState,
        ConnectionMode: ConnectionMode,
        ServerInfo: ServerInfo,
        ConnectionManager: ConnectionManager
    };
});

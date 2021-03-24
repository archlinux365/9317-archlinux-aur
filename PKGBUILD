# Maintainer: dr460nf1r3 <dr460nf1r3@garudalinux.org>
# Maintainer: vnepogodin
# Contributor: Kyle De'Vir (QuartzDragon) <kyle[dot]devir[at]mykolab[dot]com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Maxwell Anselm <silverhammermba+aur@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firedragon-stable
_pkgname=FireDragon
__pkgname=firedragon
pkgver=87.0
pkgrel=1
pkgdesc="Librewolf fork build using custom branding & new features using stable as source."
arch=(x86_64 aarch64)
license=(MPL GPL LGPL)
url="https://gitlab.com/dr460nf1r3/settings/"
depends=(gtk3 libxt mime-types dbus-glib
         ffmpeg nss-hg ttf-font libpulse whoogle-git
         libvpx libjpeg zlib icu libevent libpipewire02)
makedepends=(unzip zip diffutils yasm mesa imake inetutils
             rust mozilla-common xorg-server-xwayland xorg-server-xvfb
             autoconf2.13 mercurial clang llvm jack gtk2 nodejs cbindgen nasm
             python-setuptools python-psutil python-zstandard git binutils lld)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'libappindicator-gtk3: Global menu support for GTK apps'
            'appmenu-gtk-module-git: Appmenu for GTK only'
            'plasma5-applets-window-appmenu: Appmenu for Plasma only')
options=(!emptydirs !makeflags !strip)
replaces=('dragonwolf')
provides=('firedragon')
conflicts=('firedragon')
_linux_commit=e123b80f7df1ad9043435f345c426717ca323579
_repo=https://hg.mozilla.org/mozilla-unified
install=firedragon.install
source_x86_64=(https://archive.mozilla.org/pub/firefox/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
               $__pkgname.desktop
               "git+https://gitlab.com/dr460nf1r3/common.git"
               "git+https://gitlab.com/dr460nf1r3/settings.git"
               https://gitlab.com/librewolf-community/browser/linux/-/raw/master/unity-menubar.patch
               https://gitlab.com/librewolf-community/browser/linux/-/raw/master/remove_addons.patch
               https://gitlab.com/librewolf-community/browser/linux/-/raw/master/context-menu.patch
               https://gitlab.com/librewolf-community/browser/linux/-/raw/master/mozilla-vpn-ad.patch)
source_aarch64=(https://archive.mozilla.org/pub/firefox/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
                $__pkgname.desktop
                "git+https://gitlab.com/dr460nf1r3/common.git"
                "git+https://gitlab.com/dr460nf1r3/settings.git"
                https://gitlab.com/librewolf-community/browser/linux/-/raw/master/unity-menubar.patch
                https://gitlab.com/librewolf-community/browser/linux/-/raw/master/remove_addons.patch
                https://gitlab.com/librewolf-community/browser/linux/-/raw/master/context-menu.patch
                arm.patch
                build-arm-libopus.patch
                https://gitlab.com/librewolf-community/browser/linux/-/raw/master/mozilla-vpn-ad.patch)

sha512sums_x86_64=('c1c08be2283e7a162c8be2f2647ec2bb85cab592738dc45e4b4ffb72969229cc0019a30782a4cb27f09a13b088c63841071dd202b3543dfba295140a7d6246a4'
                   '1688d8696f0a4451bc1211707362ca79d302ae0e8153be8326392b5617cb3944344e9d8fe17d0b1d5fe7df6d38fd44d4d33e3eb84e7b8763c37aeab4b2c26290'
                   'SKIP'
                   'SKIP'
                   'd44fd0175a132a091b59ecf57f4a0bc215d6a33eeca9dbbff701201cd5a96a1dd6539afc4ef1503c3ba2ee8e241c3e75b856f12efcc4f7db82f2cd6e880f124f'
                   '8a8ae3276914cd8812feb99acac8c2363f5530656593bebaed5cf67defec19153c30409b6fba418162c7e7f2876554202bbcf5f356d7e785488859879161d921'
                   'a4274739be161710d90fdb674315ef4b0696ce6e092641a62f7a18c5a773de959a38fe52e0c8683821753a99e4337ea3e448579937d684e22345f7d936161061'
                   '43d008c63a6b90a3710c4e1bf6ccebcb0987316213fa993fd1bd4b47d9a5d553f51471467c9d9ab454911b9d6fb575e3035cd7a3f9e61dbb72fe3b0a3b20a066')
sha512sums_aarch64=('c1c08be2283e7a162c8be2f2647ec2bb85cab592738dc45e4b4ffb72969229cc0019a30782a4cb27f09a13b088c63841071dd202b3543dfba295140a7d6246a4'
                    '1688d8696f0a4451bc1211707362ca79d302ae0e8153be8326392b5617cb3944344e9d8fe17d0b1d5fe7df6d38fd44d4d33e3eb84e7b8763c37aeab4b2c26290'
                    'SKIP'
                    'SKIP'
                    'd44fd0175a132a091b59ecf57f4a0bc215d6a33eeca9dbbff701201cd5a96a1dd6539afc4ef1503c3ba2ee8e241c3e75b856f12efcc4f7db82f2cd6e880f124f'
                    '8a8ae3276914cd8812feb99acac8c2363f5530656593bebaed5cf67defec19153c30409b6fba418162c7e7f2876554202bbcf5f356d7e785488859879161d921'
                    'a4274739be161710d90fdb674315ef4b0696ce6e092641a62f7a18c5a773de959a38fe52e0c8683821753a99e4337ea3e448579937d684e22345f7d936161061'
                    '7c2f0c792eb5744eaf0f2ee7c0887a74118796d691029e824451b063d5ba9e65626617ad343f69837297b2002446e02ac1d5ab3bc470419ae092424abf08293f'
                    '6d464cce32cb2e440fb137666aeefec1240bcbdfdef0e8633e0fbe22e2214446b2c992ee2c8716c682a42fcd1d66d9fdf1d6d5b40f8ec3b0eeec5ca9e3f1aa35'
                    '43d008c63a6b90a3710c4e1bf6ccebcb0987316213fa993fd1bd4b47d9a5d553f51471467c9d9ab454911b9d6fb575e3035cd7a3f9e61dbb72fe3b0a3b20a066')

prepare() {
  if [[ ! -d mozbuild ]];then
      mkdir mozbuild
  fi
  cd firefox-$pkgver

  #
  # If you want to disable LTO/PGO (compile too long), delete the lines below beginning with
  # `ac_add_options --enable-lto' and ending with 'export RANLIB=llvm-ranlib`
  #

  cat >../mozconfig <<END
ac_add_options --enable-application=browser
mk_add_options MOZ_OBJDIR=${PWD@Q}/obj

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-rust-simd
ac_add_options --enable-default-toolkit=cairo-gtk3-wayland
export CC='clang'
export CXX='clang++'

# Branding
ac_add_options --enable-update-channel=nightly
ac_add_options --with-app-name=${__pkgname}
ac_add_options --with-app-basename='${___pkgname}'
ac_add_options --with-branding=browser/branding/firedragon
ac_add_options --with-distribution-id=org.garudalinux
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload
export MOZ_REQUIRE_SIGNING=1
export MOZ_APP_REMOTINGNAME=${__pkgname//-/}

export STRIP_FLAGS="--strip-debug --strip-unneeded"

# System libraries
ac_add_options --with-system-nspr
ac_add_options --with-system-nss
ac_add_options --with-system-libvpx
ac_add_options --with-system-libevent
ac_add_options --with-system-icu
ac_add_options --with-system-zlib
ac_add_options --with-system-jpeg

# Features
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --disable-warnings-as-errors
ac_add_options --disable-crashreporter
ac_add_options --disable-tests
ac_add_options --disable-debug
ac_add_options --disable-updater
ac_add_options --enable-strip
ac_add_options --disable-gpsd
ac_add_options --disable-synth-speechd
ac_add_options --disable-debug-symbols
ac_add_options --disable-debug-js-modules
ac_add_options --disable-cdp
ac_add_options --disable-trace-logging
ac_add_options --disable-rust-tests
ac_add_options --disable-ipdl-tests
ac_add_options --disable-necko-wifi
ac_add_options --disable-webspeech
ac_add_options --disable-webspeechtestbackend

# Disables crash reporting, telemetry and other data gathering tools
mk_add_options MOZ_CRASHREPORTER=0
mk_add_options MOZ_DATA_REPORTING=0
mk_add_options MOZ_SERVICES_HEALTHREPORT=0
mk_add_options MOZ_TELEMETRY_REPORTING=0

# options for ci / weaker build systems
# mk_add_options MOZ_MAKE_FLAGS="-j4"
# ac_add_options --enable-linker=gold
END

if [[ $CARCH == 'aarch64' ]]; then
  cat >>../mozconfig <<END
# taken from manjaro build:
ac_add_options --enable-optimize="-g0 -O2"
# from ALARM
# ac_add_options --disable-webrtc

END

  export MOZ_DEBUG_FLAGS=" "
  export CFLAGS+=" -g0"
  export CXXFLAGS+=" -g0"
  export RUSTFLAGS="-Cdebuginfo=0"

  # we should have more than enough RAM on the CI spot instances.
  # ...or maybe not?
  export LDFLAGS+=" -Wl,--no-keep-memory"
  patch -p1 -i ../arm.patch
  patch -p1 -i ../build-arm-libopus.patch

else

  cat >>../mozconfig <<END
# probably not needed, enabled by default?
ac_add_options --enable-optimize
END
fi

  # Remove some pre-installed addons that might be questionable
  patch -p1 -i ../remove_addons.patch

  # Enable global menubar
  patch -p1 -i ../unity-menubar.patch

  # Disabling Pocket
  sed -i "s/'pocket'/#'pocket'/g" browser/components/moz.build

  patch -p1 -i ../context-menu.patch

  # this one only to remove an annoying error message:
  sed -i 's#SaveToPocket.init();#// SaveToPocket.init();#g' browser/components/BrowserGlue.jsm

  # Remove Internal Plugin Certificates
  _cert_sed='s#if (aCert.organizationalUnit == "Mozilla [[:alpha:]]\+") {\n'
  _cert_sed+='[[:blank:]]\+return AddonManager\.SIGNEDSTATE_[[:upper:]]\+;\n'
  _cert_sed+='[[:blank:]]\+}#'
  _cert_sed+='// NOTE: removed#g'
  sed -z "$_cert_sed" -i toolkit/mozapps/extensions/internal/XPIInstall.jsm

  # allow SearchEngines option in non-ESR builds
  sed -i 's#"enterprise_only": true,#"enterprise_only": false,#g' browser/components/enterprisepolicies/schemas/policies-schema.json

  _settings_services_sed='s#firefox.settings.services.mozilla.com#f.s.s.m.c.qjz9zk#g'

  # stop some undesired requests (https://gitlab.com/librewolf-community/browser/common/-/issues/10)
  sed "$_settings_services_sed" -i browser/components/newtab/data/content/activity-stream.bundle.js
  sed "$_settings_services_sed" -i modules/libpref/init/all.js
  sed "$_settings_services_sed" -i services/settings/Utils.jsm
  sed "$_settings_services_sed" -i toolkit/components/search/SearchUtils.jsm

  rm -f ${srcdir}/common/source_files/mozconfig
  cp -r ${srcdir}/common/source_files/* ./
}

build() {
  cd firefox-$pkgver

  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export MACH_USE_SYSTEM_PYTHON=1

  # LTO/PGO needs more open files
  ulimit -n 4096

  # -fno-plt with cross-LTO causes obscure LLVM errors
  # LLVM ERROR: Function Import: link error
  # CFLAGS="${CFLAGS/-fno-plt/}"
  # CXXFLAGS="${CXXFLAGS/-fno-plt/}"

  # Do 3-tier PGO
  echo "Building instrumented browser..."

if [[ $CARCH == 'aarch64' ]]; then

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate
END

else

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END

fi

  ./mach build

  echo "Profiling instrumented browser..."
  ./mach package
  LLVM_PROFDATA=llvm-profdata \
    JARLOG_FILE="$PWD/jarlog" \
    xvfb-run -s "-screen 0 1920x1080x24 -nolisten local" \
    ./mach python build/pgo/profileserver.py

  if [[ ! -s merged.profdata ]]; then
    echo "No profile data produced."
    return 1
  fi

  if [[ ! -s jarlog ]]; then
    echo "No jar log produced."
    return 1
  fi

  echo "Removing instrumented browser..."
  ./mach clobber

  echo "Building optimized browser..."

if [[ $CARCH == 'aarch64' ]]; then

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto
ac_add_options --enable-profile-use
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
ac_add_options --enable-linker=lld
END

else

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
ac_add_options --enable-linker=lld
ac_add_options --disable-elf-hack
END

fi

  ./mach build

  echo "Building symbol archive..."
  ./mach buildsymbols
}

package() {
  cd firefox-$pkgver
  DESTDIR="$pkgdir" ./mach install

  install -Dvm644 "$srcdir/settings/$__pkgname.profile" "$pkgdir/etc/firejail/$__pkgname.profile"
  install -Dvm644 "$srcdir/settings/$__pkgname-common.profile" "$pkgdir/etc/firejail/$__pkgname-common.profile"
  install -Dvm644 "$srcdir/settings/$__pkgname.psd" "$pkgdir/usr/share/psd/browsers/firedragon"
  
  rm "$pkgdir"/usr/lib/${__pkgname}/pingsender
  
  _vendorjs="$pkgdir/usr/lib/$__pkgname/browser/defaults/preferences/vendor.js"

  install -Dm644 /dev/stdin "$_vendorjs" <<END
// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Don't disable extensions in the application directory
// done in dragonwolf.cfg
// pref("extensions.autoDisableScopes", 11);
END

  # cd ${srcdir}/settings
  # git checkout ${_settings_commit}
  cd ${srcdir}/mozilla-unified
  cp -r ${srcdir}/settings/* ${pkgdir}/usr/lib/${__pkgname}/

  _distini="$pkgdir/usr/lib/$__pkgname/distribution/distribution.ini"
  install -Dm644 /dev/stdin "$_distini" <<END
[Global]
id=garudalinux
version=1.0
about=$_pkgname for Garuda Linux

[Preferences]
app.distributor=garudalinux
app.distributor.channel=$__pkgname
app.partner.garudalinux=garudalinux
END

  for i in 16 32 48 64 128; do
    install -Dm644 browser/branding/${__pkgname}/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$__pkgname.png"
  done
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/$__pkgname.png"

  # arch upstream provides a separate svg for this. we don't have that, so let's re-use 16.png
  install -Dm644 browser/branding/${__pkgname}/default16.png \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$__pkgname-symbolic.png"

  install -Dm644 ../$__pkgname.desktop \
    "$pkgdir/usr/share/applications/$__pkgname.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/$__pkgname" <<END
#!/bin/sh
exec /usr/lib/$__pkgname/$__pkgname "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srf "$pkgdir/usr/bin/$__pkgname" \
    "$pkgdir/usr/lib/$__pkgname/$__pkgname-bin"
}

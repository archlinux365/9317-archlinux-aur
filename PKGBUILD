# Maintainer: sehraf
# Contributor: stqn

# Set this to 'true' to build and install the plugins
#_plugin_feedreader=true
#_plugin_voip=true

# Set this to 'true' to enable auto login
#_autologin='true'

# Set this to 'true' to enable wiki functionality (experimental)
#_wiki='true'

# Set this to 'true' to use clang for compiling (experimental)
#_clang='true'

# Unofficial plugins
#_plugin_lua4rs='true'

# Set this to 'true' to use use archlinux' rapidjson instead of shipped version
#_systems_rapidjson='true'

### Nothing to be changed below this line ###

_pkgname=retroshare
pkgname=${_pkgname}-git
pkgver=v0.6.4.r389.g45306910d
pkgrel=1
pkgdesc="Serverless encrypted instant messenger with filesharing, chatgroups, e-mail."
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="http://retroshare.sourceforge.net/"
license=('GPL' 'LGPL')
depends=('qt5-multimedia' 'qt5-x11extras' 'libupnp' 'libxss' 'libmicrohttpd' 'sqlcipher' 'xapian-core')
makedepends=('git' 'qt5-tools')
optdepends=('tor: tor hidden node support'
            'i2p: i2p hidden node support')
provides=("${_pkgname}")
conflicts=("${_pkgname}")

source=("${_pkgname}::git+https://github.com/RetroShare/RetroShare.git")
sha256sums=('SKIP')

# Add missing dependencies if needed
[[ "$_plugin_voip" == 'true' ]] && depends=(${depends[@]} 'ffmpeg' 'opencv')
[[ "$_plugin_feedreader" == 'true' ]] && depends=(${depends[@]} 'curl' 'libxslt')
[[ "$_clang" == 'true' ]] && makedepends=(${makedepends[@]} 'clang')
[[ "$_autologin" == 'true' ]] && depends=(${depends[@]} 'libsecret')
[[ "$_systems_rapidjson" == 'true' ]] && makedepends=(${makedepends[@]} 'rapidjson')

# Set options for qmake
_optClang=''
_optAutol=''
_optPlugin=''
_optWiki=''
[[ "$_clang" == 'true' ]] && _optClang='-spec linux-clang CONFIG+=c++11'
[[ "$_autologin" == 'true' ]] && _optAutol='CONFIG+=rs_autologin'
([[ "$_plugin_voip" == 'true' ]] || [[ "$_plugin_feedreader" == 'true' ]] || [[ "$_plugin_lua4rs" == 'true' ]]) && _optPlugin='CONFIG+=retroshare_plugins'
[[ "$_wiki" == 'true' ]] && _optWiki='CONFIG+=wikipoos'

# Handle unofficial plugins
if [[ "$_plugin_lua4rs" == 'true' ]] ; then
	depends=(${depends[@]} 'lua')
	source=(${source[@]} 'Lua4RS::git+https://github.com/RetroShare/Lua4RS.git')
	sha256sums=(${sha256sums[@]} 'SKIP')
fi

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/${_pkgname}"

	# Handle unofficial plugins
	if [[ "$_plugin_lua4rs" == 'true' ]] ; then
		[[ -d 'plugins/Lua4RS' ]] &&  rm -r plugins//Lua4RS
		cp -r -l "${srcdir}/Lua4RS" plugins/
		sed -i -e 's/SUBDIRS += \\/SUBDIRS += \\\n\t\tLua4RS \\/g' plugins/plugins.pro
	fi

	# remove unwanted plugins
	[[ "$_plugin_voip" != 'true' ]] && sed -i '/VOIP \\/d' plugins/plugins.pro
	[[ "$_plugin_feedreader" != 'true' ]] && sed -i '/FeedReader/d' plugins/plugins.pro

	# call version scripts
	cd libretroshare/src
	LANG=C ./version_detail.sh
	cd ../..

	cd retroshare-gui/src
	LANG=C ./version_detail.sh
	cd ../..

	qmake   CONFIG-=debug CONFIG+=release \
		${_optAutol} ${_optClang} ${_optPlugin} ${_optWiki} \
		QMAKE_CFLAGS_RELEASE="${CFLAGS}" \
		QMAKE_CXXFLAGS_RELEASE="${CXXFLAGS}" \
		RetroShare.pro
	make
}

package() {
	cd "${srcdir}/${_pkgname}"

	make INSTALL_ROOT="${pkgdir}" install
}

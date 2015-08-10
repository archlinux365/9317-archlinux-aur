# Maintainer: sehraf
# Contributor: stqn

# Set this to true to build and install retroshare-nogui
_build_nogui=true

# Set this to true to build and install the plugins
_build_feedreader=false
_build_voip=false

### Nothing to be changed below this line ###

_pkgname=retroshare
pkgname=${_pkgname}-git
pkgver=v0.6.0.RC2.r29.g13e77fb
pkgrel=1
pkgdesc="Serverless encrypted instant messenger with filesharing, chatgroups, e-mail."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://retroshare.sourceforge.net/"
license=('GPL' 'LGPL')

depends=('qt4' 'libupnp' 'libgnome-keyring' 'libxss' 'libmicrohttpd' 'sqlcipher')
makedepends=('git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")

install='retroshare.install'

source=("${_pkgname}::git+https://github.com/RetroShare/RetroShare.git"
		'retroshare.install')

sha256sums=('SKIP'
            '47c23238cbfabb6f07b6a25666ee5941243176360ca28ec31378d94e87326ec1')

# Add missing dependencies if needed
[[ $_build_voip == true ]] && depends=(${depends[@]} 'speex' 'opencv')
[[ $_build_feedreader == true ]] && depends=(${depends[@]} 'curl' 'libxslt')

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/${_pkgname}"

	_qmake='qmake-qt4'

	#
	# BUILD HERE
	#
	msg "Compiling OpenPGP-SDK..."
	cd openpgpsdk/src
	$_qmake
	make
	cd ../..

	msg "Compiling libbitdht..."
	cd libbitdht/src
	$_qmake
	make
	cd ../..

	msg "Compiling pegmarkdown..."
	cd supportlibs/pegmarkdown
	$_qmake
	make
	cd ../..

	msg "Compiling libretroshare..."
	cd libretroshare/src
	$_qmake
	LANG=C ./version_detail.sh
	make
	cd ../..

	msg "Compiling libresapi..."
	cd libresapi/src
	$_qmake
	make
	# i'm not 100% sure if this step is required
	# it will download/update some JavaScript files
	msg "Updating webui files..."
	cd webui
	make
	cd ..
	cd ../..

	msg "Compiling retroshare-gui..."
	cd retroshare-gui/src
	$_qmake
	LANG=C ./version_detail.sh
	make
	cd ../..

	if [[ "$_build_voip" == "true" ]] ; then
		msg "Compiling VOIP plugin..."
		cd plugins/VOIP
		$_qmake
		make
		cd ../..
	fi

	if [[ "$_build_feedreader" == "true" ]] ; then
		msg "Compiling FeedReader plugin..."
		cd plugins/FeedReader
		$_qmake
		make
		cd ../..
	fi

	if [[ "$_build_nogui" == "true" ]]; then
		msg "Compiling retroshare-nogui..."
		cd retroshare-nogui/src
		$_qmake
		make
		cd ../..
	fi
}

package() {
	cd "${srcdir}/${_pkgname}"

	# Binaries
	install -D -m 755 \
		retroshare-gui/src/RetroShare \
		"$pkgdir/usr/bin/retroshare"
	if [[ "$_build_nogui" == "true" ]]; then
		install -D -m 755 \
			"retroshare-nogui/src/retroshare-nogui" \
			"${pkgdir}/usr/bin/retroshare-nogui"
	fi

	# Webui files
	install -d -m 655 "${pkgdir}/usr/share/RetroShare06/webui/"
	for _file in $(ls libresapi/src/webfiles/); do
		install -D -m 644 \
			"libresapi/src/webfiles/${_file}" \
			"${pkgdir}/usr/share/RetroShare06/webui/"
	done

	# Plugins
	if [[ "$_build_voip" == "true" ]] ; then
		install -D -m 755 \
			"plugins/VOIP/libVOIP.so" \
			"${pkgdir}/usr/lib/retroshare/extensions6/libVOIP.so"
	fi
	if [[ "$_build_feedreader" == "true" ]] ; then
		install -D -m 755 \
			"plugins/FeedReader/libFeedReader.so" \
			"${pkgdir}/usr/lib/retroshare/extensions6/libFeedReader.so"
	fi

	# Applications menu entry
	mkdir -p "$pkgdir/usr/share/applications"
	cat >"$pkgdir/usr/share/applications/retroshare.desktop" <<EOF
[Desktop Entry]
Version=1.0
Type=Application
Name=RetroShare
GenericName=Sharing Network
Comment=Secure communication with your friends
Icon=/usr/share/pixmaps/retroshare_blue.png
Exec=/usr/bin/retroshare
Terminal=false
StartupNotify=true
Categories=Network;InstantMessaging;FileTransfer;Chat;Email;
EOF
	install -D -m 644 \
		"retroshare-gui/src/gui/images/logo/logo_512.png" \
		"${pkgdir}/usr/share/pixmaps/retroshare_blue.png"

	# bdboot (needed to bootstrap the DHT)
	install -D -m 644 \
		"libbitdht/src/bitdht/bdboot.txt" \
		"${pkgdir}/usr/share/RetroShare06/bdboot.txt"

	# Skins
	cp -r "retroshare-gui/src/qss" "${pkgdir}/usr/share/RetroShare06/"
}

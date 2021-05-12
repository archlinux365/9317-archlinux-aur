# Maintainer: luosoy <249799588@qq.com>

pkgname=com.dingtalk.deepin
pkgver=5.1.28.12deepin11
pkgrel=1
epoch=
pkgdesc="Deepin Wine dingtalk"
arch=('i686' 'x86_64')
url="https://www.dingtalk.com/"
license=('Proprietary')
groups=()
depends=(
        'lib32-alsa-plugins' 'lib32-glib2' 'lib32-glibc' 'libgphoto2'
        'lib32-gst-plugins-base-libs' 'lib32-lcms2' 'lib32-libldap' 'lib32-mpg123'
        'lib32-openal' 'lib32-libpcap' 'lib32-libcanberra-pulse' 'lib32-libudev0-shim'
        'lib32-libusb' 'lib32-vkd3d' 'lib32-libx11' 'lib32-libxext' 'lib32-libxml2'
        'lib32-ocl-icd' 'deepin-udis86' 'lib32-zlib' 'lib32-ncurses' 'lib32-fontconfig'
        'lib32-freetype2' 'lib32-gettext' 'lib32-libxcursor' 'lib32-mesa' 'lib32-libjpeg6'
        'lib32-libxrandr' 'lib32-libxi' 'lib32-glu'
    )
makedepends=('tar')
checkdepends=()
optdepends=()
provides=()
conflicts=('deepin.com.dingtalk.com')
replaces=()
backup=()
options=()
install=
changelog=
source=("https://community-store-packages.deepin.com/appstore/pool/appstore/c/${pkgname}/${pkgname}_${pkgver}_i386.deb")
noextract=("${pkgname}_${pkgver}_i386.deb")
md5sums=('2dddfc8f1e09648d83d9e344ef1d70a9')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgver}_i386.deb
	mkdir ${pkgname}-${pkgver}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgver}"
}

package() {
	cd "${pkgname}-${pkgver}"
	cp -r ./ ${pkgdir}/
	mkdir -p ${pkgdir}/usr/share/applications
	install -Dm644 ${srcdir}/${pkgname}-${pkgver}/opt/apps/${pkgname}/entries/applications/${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
	cp -r ${srcdir}/${pkgname}-${pkgver}/opt/apps/${pkgname}/entries/icons/ ${pkgdir}/usr/share/
}

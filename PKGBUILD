# Contributer: abcfy2 <abcfy2@163.com>
pkgname='deepin-wine5-stable'
pkgver=5.0.0.19
pkgrel=2
pkgdesc="Deepin Wine5 stable"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
# The depenency list is copied from abcfy2/deepin-wine5-i386 package
depends=(
        'lib32-alsa-plugins' 'lib32-glib2' 'lib32-glibc' 'libgphoto2'
        'lib32-gst-plugins-base-libs' 'lib32-lcms2' 'lib32-libldap' 'lib32-mpg123'
        'lib32-openal' 'lib32-libpcap' 'lib32-libcanberra-pulse' 'lib32-libudev0-shim'
        'lib32-libusb' 'lib32-vkd3d' 'lib32-libx11' 'lib32-libxext' 'lib32-libxml2'
        'lib32-ocl-icd' 'deepin-udis86' 'lib32-zlib' 'lib32-ncurses' 'lib32-fontconfig'
        'lib32-freetype2' 'lib32-gettext' 'lib32-libxcursor' 'lib32-mesa' 'lib32-libjpeg6'
        'lib32-libxrandr' 'lib32-libxi' 'lib32-glu'
    )
makedepends=('tar' 'p7zip')
source=(
    "https://cdn-package-store6.deepin.com/appstore/pool/appstore/c/com.youku.deepin/com.youku.deepin_8.0.7.11061deepin2_i386.deb"
)
sha256sums=('09fae5688383d9706001c72c04f09667215263446ab3f9ee15ddd80de517cb9e')

package() {
	cd ${srcdir}
	tar xpvf data.tar.xz --xattrs-include='*' --numeric-owner
	install -d ${pkgdir}/usr/lib/deepin-wine5-stable
    7z x -o${pkgdir}/usr/lib/deepin-wine5-stable opt/apps/com.youku.deepin/files/wine_archive.7z
}

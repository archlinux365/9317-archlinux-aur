# Maintainer: zaps166 <spaz16@wp.pl>

pkgname=qmplay2-git
pkgver=16.06.14
pkgrel=2
pkgdesc='QMPlay2 is a video and audio player which can play most formats and codecs'
arch=('i686' 'x86_64' 'armv7' 'armv6' 'armv5')
url='http://qt-apps.org/content/show.php/QMPlay2?content=153339'
license=('LGPL')
depends=('qt5-base' 'qt5-x11extras' 'ffmpeg' 'libass' 'libgl' 'libva' 'libxv' 'alsa-lib' 'libcdio' 'taglib' 'libcddb' 'libpulse' 'libgme' 'libsidplayfp' 'xdg-utils')
optdepends=('pulseaudio' 'youtube-dl')
conflicts=('qmplay2')
provides=('qmplay2')
makedepends=('make' 'gcc' 'git' 'pkg-config' 'qt5-tools' 'cmake')
source=('git+https://github.com/zaps166/QMPlay2')
sha256sums=('SKIP')
install=$pkgname.install

pkgver()
{
	cd $srcdir/QMPlay2
	./version
}

build()
{
	cd $srcdir
	mkdir -p QMPlay2-build
	cd QMPlay2-build
	cmake ../QMPlay2 -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib
	make

# 	QT_SUFFIX=-qt5 SYSTEM_BUILD=1 ./compile_unix 0
}

package()
{
	cd $srcdir/QMPlay2-build
	make DESTDIR=$pkgdir install

# 	mv $srcdir/QMPlay2/app $pkgdir/usr
# 	mkdir -p $pkgdir/usr/share/mime/packages
# 	cp $srcdir/QMPlay2/src/gui/Unix/x-*.xml $pkgdir/usr/share/mime/packages
}

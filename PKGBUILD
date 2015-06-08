# Maintainer: b00rt00s ( bomby dot zrzuc at gmail dot com )
pkgname=drawxtl
pkgver=5.5
pkgrel=2
pkgdesc="Crystal structure visualization tool"
arch=('i686' 'x86_64')
url="http://www.lwfinger.net/drawxtl/"
provides=('DRAWxtl')
depends=('fltk' 'fontconfig' 'glibc' 'libxpm' 'libxft' 'mesa' 'libgl' 'libxinerama' 'libxext' 'libx11')

makedepends=('gcc')
license=('GPL2')
#install=${pkgname}.install
source=(
	"http://www.lwfinger.com/drawxtl/DRAWxtl55.tar.gz"
	"makefile.patch"
	"drawxtl.desktop"
)
	
md5sums=(
	'c8323695b152a1b5e58ddf8ccb324a06'
	'bad81010282ace325011ed0493160000'
	'032e6a9a0926693fae487eded91b9c21'
)

build() {
cd  ${srcdir}/DRAWxtl/source/DRAWxtl55/

patch -p0 -i ../../../makefile.patch || return 1
make || return 1
}


package() {
#installing an executable
mkdir -p ${pkgdir}/usr/bin
install -D -m655 ${srcdir}/DRAWxtl/exe/DRAWxtl55 ${pkgdir}/usr/bin/DRAWxtl55
cd ${pkgdir}/usr/bin
ln -sf DRAWxtl55 drawxtl

#installing COPYING file
install -D -m644 ${srcdir}/DRAWxtl/source/DRAWxtl55/COPYING ${pkgdir}/usr/share/doc/drawxtl/COPYING

#installing pixmap
mkdir -p ${pkgdir}/usr/share/pixmaps
install -D -m644 ${srcdir}/DRAWxtl/source/DRAWxtl55/DRAWxtl.xpm ${pkgdir}/usr/share/pixmaps/drawxtl.xpm

#installing docs
mkdir -p ${pkgdir}/usr/share/doc/drawxtl

cd ${srcdir}/DRAWxtl/docs
for i in *; do
	install -D -m644 ${i} ${pkgdir}/usr/share/doc/drawxtl/${i}
	gzip -9 ${pkgdir}/usr/share/doc/drawxtl/${i}
done

#installing examples
mkdir -p ${pkgdir}/usr/share/doc/drawxtl/examples
cd ${srcdir}/DRAWxtl/examples
for i in *; do
	install -D -m644 ${i} ${pkgdir}/usr/share/doc/drawxtl/examples/${i}
done

#installing drawxtl.desktop file
install -D -m644 ${srcdir}/drawxtl.desktop ${pkgdir}/usr/share/applications/drawxtl.desktop
}


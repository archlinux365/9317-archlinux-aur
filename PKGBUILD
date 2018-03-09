# Asc - A simple compositor
#
# Maintainer: Eden Rose(EndlessEden) <eenov1988 [at] gmail [dot] com>
pkgname=asc-compositor-git
pkgver=0.01.9592cee
pkgrel=1
pkgdesc="A simple and tiny wayland compositor, written in c and lua."
arch=('any')
url="https://github.com/vktec/asc"
license=('GPL')
depends=('wayland')
provides=('asc-compositor'
		  'asc-compositor-git')
source=("asc-compositor-git::git://github.com/EndlessEden/asc.git"
        "asc.desktop")
md5sums=('SKIP'
		 '505301e6fd4ae300b5b7bb3867800e70')

pkgver() {
	cd $srcdir/"$pkgname"
	echo "0.01.$(git rev-parse --short HEAD)"
}

build() {
	cd $srcdir/"$pkgname"
	CC=cc
	make
}

package() {
	cd $pkgdir
	mkdir -p usr/bin/
	mkdir -p usr/share/xsessions/
	install -m655 $srcdir/"$pkgname"/"asc" $pkgdir/usr/bin/"asc-compositor"
	install -m655 $srcdir/asc.desktop $pkgdir/usr/share/xsessions/asc.desktop
}

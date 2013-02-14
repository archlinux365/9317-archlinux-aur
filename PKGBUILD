# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=kate-bracesane-plugin
pkgver=77269
pkgrel=1
pkgdesc="Autobrace plugin for the Kate text editor"
arch=('i686' 'x86_64')
depends=('kdesdk-kate')
makedepends=('cmake')
url="https://bugs.kde.org/show_bug.cgi?id=313455"
license=('GPL')
source=($pkgname-$pkgver.tbz2::https://bugs.kde.org/attachment.cgi?id=$pkgver)

build() {
	cd "$srcdir"
	rm -rf build
	mkdir build
	cd build
	cmake -DCMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=/usr ../bracesane
	make
}

package() {
	cd "$srcdir/build"
	make DESTDIR="$pkgdir" install
}

sha256sums=('6c5b256f43bb1e32bf8032f750385b13228ff08c1133bbfd0e75c944f3da44ca')

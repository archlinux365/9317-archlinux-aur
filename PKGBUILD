
# Maintainer: Victor Tran <vicr12345 at gmail dot com>
pkgname=tsscreenlock
pkgver=1.9
pkgrel=1
pkgdesc="Screen Locker for theShell"
arch=("x86_64")
url="https://github.com/vicr123/tsscreenlock"
license=('GPL3')
depends=('tscheckpass' 'qt5-base' 'qt5-multimedia')
makedepends=('git')
source=("$pkgname-$pkgver"::'git+https://github.com/vicr123/tsscreenlock#branch=master')
md5sums=('SKIP')

build() {
	cd "$pkgname-$pkgver"
	qmake
	make
}

package() {
	mkdir -p "$pkgdir/usr/lib"
	cp "$pkgname-$pkgver/tsscreenlock" "$pkgdir/usr/lib/"
}

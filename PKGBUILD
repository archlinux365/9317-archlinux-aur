# Maintainer: Ken Enda <buhibuhidog@gmail.com>

pkgname=tym
pkgver=1.0.8
pkgrel=1
pkgdesc="A tiny term for minimalists"
arch=('x86_64')
url="https://github.com/endaaman/tym"
license=('MIT')
depends=('vte3' 'lua')
source=("https://github.com/endaaman/${pkgname}/releases/download/$pkgver/${pkgname}-$pkgver.tar.gz")
sha1sums=('c955a0315b422ba4b7d5c3a07bc8c73f7d97c132')
build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}

# Maintainer: Joseph R. Quinn <quinn period joseph r at gmail dot com
pkgname=php-psr
pkgver=0.7.0  
pkgrel=1
pkgdesc="PHP extension providing the accepted PSR interfaces."
arch=('any')
url="https://github.com/jbboehr/php-psr"
license=('GPL')
depends=('php')
makedepends=('gcc>=4.4')
provides=("$pkgname")
backup=('etc/php/conf.d/psr.ini')
source=("https://github.com/jbboehr/$pkgname/archive/v$pkgver.tar.gz"
  'psr.ini')
sha1sums=('9d44acc24a37e90e08cf74c02817a80d750cd1b9'
          'a5111be5b2ea0c2be3a2b6795be6f47d60dc0d77')

build() {
	cd "$pkgname-$pkgver"
  phpize
	./configure --prefix=/usr
	make
}

package() {
	cd "$pkgname-$pkgver"
	make INSTALL_ROOT="$pkgdir/" install
  install -Dm644 "$srcdir/psr.ini" "$pkgdir/etc/php/conf.d/psr.ini"
}

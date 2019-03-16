# Maintainer: nepda <aur@nepda.eu>
pkgname="php-interbase"
pkgver=7.3.3
pkgrel=1
pkgdesc="Interbase PHP extension"
arch=("i686" "x86_64")
url="http://www.php.net"
license=("PHP")
depends=("php" "libfbclient")
source=("http://www.php.net/distributions/php-${pkgver}.tar.bz2"
	"interbase.ini")
md5sums=("03e37fb5246e868a569cdd4c857ba654"
	 "1294b282b70e9c1bf4f267b74f491baa")

build() {
	cd ${srcdir}/php-${pkgver}/ext/interbase
	phpize
	./configure --with-interbase=/opt/firebird
	make
}

package() {
	mkdir -p "$pkgdir"/{/usr/lib/php/modules,/etc/php/conf.d}
	install -m755 "$srcdir/php-$pkgver/ext/interbase/.libs/interbase.so" "$pkgdir/usr/lib/php/modules"
	install -m644 "$srcdir/interbase.ini" "$pkgdir/etc/php/conf.d"
}


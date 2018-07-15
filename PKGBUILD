# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>

pkgname=php53-memcache
pkgver=3.0.8
pkgrel=2
pkgdesc="Memcache module for PHP 5.3"
arch=('i686' 'x86_64')
url="http://pecl.php.net/package/memcache"
license=('PHP')
depends=('php53')
backup=('etc/php53/conf.d/memcache.ini')
install=php-memcache.install
source=(http://pecl.php.net/get/memcache-$pkgver.tgz)
sha256sums=('2cae5b423ffbfd33a259829849f6000d4db018debe3e29ecf3056f06642e8311')

build() {
  cd "$srcdir/memcache-$pkgver"

  phpize53
  ./configure --prefix=/usr --sysconfdir=/etc/php53 --with-php-config=/usr/bin/php-config53
  make
}

package() {
  cd "$srcdir/memcache-$pkgver"

  make INSTALL_ROOT="$pkgdir" install
  echo ';extension=memcache.so' >memcache.ini
  install -Dm644 memcache.ini "$pkgdir/etc/php53/conf.d/memcache.ini"
}

# vim:set ts=2 sw=2 et:

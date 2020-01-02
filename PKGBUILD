_phpbase=72
pkgname=php72-redis
pkgver=5.1.1
pkgrel=1
pkgdesc="PHP extension for interfacing with Redis"
url="http://pecl.php.net/package/redis"
arch=('x86_64')
license=('PHP')
makedepends=("php${_phpbase}")
depends=("php${_phpbase}")
backup=("etc/php${_phpbase}/conf.d/redis.ini")
source=(
    http://pecl.php.net/get/redis-${pkgver}.tgz
)

build() {
  cd "$srcdir/redis-$pkgver"
  phpize${_phpbase}
  ./configure --prefix=/usr --enable-redis-lzf
  make
}

package() {
  cd "$srcdir/redis-$pkgver"
  make INSTALL_ROOT="$pkgdir" install
  echo ';extension=redis.so' > redis.ini
  install -Dm644 redis.ini "$pkgdir/etc/php${_phpbase}/conf.d/redis.ini"
}
md5sums=('9221394dbf3d80c43be9e5ad51c1f9fd')

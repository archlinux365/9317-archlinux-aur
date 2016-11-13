# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Contributor: Justin Wilcox <nat1192 at gmail dot com>
pkgname=restbed
pkgver=4.0
pkgrel=4
pkgdesc="A framework for asynchronous RESTful functionality in C++11 applications"
arch=('i686' 'x86_64')
url="https://github.com/Corvusoft/restbed"
license=('AGPL3')
depends=('openssl')
makedepends=('git' 'cmake' 'asio')
source=("git+https://github.com/Corvusoft/restbed.git#tag=$pkgver")
md5sums=('SKIP')

build() {
  cd "$srcdir/$pkgname"

  mkdir -p build
  cd build
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED=on
  make
}

package() {
  cd "$srcdir/$pkgname/build"

  make DESTDIR="$pkgdir" install
  mkdir -p "$pkgdir/usr/lib/"
  mv "$pkgdir/usr/library/"*.so* "$pkgdir/usr/lib"
  rmdir "$pkgdir/usr/library/"
}

# Maintainer: Maxime Arthaud <maxime@arthaud.me>

pkgname=zxing-cpp-git
pkgver=r35.5ce91bb
pkgrel=1
pkgdesc="A command-line tool to decode QRCode"
arch=('any')
url="https://github.com/glassechidna/zxing-cpp"
license=('apache')
provides=('zxing-cpp')
makedepends=('git' 'cmake' 'cppunit')
source=("$pkgname::git+https://github.com/glassechidna/zxing-cpp.git")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$pkgname"
  mkdir build
  cd build
  cmake -G "Unix Makefiles" \
    -DCMAKE_INSTALL_PREFIX:PATH=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    ..
  make
}

check() {
  cd "$srcdir/$pkgname/build"
  ./testrunner
}

package() {
  cd "$srcdir/$pkgname/build"
  make DESTDIR="$pkgdir" install
}

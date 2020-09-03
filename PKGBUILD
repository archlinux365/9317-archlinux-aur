# Maintainer: VVL <me@ivvl.ru>
# Contributor: gost-engine

pkgname=openssl-gost
pkgver=r614.0c4da90
pkgrel=2
pkgdesc='A reference implementation of the Russian GOST crypto algorithms for OpenSSL'
url='https://github.com/gost-engine/engine/'
license=('Apache License 2.0')
arch=('x86_64')
depends=('openssl')
makedepends=('cmake' 'git')
source=("${pkgname}::git+https://github.com/gost-engine/engine.git" "openssl-gost.cnf" "openssl-gost.install")
install='openssl-gost.install'
sha256sums=('SKIP'
            '672bb57aed5e2016f72befb483a94bbda406f3b748f1db23347bb8dd54b62835'
            'c408d571c72ae6f299c69f3d5d6c17f44384c8fce0b2dbe2a0b4e12f6575a13b')

pkgver() {
  cd ${pkgname}
  (set -o pipefail
   git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
   printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}
build() {
  cd ${pkgname}
  git checkout openssl_1_1_1
  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release ..
  cmake --build . --config Release
}
package() {
  install -Dm644 openssl-gost.cnf "$pkgdir/etc/ssl/openssl-gost.cnf"
  install -Dm644 ${srcdir}/${pkgname}/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  cd ${srcdir}/${pkgname}/build/bin
  install -Dm755 gost.so.1.1 "$pkgdir/usr/lib/engines-1.1/gost.so.1.1"
  install -Dm755 gostsum "$pkgdir/usr/bin/gostsum"
  install -Dm755 gost12sum "$pkgdir/usr/local/bin/gost12sum"
  ln -s /usr/lib/engines-1.1/gost.so.1.1 "$pkgdir/usr/lib/engines-1.1/gost.so"
}

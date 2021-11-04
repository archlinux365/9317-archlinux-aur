# Maintainer: Dimytch <aspamkiller from yandex point ru>

pkgname=openssl-gost-engine-git
pkgver=r507.aba6613
pkgrel=2
pkgdesc="A reference implementation of the Russian GOST crypto algorithms for OpenSSL"
arch=('i686' 'x86_64')
url="https://github.com/gost-engine/engine/"
license=('apache')
depends=('perl' 'openssl')
makedepends=('git' 'cmake')
optdepends=('ca-certificates')
provides=('openssl-gost-engine')
conflicts=(
  'openssl-gost-engine'
  'gost-engine'
)
source=(
  "git+https://github.com/gost-engine/engine.git#branch=openssl_1_1_1"
  "gost.cnf"
  "example-openssl.cnf"
  "openssl-gost-engine.install"
)
sha512sums=(
  SKIP
  '72baef8de46462399f591e4aba73f7f910c6d27f14814cf54764a6ca11851d3b69a138475fc677990a621049dec9939eb4f83be5dcf07f1e85f24b97c90332ad'
  'b78d96d14edce1be96fab96da0e97e4c94c59e311428e2f84d77864366e7b3bbaaf6a8192d275552bb578075a5aada2200be83bec256ceb9aa057f0a892d6f8b'
  '074bfac386e9756b8bf1da6d914885bc4e33f215aa5331dc78c6c2d23df9f087ea10141c49825773a19b2bab14c1b1dfcd5c790eb83799938826e85aa702f558'
)
install='openssl-gost-engine.install'
backup=(
  'etc/ssl/gost.cnf'
)

pkgver(){
  cd "$srcdir/engine"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
prepare() {
  cd "$srcdir/engine"
  mkdir -p build
}

build() {
  cd "$srcdir/engine/build"
  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr
  cmake --build . --config Release
}

check() {
  cd "$srcdir/engine/build"
  make test
}

package() {
  cd "$srcdir/engine/build"

  DESTDIR="$pkgdir" cmake --build . --target install --config Release
  install -Dm0644 "$srcdir/gost.cnf" -t "$pkgdir/etc/ssl"

  mkdir -p -m0644 "$pkgdir/usr/share/doc/openssl-gost-engine"
  install -m0644 "$srcdir/engine/INSTALL.md" \
                 "$srcdir/engine/README.gost" \
                 "$srcdir/engine/README.md" \
                 "$pkgdir/usr/share/doc/openssl-gost-engine"
}

# Maintainer: Paul Hentschel (hpmachining)
# Contributor: greyltc

pkgname=cbang-git
pkgver=1.3.2.r10.g89a48d3
pkgrel=1
pkgdesc="A library of cross-platform C++ utilities"
arch=('x86_64')
url="https://github.com/CauldronDevelopmentLLC/cbang"
license=('LGPL2.1')
depends=(
  'v8-3.14'
  'libevent'
  'sqlite'
  're2'
  'libyaml'
  'zlib'
  'bzip2'
  'expat'
  'mariadb-libs'
)
makedepends=(
  'git'
  'scons'
)
checkdepends=(
  'python2'
)
optdepends=(
  'mariadb-libs: MariaDB database support'
)
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+https://github.com/CauldronDevelopmentLLC/cbang.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/-/.r/;s/-/./'
}

build() {
  cd "${pkgname%-git}"
  scons disable_local="libevent sqlite3 re2 libyaml zlib bzip2 expat"
}

check() {
  cd "${pkgname%-git}/tests"
  scons
  python2 ./testHarness
}

package() {
  cd "${pkgname%-git}"
  scons install prefix="$pkgdir/opt/${pkgname%-git}"
  install -m644 lib/libcbang-boost.a -t "$pkgdir/opt/${pkgname%-git}/lib" 
  cp -a config/ "$pkgdir/opt/${pkgname%-git}/config/"
  cp -a src/boost/boost/ "$pkgdir/opt/${pkgname%-git}/include/"
}

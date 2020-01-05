# Maintainer: Sandelinos

pkgname=cpuminer-opt-sugarchain
pkgver=3.8.8.1.7rc1
pkgrel=1
pkgdesc='Optimized Cpuminer for Sugarchain using YespowerSugar (based on Yespower 1.0.0)'
arch=('x86_64')
url="https://sugarchain.org"
licence('GPL2')
depends('curl' 'jansson' 'openssl' 'gmp' 'zlib')
makedepends('automake')
provides('cpuminer')
conflicts('cpuminer')
source=("https://github.com/cryptozeny/cpuminer-opt-sugarchain/archive/v${pkgver}.tar.gz")
sha256sums=('269e9127dfc45d52646b369eefffdcc63ce2721d8685751f0e86f8104ec7e7fe')

build() {
  tar xf "v${pkgver}.tar.gz"
  cd cpuminer-opt-sugarchain-${pkgver}
  ./build-yespower.sh
}

package() {
  mkdir -p $pkgdir/usr/bin
  mv $srcdir/cpuminer-opt-sugarchain-${pkgver}/cpuminer $pkgdir/usr/bin/
}

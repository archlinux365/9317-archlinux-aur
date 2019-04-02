# Maintainer: Adrià Arrufat <swiftscythe@gmail.com>
# Contributor: Filipe Verri <filipeverri@gmail.com>

pkgname=build2
pkgver=0.10.0
pkgrel=1
pkgdesc="build2 build system"
arch=(i686 x86_64)
url="https://build2.org/"
license=('MIT')
makedepends=(clang wget)
source=("https://download.build2.org/$pkgver/build2-toolchain-$pkgver.tar.xz")
sha256sums=('d41d516cc09b7d8af877fbd1f279cf36358b33288498131476284232891b8d60')

build() {
  cd build2-toolchain-$pkgver
  mkdir -p install
  ./build.sh --trust yes --install-dir `pwd`/install clang++
}

package() {
  cd build2-toolchain-$pkgver
  mkdir -p "$pkgdir/usr/bin"
  cp install/bin/* "$pkgdir/usr/bin/"
  mkdir -p "$pkdir/usr/share"
  cp -R install/share/ "$pkgdir/usr/share/"
  mkdir -p "$pkdir/usr/lib"
  cp -R install/lib/ "$pkgdir/usr/lib/"
  rm $pkgdir/usr/lib/{libsqlite3.so,libpkgconf.so}
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dm644 ./build2/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# Maintainer: michaelchou <michaeljchou at the hotmail domain which is .com>
# Contributor: enihcam <nanericwang at the google email domain which is .com>

pkgname=chakracore
pkgver=1.10.1
pkgrel=1
pkgdesc='ChakraCore is the core part of the Chakra Javascript engine that powers Microsoft Edge'
arch=('x86_64')
url='https://github.com/Microsoft/ChakraCore'
license=('MIT')
depends=('icu')
makedepends=('cmake' 'clang' 'python2')
provides=('libChakraCore.so' 'ch')
conflicts=('chakracore-git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Microsoft/ChakraCore/archive/v${pkgver}.tar.gz")
sha256sums=('3c281b273c26017a539eed74301430a82c2e74714cdbc5e1c50e9521f603f56f')

build() {
  cd "$srcdir/ChakraCore-${pkgver}"
  ./build.sh --jobs=$(nproc) --extra-defines=U_USING_ICU_NAMESPACE=1 -y
  ./build.sh --jobs=$(nproc) --extra-defines=U_USING_ICU_NAMESPACE=1 -y --static
}

package() {
  install -Dm755 "$srcdir/ChakraCore-${pkgver}/out/Release/ch" "${pkgdir}/usr/bin/ch"

  mkdir -p "${pkgdir}/usr/lib"
  mkdir -p "${pkgdir}/usr/include"
  cp "$srcdir/ChakraCore-${pkgver}/out/Release/bin/ChakraCore/libChakraCore.so" "${pkgdir}/usr/lib"
  cp "$srcdir/ChakraCore-${pkgver}/out/Release/include/"*.h "${pkgdir}/usr/include/."
}

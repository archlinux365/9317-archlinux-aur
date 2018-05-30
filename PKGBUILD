# Contributor: naelstrof <naelstrof@gmail.com> 

pkgname=mingw-w64-libogg
pkgver=1.3.3
pkgrel=1
pkgdesc="Ogg bitstream and framing library (mingw-w64)"
arch=(any)
url="http://xiph.org"
license=('BSD')
makedepends=('mingw-w64-configure')
depends=('mingw-w64-crt')
options=('staticlibs' '!strip' '!buildflags')
source=(http://downloads.xiph.org/releases/ogg/libogg-${pkgver}.tar.gz)
sha256sums=('c2e8a485110b97550f453226ec644ebac6cb29d1caef2902c007edab4308d985')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}"/libogg-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}"/libogg-${pkgver}/build-${_arch}
    make DESTDIR="$pkgdir" install
    rm -r $pkgdir/usr/${_arch}/share/doc
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

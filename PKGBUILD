pkgname=mingw-w64-coin-or-clp
pkgver=1.17.4
pkgrel=1
pkgdesc="COIN-OR linear programming solver (mingw-w64)"
arch=('any')
url="https://projects.coin-or.org/Clp"
license=('EPL')
groups=('mingw-w64-coin-or')
depends=('mingw-w64-coin-or-osi')
makedepends=('mingw-w64-configure')
options=('staticlibs' '!buildflags' '!strip')
source=("http://www.coin-or.org/download/source/Clp/Clp-${pkgver}.tgz")
sha256sums=('bddd2a26c6075bad0a6cd0f6a04da8065ac300db678fac13d2df9ba76278b818')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd Clp-$pkgver
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    COIN_SKIP_PROJECTS="Sample" \
    ${_arch}-configure \
      --with-osi-lib="$(${_arch}-pkg-config --libs osi)" \
      --with-osi-incdir="/usr/${_arch}/include/coin/" \
      --with-coinutils-lib="$(${_arch}-pkg-config --libs coinutils)" \
      --with-coinutils-incdir="/usr/${_arch}/include/coin/" \
      lt_cv_deplibs_check_method=pass_all ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/Clp-$pkgver/build-${_arch}
    PKG_CONFIG_PATH_CUSTOM="$pkgdir"/usr/${_arch}/lib/pkgconfig/ \
    make DESTDIR="$pkgdir"/ install
    rm -r "$pkgdir"/usr/${_arch}/share
    rm "$pkgdir"/usr/${_arch}/lib/pkgconfig/coindatanetlib.pc
    rm "$pkgdir"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

pkgname=mingw-w64-cgns
_PKGNAME=CGNS
pkgver=3.3.1
pkgrel=1
pkgdesc='Standard for recording and recovering computer data associated with the numerical solution of fluid dynamics equations (mingw-w64)'
arch=('any')
url='http://www.cgns.org'
license=('custom')
depends=('mingw-w64-crt' 'mingw-w64-hdf5')
makedepends=('mingw-w64-cmake')
options=('!buildflags' '!strip' 'staticlibs')
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/${_PKGNAME}/${_PKGNAME}/archive/v${pkgver}.tar.gz)
sha256sums=('81093693b2e21a99c5640b82b267a495625b663d7b8125d5f1e9e7aaa1f8d469')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare(){
  cd "${srcdir}/${_PKGNAME}-${pkgver}"

  # https://github.com/CGNS/CGNS/pull/45
  sed -i "s|#ifdef CG_BUILD_64BIT|#if 0|g" src/cgnstypes.h.in
}

build() {
  cd "${srcdir}/${_PKGNAME}-${pkgver}"

  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    if test "${_arch}" = "x86_64-w64-mingw32"
    then
      _64bits=ON
    else
      _64bits=OFF
    fi
    ${_arch}-cmake \
    -DCGNS_BUILD_CGNSTOOLS:BOOL=OFF \
    -DCGNS_ENABLE_64BIT:BOOL=${_64bits} \
    -DCGNS_ENABLE_FORTRAN:BOOL=OFF \
    -DCGNS_ENABLE_HDF5:BOOL=OFF \
    -DCGNS_ENABLE_LEGACY:BOOL=ON \
    -DCGNS_ENABLE_SCOPING:BOOL=OFF \
    -DCGNS_ENABLE_TESTS:BOOL=OFF \
    ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/${_PKGNAME}-${pkgver}/build-${_arch}
    make install DESTDIR="$pkgdir"
    rm "$pkgdir"/usr/${_arch}/bin/*.exe
    rm "$pkgdir"/usr/${_arch}/bin/*.bat
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

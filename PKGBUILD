
pkgname=mingw-w64-netcdf
pkgver=4.7.0
pkgrel=1
pkgdesc="network Common Data Form interface for array-oriented data access and corresponding library (mingw-w64)"
arch=('any')
url="https://www.unidata.ucar.edu/software/netcdf/"
depends=('mingw-w64-crt' 'mingw-w64-hdf5' 'mingw-w64-curl' 'mingw-w64-dlfcn')
makedepends=('mingw-w64-cmake')
options=('staticlibs' '!buildflags' '!strip')
license=('custom')
source=("https://github.com/Unidata/netcdf-c/archive/v${pkgver}.tar.gz")
sha256sums=('26d03164074363b3911ed79b7cddd045c22adf5ebaf978943db11a1d9f15e9d3')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare () {
  cd "${srcdir}/netcdf-c-${pkgver}"
}

build() {
  cd "${srcdir}/netcdf-c-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake -DENABLE_TESTS=OFF -DBUILD_UTILITIES=OFF ..
    make
    popd
  done
}


package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/netcdf-c-${pkgver}/build-${_arch}
    make install DESTDIR="$pkgdir"
    rm -r "$pkgdir"/usr/${_arch}/share
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

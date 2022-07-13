# Maintainer: seth <getchoo at tuta dot io>
# Contributor: xantares

pkgname=mingw-w64-zstd
_pkgname=zstd
pkgver=1.5.2
pkgrel=2
pkgdesc="Zstandard - Fast real-time compression algorithm (mingw-w64)"
url="http://www.zstd.net/"
arch=('x86_64')
license=('BSD' 'GPL2')
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake')
options=('staticlibs' '!buildflags' '!strip')
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/facebook/${_pkgname}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('7c42d56fac126929a6a85dbc73ff1db2411d04f104fae9bdea51305663a83fd0')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  export CFLAGS+=' -ffat-lto-objects'
  export CXXFLAGS+=' -ffat-lto-objects'
  for _arch in ${_architectures}; do
    mkdir -p "build-${_arch}" && pushd "build-${_arch}"
    ${_arch}-cmake -S ../build/cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr/${_arch} \
      -DCMAKE_INSTALL_LIBDIR=lib \
      -DZSTD_BUILD_CONTRIB=OFF \
      -DZSTD_BUILD_STATIC=OFF \
      -DZSTD_BUILD_TESTS=OFF \
      -DZSTD_PROGRAMS_LINK_SHARED=OFF \
      -DZSTD_BUILD_PROGRAMS=OFF
    make
    popd
  done
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  for _arch in ${_architectures}; do
    pushd "build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
    popd
  done
}

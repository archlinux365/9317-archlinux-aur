# Maintainer: Andrew Kozik <andrewkoz at live dot com>

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-lzlib
pkgver=1.10
pkgrel=1
pkgdesc="Lzlib is a data compression library providing in-memory LZMA compression and decompression functions (mingw-w64)"
arch=('any')
url="https://www.nongnu.org/lzip/lzlib.html"
license=('2-clause BSD')
depends=()
makedepends=('mingw-w64-gcc')
options=('!strip' 'staticlibs' '!buildflags')

source=("http://download.savannah.gnu.org/releases/lzip/lzlib/lzlib-${pkgver}.tar.gz")
sha256sums=('1d6ab7800a5b43e56fd20607fd2cfda9e550350dc95f5beb6a4ce14f85b41043')

build() {
  cd "${srcdir}/lzlib-${pkgver}"
  for _arch in $_architectures; do
    mkdir -p "${srcdir}/build-${_arch}"
    cp -a "${srcdir}/lzlib-${pkgver}/"* "${srcdir}/build-${_arch}"
    cd "${srcdir}/build-${_arch}"
    CC="${_arch}-gcc" CFLAGS="" CPPFLAGS="" \
    ./configure --host=${_arch} --prefix=/usr/${_arch}
    make
    ## make check
  done
}

package() {
  cd "${srcdir}/${_gitname}"
  for _arch in ${_architectures}; do
    cd "${srcdir}/build-${_arch}"
    DESTDIR="${pkgdir}" make install
  done
}

pkgname=mingw-w64-vulkan-headers
_pkgname=Vulkan-Headers
pkgver=1.3.207
pkgrel=1
pkgdesc="Vulkan header files (mingw-w64)"
arch=(any)
url="https://www.khronos.org/vulkan/"
license=('APACHE')
makedepends=(mingw-w64-cmake)
groups=("mingw-w64-vulkan-devel")
options=(!buildflags staticlibs !strip)
source=("https://github.com/KhronosGroup/${_pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('badbb0bdd382c19d4e9b7e4e0a2c03985d2109eef3afe43b23a73cd9bc679760')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}"/${_pkgname}-${pkgver}/build-${_arch}
    make DESTDIR="${pkgdir}" install
  done
}

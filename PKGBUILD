# Maintainer: acxz <akashpatel2008 at yahoo dot com>
# Contributor: AchmadFathoni <fathoni DOT id AT gmail DOT com>
# Contributor: Mykola Dolhyi <0xb000@gmail.com>
# Contributor: Ramdambo <https://github.com/Ramdambo>
pkgname=ignition-math
pkgver=6.13.0
pkgrel=1
pkgdesc="Math classes and functions for robot applications"
arch=('i686' 'x86_64')
url="https://gazebosim.org/libs/math"
license=('Apache')
groups=('development')
depends=('gcc-libs' 'swig')
makedepends=('ignition-cmake>=2' 'eigen')
conflicts=()
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/gazebosim/gz-math/archive/${pkgname}6_${pkgver}.tar.gz")
sha256sums=("6b4a826a4fd25c8816126dfe41f65d805917f3b6488008155db97f2530b70739")

_dir="gz-math-${pkgname}6_${pkgver}"

build() {
  cd "$srcdir/$_dir"

  mkdir -p build
  cd build

  cmake .. -Wno-dev \
           -DCMAKE_BUILD_TYPE="Release" \
           -DCMAKE_INSTALL_PREFIX="/usr" \
           -DCMAKE_INSTALL_LIBDIR="lib" \
           -DBUILD_TESTING:BOOL=False

  make
}

package() {
  cd "$srcdir/$_dir/build"
  make DESTDIR="$pkgdir/" install
}

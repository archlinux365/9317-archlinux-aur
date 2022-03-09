# Maintainer: Corwin <corwin@kuiper.dev>
# Maintainer: Harrison <htv04rules at gmail dot com>

pkgname=melonds
pkgver=0.9.4
pkgrel=1
pkgdesc="DS emulator, sorta"
arch=("x86_64" "i686" "pentium4" "arm" "armv6h" "armv7h" "aarch64")
url="http://melonds.kuribo64.net/"
license=("GPL3")
makedepends=("cmake" "pkg-config")
depends=("libepoxy" "libslirp" "qt5-base" "sdl2")
source=("git+https://github.com/Arisotura/melonDS.git#tag=${pkgver}")
sha256sums=("SKIP")

build() {
  mkdir -p build
  cd build
  
  cmake ../melonDS \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr"
  make VERBOSE=ON
}

package() {
  cd build
  
  make DESTDIR="${pkgdir}" install
}

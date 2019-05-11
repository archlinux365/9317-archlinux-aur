# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=avif-git
pkgver=0.1.3.r3.g127822c
pkgrel=1
pkgdesc="Library for encoding and decoding .avif files"
arch=('i686' 'x86_64')
url="https://github.com/joedrago/avif"
license=('BSD')
depends=('glibc')
makedepends=('git' 'cmake' 'nasm')
provides=('avif')
conflicts=('avif')
options=('staticlibs')
source=("git+https://github.com/joedrago/avif.git")
sha256sums=('SKIP')


prepare() {
  cd "avif"

  git submodule update --init --recursive
}

pkgver() {
  cd "avif"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "avif"

  mkdir -p "_build" && cd "_build"
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib" \
    -DAVIF_BUILD_APPS=ON \
    ../
  make
}

package() {
  cd "avif"

  install -Dm755 "_build"/{avifdec,avifenc} -t "$pkgdir/usr/bin"

  install -d "$pkgdir/usr/include"
  cp -r "include/avif" "$pkgdir/usr/include"
  install -Dm644 "_build/libavif.a" -t "$pkgdir/usr/lib"

  install -Dm644 "LICENSE" -t "$pkgdir/usr/share/licenses/avif"
}

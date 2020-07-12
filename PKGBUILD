# Maintainer: dec05eba <dec05eba@protonmail.com>

pkgname=sibs-git
pkgver=r273.3d52dda
pkgrel=1
pkgdesc='A simple cross-platform build system and package manager for c, c++ and zig. Inspired by rusts cargo'
arch=('x86_64')
url="https://git.dec05eba.com/sibs"
license=('GPL3')
makedepends=('git')
depends=('curl' 'libarchive' 'libgit2' 'ninja' 'cmake' 'ccache' 'util-linux')
optdepends=('git')
provides=('sibs')
conflicts=('sibs')
source=("git+https://git.dec05eba.com/sibs")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/sibs"
  printf "r%s.%s\n" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/sibs"
  git submodule update --init --recursive
}

build() {
  cd "$srcdir/sibs/cmake"
  mkdir release
  cd release
  cmake -G Ninja -DCMAKE_BUILD_TYPE=Release ../../
  ninja
}

package() {
  cd "$srcdir/sibs/cmake/release"
  install -Dm755 sibs "$pkgdir/usr/bin/sibs"
}

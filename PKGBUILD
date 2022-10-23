# Maintainer mattf <matheusfillipeag@gmail.com>

pkgname=warpd-wayland
pkgver=v1.3.4
_gitname=warpd
pkgrel=1
pkgdesc="A small X program which facilitates recursively warping the pointer to different quadrants on the screen."
license=('MIT')
arch=('x86_64')
makedepends=(git)
conflicts=(warpd-git warpd warpd-wayland-git)
depends=(wayland libxkbcommon cairo)
provides=(warpd)
source=(
  "${pkgname}.tar.gz::https://github.com/rvaiya/warpd/archive/refs/tags/${pkgver}.zip"
)

options=("!buildflags")
md5sums=('d5bdc7dc052ca83ce4635d6cb0cedec3')

build () {
  cd "warpd-${pkgver/v/}"
  make
}

package () {
  cd "warpd-${pkgver/v/}"
  install -Dm755 -t "${pkgdir}"/usr/bin bin/warpd
  mkdir -p "${pkgdir}"/usr/share/man/man1/
  # install -Dm644 -t "${pkgdir}"/usr/share/man/man1/ usr/local/share/man/man1/warpd.1.gz
  install -Dm644 -t "${pkgdir}"/usr/share/man/man1/ warpd.1.gz
}

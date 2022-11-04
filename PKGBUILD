# Maintainer mattf <matheusfillipeag@gmail.com>

pkgname=warpd-git
pkgver=r234.5971cfb
_gitname=warpd
pkgrel=1
pkgdesc="A modal keyboard driven interface for mouse manipulation."
url="https://github.com/rvaiya/warpd"
license=('MIT')
arch=('x86_64')
md5sums=('SKIP')
makedepends=(git scdoc)
depends=(libxinerama libxft libxfixes libxtst libx11)
provides=(warpd)
conflicts=(warpd warpd-wayland warpd-wayland-git)
source=("git+$url")

pkgver() {
  cd ${_gitname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build () {
  cd ${_gitname}
  make
  make man
}

package () {
  cd ${_gitname}
  make install DESTDIR="$pkgdir"
}

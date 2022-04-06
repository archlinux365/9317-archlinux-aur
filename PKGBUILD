# Maintainer: prg <prg-archlinux@xannode.com>
# Contributor: prg <prg-archlinux@xannode.com>

_gitname=frontend-sdl2
pkgname=projectm-sdl2-git
pkgver=11.0ea5b2c
pkgrel=1
provides=('projectm-sdl')
pkgdesc="Music visualizer which uses 3D accelerated iterative image based rendering (git version)"
arch=('x86_64' 'i686')
url='https://github.com/projectM-visualizer/projectm'
license=('LGPL')
depends=('projectm-git' 'sdl2' 'libxext' 'glm' 'poco')
makedepends=('cmake')
source=("git+https://github.com/projectM-visualizer/${_gitname}.git")
sha256sums=(SKIP)
options=('!buildflags')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}"
  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr ../
  make
}

package() {
  cd "${_gitname}/build"
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
  DESTDIR="$pkgdir" install -Dm755 "${srcdir}/${_gitname}/build/src/projectMSDL" "$pkgdir/usr/bin/"
  DESTDIR="$pkgdir" install -Dm644 "${srcdir}/${_gitname}/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/"
}

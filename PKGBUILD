# Maintainer: Oliver Jaksch <arch-aur@com-in.de>

pkgname=libretro-craft-git
pkgver=845.49b09d1
pkgrel=1
pkgdesc="A simple Minecraft clone written in C using modern OpenGL (shaders)"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h')
url="https://github.com/libretro/Craft"
license=('custom:Craft License')
depends=('zlib' 'glew')
makedepends=('git' 'cmake' 'glfw')

_libname=craft_libretro
_gitname=Craft
source=("git+https://github.com/libretro/${_gitname}.git"
	"https://raw.github.com/libretro/libretro-super/master/dist/info/${_libname}.info")
sha256sums=('SKIP'
	    'SKIP')

pkgver() {
  cd "${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "${_gitname}"
  make -f Makefile.libretro
}

package() {
  install -Dm644 "${_gitname}/${_libname}.so" "${pkgdir}/usr/lib/libretro/${_libname}.so"
  install -Dm644 "${_libname}.info" "${pkgdir}/usr/lib/libretro/${_libname}.info"
  install -Dm644 "${_gitname}/LICENSE.md" "${pkgdir}/usr/share/licenses/${pkgname}/license.txt"
}

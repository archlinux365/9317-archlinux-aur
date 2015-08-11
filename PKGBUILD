# Maintainer: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG

pkgname=easyrpg-tools-git
pkgver=r39.e185825
pkgrel=1
pkgdesc="EasyRPG tools to convert RPG Maker 2000/2003 files (development version)"
arch=('i686' 'x86_64')
url="https://easy-rpg.org/"
license=('MIT' 'GPL' 'custom')
conflicts=('lcf2xml')
provides=('lcf2xml' 'lmu2png' 'xyz2png')
makedepends=('git')
depends=('gcc-libs' 'liblcf-git' 'sdl2_image')
source=(${pkgname#-*}::"git+https://github.com/EasyRPG/tools.git")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname#-*}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build () {
  cd ${pkgname#-*}

  make -C lmu2png
  make -C xyz2png
  # compile with our flags
  g++ $CXXFLAGS lcf2xml/src/main.cpp $(pkg-config --cflags --libs liblcf) $LDFLAGS -o lcf2xml/lcf2xml
}

package () {
  cd ${pkgname#-*}

  # executables
  install -Dm755 lmu2png/lmu2png "$pkgdir"/usr/bin/lmu2png
  install -Dm755 xyz2png/xyz2png "$pkgdir"/usr/bin/xyz2png
  install -Dm755 lcf2xml/lcf2xml "$pkgdir"/usr/bin/lcf2xml
  # licenses
  install -Dm644 lmu2png/COPYING "$pkgdir"/usr/share/licenses/$pkgname/lmu2png-COPYING
  install -Dm644 xyz2png/COPYING "$pkgdir"/usr/share/licenses/$pkgname/xyz2png-COPYING
  install -Dm644 lcf2xml/COPYING "$pkgdir"/usr/share/licenses/$pkgname/lcf2xml-COPYING
}

# Maintainer: heavysink <winstonwu91@gmail.com>

pkgname=townsemu-git
pkgver=1296.fbf3c3f
pkgrel=1
pkgdesc="An emulator of legendary Fujitsu FM TOWNS computer"
arch=('i686' 'x86_64')
url="https://github.com/captainys/TOWNSEMU"
license=('GPL')
depends=('alsa-lib' 'glu')
makedepends=('git' 'cmake')
source=("git://github.com/captainys/TOWNSEMU")
md5sums=('SKIP')

pkgver() {
  cd TOWNSEMU
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd TOWNSEMU

  mkdir -p build
}

build() {
  cd TOWNSEMU/build

  cmake ../src -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd TOWNSEMU/build

  install -m 755 -d "${pkgdir}/usr/bin"
  install -m 755 main_cui/Tsugaru_CUI ${pkgdir}/usr/bin/Tsugaru_CUI
  install -m 755 discimg/bincue2wav ${pkgdir}/usr/bin/bincue2wav
  install -m 755 discimg/testcue ${pkgdir}/usr/bin/testcue
  install -m 755 discimg/testiso ${pkgdir}/usr/bin/testiso
  install -m 755 discimg/testmsf ${pkgdir}/usr/bin/testmsf
}

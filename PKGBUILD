# Maintainer: heavysink <winstonwu91@gmail.com>

pkgname=townsemu-git
pkgver=2113.bb81ff3
pkgrel=1
pkgdesc="An emulator of legendary Fujitsu FM TOWNS computer"
arch=('i686' 'x86_64')
url="https://github.com/captainys/TOWNSEMU"
license=('GPL')
depends=('alsa-lib' 'glu')
makedepends=('git' 'cmake')
provides=('townsemu')
conflicts=('townsemu')
source=("git+https://github.com/captainys/TOWNSEMU")
md5sums=('SKIP')

pkgver() {
  cd TOWNSEMU
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd TOWNSEMU
  mkdir -p build
  mkdir -p build_gui
  cd gui/src
  git clone https://github.com/captainys/public.git
  cd ..
  cd ..
  sed -i '1i #include <cstdio>' src/cmdutil/wav2snd.cpp
  sed -i '1i #include <cstdlib>' src/cmdutil/wav2snd.cpp
  sed -i '1i #include <cstdio>' gui/src/public/src/yssimplesound/sample_fssimplewindow/main.cpp
  sed -i '1i #include <cstdlib>' gui/src/public/src/yssimplesound/sample_fssimplewindow/main.cpp
  sed -i '1i #include <cstdio>' gui/src/public/src/yssimplesound/sample/main.cpp
  sed -i '1i #include <cstdlib>' gui/src/public/src/yssimplesound/sample/main.cpp
}

build() {
  cd TOWNSEMU/build
  cmake ../src -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
  make
  cd ../build_gui
  cmake ../gui/src -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
  cmake --build main_gui
}

package() {
  cd TOWNSEMU/build

  install -m 755 -d "${pkgdir}/usr/bin"
  install -m 755 ./main_cui/Tsugaru_CUI ${pkgdir}/usr/bin/Tsugaru_CUI

  cd ../../TOWNSEMU/build_gui
  install -m 755 ./main_gui/Tsugaru_GUI ${pkgdir}/usr/bin/Tsugaru_GUI
}

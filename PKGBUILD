# Maintainer: ibrokemypie <ibrokemypie@bastardi.net>
pkgname=nxengine-evo
pkgver=2.5
pkgrel=1
pkgdesc="A somewhat upgraded/refactored version of nxengine"
arch=('i686' 'x86_64')
url="https://github.com/isage/nxengine-evo"
license=('GPL3')
depends=(sdl2_ttf sdl2 sdl2_mixer)
makedepends=(libpng cmake)

source=("https://github.com/isage/nxengine-evo/archive/v${pkgver}.tar.gz"
        "http://www.cavestory.org/downloads/cavestoryen.zip"
        "nx-evo")

sha256sums=('f5f9703fbfc6a342fb8892659d76207aed2a8ebee8260459d8c44a1e55153dbe'
            'aa87fa30bee9b4980640c7e104791354e0f1f6411ee0d45a70af70046aa0685f'
            '36019935c4ff76546e52b47523a6af33a4055ceca806b4940e0574aa46b368e1')

build() {
  cd "$pkgname-$pkgver"
  mkdir build
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release ..
  make
  cp ../bin/* ../../CaveStory/
  cp -r ../data/ ../../CaveStory/
  cd ../../CaveStory
  chmod +x ./extract
  ./extract
}

package() {
  mkdir -p "$pkgdir"/usr/share
  cp -r CaveStory/ "$pkgdir"/usr/share/nxengine-evo
  install -Dm755 nx-evo "$pkgdir"/usr/bin/nx-evo
}

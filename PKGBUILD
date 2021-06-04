# Maintainer: Mike Cuche <cuche@gmx.com>
pkgname=dsda-doom
pkgver=0.19.4
pkgrel=1
pkgdesc="Fork of PrBoom+ with extra tooling for demo recording and playback, with a focus on speedrunning"
arch=('x86_64')
url="https://github.com/kraflab/dsda-doom"
license=('GPL')
depends=('fluidsynth' 'glu' 'libmad' 'portmidi' 'sdl2_image' 'sdl2_mixer' 'sdl2_net' 'dumb')
makedepends=('cmake' 'deutex' 'imagemagick')
conflicts=('prboom-plus')
source=("https://github.com/kraflab/dsda-doom/archive/refs/tags/v${pkgver}.tar.gz"
'dsda-doom.desktop')
sha256sums=('937187530165e576b2aea7c972aca569aee85d5b505f3512141dadd410929583'
'31944f60e6cf45db60d63dd6538e0d21bade193646f28b000fa8c2f1d9672dbf')

build() {
	cd "${srcdir}/dsda-doom-${pkgver}/prboom2"  
	cmake . -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release
	make
}

package() {
  cd "${srcdir}/dsda-doom-${pkgver}/prboom2"
  make DESTDIR="${pkgdir}" install
  install -Dm644 ICONS/dsda-doom.png "${pkgdir}"/usr/share/pixmaps/dsda-doom.png
  install -Dm644 ${srcdir}/dsda-doom.desktop "${pkgdir}"/usr/share/applications/dsda-doom.desktop
}

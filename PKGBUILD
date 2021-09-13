# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix

pkgname=alizams-qt5
pkgver=1.6.3.1
pkgrel=1
pkgdesc=""
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://www.aliza-dicom-viewer.com/"
license=(GPL3)
depends=(qt5-base insight-toolkit)
makedepends=(git cmake qt5-svg)
provides=(alizams)
conflicts=(alizams)
source=("git+https://github.com/AlizaMedicalImaging/AlizaMS.git#tag=v${pkgver}")
sha256sums=('SKIP')

pkgver() {
  cd AlizaMS
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd AlizaMS
  [[ -d build ]] || mkdir build
}

build() {
  cd AlizaMS/build
  cmake .. -Wno-dev \
    -DCMAKE_BUILD_TYPE=None \
    -DALIZA_QT_VERSION:STRING=5 \
    -DCMAKE_INSTALL_PREFIX=/usr

  make
}

package() {
  cd AlizaMS/build
  make DESTDIR="$pkgdir/" install
}

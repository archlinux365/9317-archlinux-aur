# Maintainer Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=plasma-angelfish
pkgver=21.08
pkgrel=1
pkgdesc="Web browser for Plasma Mobile"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://invent.kde.org/plasma-mobile/angelfish"
license=('GPL2')
depends=('qt5-webengine' 'qt5-feedback' 'purpose' 'kirigami2' 'ki18n' 'kconfig'
         'kcoreaddons' 'kdbusaddons' 'kwindowsystem' 'knotifications')
makedepends=('extra-cmake-modules' 'corrosion-git' 'qt5-svg' 'qt5-tools')
source=("https://download.kde.org/stable/plasma-mobile/${pkgver}/angelfish-${pkgver}.tar.xz")
sha256sums=('d07660a06ccd2ab287e6ee7fd5882452a49290d59122598f397ca51214a4fbbf')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S angelfish-${pkgver}
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}

# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=alligator
pkgver=0.1
pkgrel=1
pkgdesc="Kirigami-based RSS reader"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://invent.kde.org/plasma-mobile/alligator"
license=(GPL3)
depends=('ki18n' 'kcoreaddons' 'kconfig' 'syndication' 'kirigami2')
makedepends=('extra-cmake-modules' 'qt5-tools' 'qt5-svg')
source=("https://download.kde.org/stable/${pkgname}/${pkgver}/${pkgname}-${pkgver}.tar.xz")
sha256sums=('bca28252907cee344e551bd0801c5fff58d52f1c033dabf1c82bbcfdb14fe051')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}-${pkgver}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}

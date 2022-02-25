# Maintainer: Wachid Adi Nugroho <wachidadinugroho.maya@gmail.com>

pkgname=maui-shell-git
_pkgname=${pkgname%-git}
pkgver=r146.7106577
pkgrel=1
pkgdesc='Maui Shell is a convergent shell for desktops, tablets, and phones.'
url='https://github.com/Nitrux/maui-shell'
arch=(x86_64)
license=(GPL3)
depends=(bluedevil
         fontconfig
         kactivities
         kactivities-stats
         karchive
         kconfig
         kcoreaddons
         kcrash
         kdbusaddons
         kdeclarative
         kded
         kdesu
         kdoctools
         kglobalaccel
         ki18n
         kiconthemes
         kidletime
         kinit
         kio
         kitemmodels
         knotifications
         knotifyconfig
         kpackage
         kpeople
         krunner
         kservice
         ktexteditor
         kunitconversion
         kwallet
         kwayland
         libcanberra
         mauikit-git
         mauikit-filebrowsing
         phonon-qt5
         plasma-nm
         plasma-pa
         polkit-qt5
         prison
         qt5-base
         qt5-declarative
         qt5-quickcontrols2
         qt5-svg
         qt5-wayland
         solid
         sound-theme-freedesktop)
makedepends=(git extra-cmake-modules)
groups=(maui)
provides=($_pkgname)
conflicts=($_pkgname)
source=(git+$url.git)
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cmake -B build -S $_pkgname \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}

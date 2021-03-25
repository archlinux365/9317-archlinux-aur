# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix

pkgname=lightlyshaders-git
pkgver=r7.3c2572b
pkgrel=1
pkgdesc="Round corners and outline effect for KWin"
arch=(x86_64)
url="https://github.com/Luwx/LightlyShaders"
license=(GPL3)
depends=('qt5-x11extras' 'qt5-xmlpatterns' 'qt5-tools' 'kconfig' 'kconfigwidgets'
         'ki18n' 'kcoreaddons' 'kcrash' 'kio' 'kservice' 'kinit' 'knotifications'
         'kwidgetsaddons' 'kwindowsystem' 'kguiaddons')
makedepends=('git' 'extra-cmake-modules')
provides=('lightlyshaders')
conflicts=('lightlyshaders')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd LightlyShaders
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -B build -S LightlyShaders
  make -C build
}

package() {
  make -C build DESTDIR="${pkgdir}" PREFIX=/usr install
}

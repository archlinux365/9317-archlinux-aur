# Merged with official ABS akonadi-calendar PKGBUILD by João, 2021/02/02 (all respective contributors apply herein)
# Maintainer: João Figueiredo <jf.mundox@gmail.com>
# Contributor: Antonio Rojas <arojas@archlinux.org>

pkgname=akonadi-calendar-git
pkgver=5.16.40_r1896.g2baafeb
pkgrel=1
pkgdesc="Akonadi calendar integration"
arch=($CARCH)
url="https://kontact.kde.org"
license=(LGPL)
depends=(kmailtransport-git kcalutils-git akonadi-contacts-git)
makedepends=(git extra-cmake-modules-git boost)
conflicts=(${pkgname%-git})
provides=(${pkgname%-git})
groups=(kdepim-git)
source=("git+https://github.com/KDE/${pkgname%-git}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  _ver="$(grep -m1 'set(PIM_VERSION' CMakeLists.txt | cut -d '"' -f2 | tr - .)"
  echo "${_ver}_r$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)"
}

build() {
  cmake -B build -S ${pkgname%-git} \
    -DBUILD_TESTING=OFF
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}

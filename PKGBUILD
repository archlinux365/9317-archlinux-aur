# Merged with official ABS knewstuff PKGBUILD by João, 2021/02/01 (all respective contributors apply herein)
# Maintainer: João Figueiredo <jf.mundox@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=knewstuff-git
pkgver=5.79.0_r1030.ga3943fed
pkgrel=1
pkgdesc='Support for downloading application assets from the network'
arch=($CARCH)
url='https://community.kde.org/Frameworks'
license=(LGPL)
depends=(kio-git kpackage-git)
makedepends=(git extra-cmake-modules-git doxygen qt5-tools qt5-doc qt5-declarative)
conflicts=(${pkgname%-git})
provides=(${pkgname%-git})
optdepends=('kirigami-git: QML components')
groups=(kf5-git)
source=("git+https://github.com/KDE/${pkgname%-git}.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  _ver="$(grep -m1 "set(KF5\?_VERSION" CMakeLists.txt | cut -d '"' -f2 | tr - .)"
  echo "${_ver}_r$(git rev-list --count HEAD).g$(git rev-parse --short HEAD)"
}

build() {
  cmake -B build -S ${pkgname%-git} \
    -DBUILD_TESTING=OFF \
    -DBUILD_QCH=ON
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}

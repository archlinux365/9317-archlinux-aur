# Maintainer: João Figueiredo <jf dot mundox at gmail dot com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=kcompletion-git
pkgver=v5.71.0.rc1.r3.g30919db
pkgrel=1
pkgdesc='KCompletion'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/frameworks/kcompletion'
license=('LGPL')
depends=('kwidgetsaddons-git' 'kconfig-git')
makedepends=('extra-cmake-modules-git' 'git' 'qt5-tools')
groups=('kf5')
conflicts=(kcompletion)
provides=(kcompletion)
source=('git+https://github.com/KDE/kcompletion.git')
md5sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../kcompletion \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}

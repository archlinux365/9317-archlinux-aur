# Maintainer: Andrea Scarpino <andrea@archlinux.org>

pkgname=kbookmarks-git
pkgver=v4.100.0.rc1.r271.g8dea7ca
pkgrel=1
pkgdesc='KBookmarks'
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/frameworks/kbookmarks'
license=('LGPL')
depends=('kxmlgui-git')
makedepends=('extra-cmake-modules-git' 'git' 'qt5-tools')
groups=('kf5')
conflicts=(kbookmarks)
provides=(kbookmarks)
source=('git://anongit.kde.org/kbookmarks.git')
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
  cmake ../kbookmarks \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}

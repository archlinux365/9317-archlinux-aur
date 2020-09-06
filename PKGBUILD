# Maintainer: Haruyuki lxz <lxz@ilxz.me>

pkgname=dtkcore-git
pkgver=5.2.2.5.r0.gca1e23d
pkgrel=1
pkgdesc='DTK core modules'
arch=('x86_64')
url="https://github.com/linuxdeepin/dtkcore"
license=('LGPL3')
depends=('dconf' 'deepin-desktop-base-git' 'python' 'gsettings-qt' 'lshw')
makedepends=('git' 'qt5-tools')
conflicts=('dtkcore')
replaces=('dtkcore')
provides=('dtkcore')
groups=('deepin-git')
source=("$pkgname::git://github.com/linuxdeepin/dtkcore.git")
sha512sums=('SKIP')

pkgver() {
    cd $pkgname
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $pkgname
  qmake-qt5 PREFIX=/usr DTK_VERSION=$pkgver LIB_INSTALL_DIR=/usr/lib
  make -j$(nproc)
}

package() {
  cd $pkgname
  make INSTALL_ROOT="$pkgdir" install
}

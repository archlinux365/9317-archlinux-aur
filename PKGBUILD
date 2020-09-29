# Maintainer: DingYuan Zhang <justforlxz@gmail.com>

pkgname=deepin-polkit-agent-git
pkgver=5.3.0.2.r0.g89be13b
pkgrel=1
pkgdesc='Deepin Polkit Agent'
arch=('x86_64')
url="https://github.com/linuxdeepin/dde-polkit-agent"
license=('GPL3')
depends=('deepin-qt-dbus-factory-git' 'startdde-git' 'polkit-qt5' 'dtkwidget-git')
makedepends=('git' 'qt5-tools' 'dtkwidget-git')
conflicts=('deepin-polkit-agent')
replaces=('deepin-polkit-agent')
provides=('deepin-polkit-agent')
groups=('deepin-git')
source=("$pkgname::git://github.com/linuxdeepin/dde-polkit-agent")
sha512sums=('SKIP')

pkgver() {
    cd $pkgname
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  # https://github.com/linuxdeepin/developer-center/issues/1721
  sed -i 's/bool is_deepin = true/bool is_deepin = false/' policykitlistener.cpp
}

build() {
  cd $pkgname
  qmake-qt5 PREFIX=/usr
  make -j$(nproc)
}

package() {
  cd $pkgname
  make INSTALL_ROOT="$pkgdir" install
}

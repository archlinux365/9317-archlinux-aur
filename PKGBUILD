# Maintainer: Peter Mattern <pmattern at arcor dot de>
# Contributor: Yaohan Chen <yaohan dot chen at gmail dot com>

_pkgname="lxqt-connman-applet"
pkgname="$_pkgname-git"
pkgver=r55.e90c62e
pkgrel=3
pkgdesc='LXQt system-tray applet for ConnMan'
arch=('i686' 'x86_64')
url='https://github.com/surlykke/lxqt-connman-applet'
license=('LGPL')
depends=('liblxqt' 'qt5-svg' 'connman')
makedepends=('git' 'cmake' 'qt5-tools')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/surlykke/lxqt-connman-applet.git")
sha256sums=("SKIP")

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$_pkgname"
  cmake . -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "$_pkgname"
  make DESTDIR="$pkgdir" install
}

# $Id$
# Maintainer: Mohammadreza Abdollahzadeh < morealaz at gmail dot com >
pkgname=gnome-shell-extension-arc-menu-git
pkgver=16.r7.gdd229d6
pkgrel=1
pkgdesc='A GNOME shell extension designed to replace the standard menu found in GNOME 3.'
arch=(any)
url="https://github.com/LinxGem33/Arc-Menu"
license=('GPL2')
depends=('gnome-shell>=3.18')
makedepends=('git')
install='gnome-shell-extension.install'
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd Arc-Menu
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd Arc-Menu
  make DESTDIR="$pkgdir" INSTALL="system" install
}
# vim:set ts=2 sw=2 et:

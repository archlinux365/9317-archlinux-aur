# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributors: Nabil Freij <nabil.freij@gmail.com>

pkgname=gnome-shell-extension-workspaces-to-dock
pkgver=41_3.24.r0.ga544f98
pkgrel=1
pkgdesc="Gnome shell extension, Workspaces to Dock, Transform Gnome Shell's overview workspaces into an intelligent dock."
arch=('any')
url="https://extensions.gnome.org/extension/427/workspaces-to-dock/"
license=('GPL')
depends=('gnome-shell')
groups=('gnome-shell-extensions')
makedepends=('git' 'gnome-common')
source=("git+https://github.com/passingthru67/workspaces-to-dock.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/workspaces-to-dock"
  git describe --long | sed 's/workspaces-to-dock.v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/workspaces-to-dock"
  glib-compile-schemas "workspaces-to-dock@passingthru67.gmail.com/schemas/"
}

package() {
  cd "$srcdir/workspaces-to-dock"
  install -d "$pkgdir/usr/share/gnome-shell/extensions"
  cp -a "workspaces-to-dock@passingthru67.gmail.com" "$pkgdir/usr/share/gnome-shell/extensions/"
}

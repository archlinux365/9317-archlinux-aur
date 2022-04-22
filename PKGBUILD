# Maintainer:  Sian1468 <setthawut DOT a AT protonmail DOT com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Ner0 <darkelfdarkelf666@yahoo.co.uk>
# Contributor: dcelasun <dcelasun@gmail.com>

pkgname=plank-git
pkgver=0.11.89.r11.g43fe952
pkgrel=1
pkgdesc='Elegant, simple, clean dock'
arch=('x86_64')
url='https://launchpad.net/plank'
license=('GPL3')
depends=('atk' 'bamf' 'cairo' 'gdk-pixbuf2' 'glib2' 'glibc' 'gnome-menus'
         'gtk3' 'libgee' 'libwnck3' 'libx11' 'libxfixes' 'libxi' 'pango')
makedepends=('gnome-common' 'git' 'intltool' 'vala')
provides=('plank')
conflicts=('plank')
source=('git+https://github.com/ricotz/plank.git')
sha256sums=('SKIP')

prepare() {
  cd plank
  sed 's/0.19.6/0.20/' -i configure.ac
  NOCONFIGURE=1 ./autogen.sh
}

pkgver() {
  cd plank
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd plank
  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --disable-apport
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  make DESTDIR="${pkgdir}" -C plank install
}

# vim: ts=2 sw=2 et:

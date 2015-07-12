# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: alucryd <alucryd at gmail dot com>
# Contributor: Balló György <ballogyor+arch at gmail dot com>

pkgname=libdbusmenu-gtk2
pkgver=12.10.2
pkgrel=3
pkgdesc="A library for passing menus over DBus"
arch=('i686' 'x86_64')
url="https://launchpad.net/libdbusmenu"
license=('GPL3')
depends=('gtk2' 'libdbusmenu-glib')
makedepends=('gnome-doc-utils' 'gobject-introspection' 'intltool' 'vala')
options=('!emptydirs')
source=("http://launchpad.net/dbusmenu/${pkgver%.*}/${pkgver}/+download/${pkgname%-*}-${pkgver}.tar.gz")
sha256sums=('9d6ad4a0b918b342ad2ee9230cce8a095eb601cb0cee6ddc1122d0481f9d04c9')

build() {
  cd ${pkgname%-*}-${pkgver}

  export HAVE_VALGRIND_TRUE='#'
  export HAVE_VALGRIND_FALSE=''
  ./configure --prefix='/usr' --sysconfdir='/etc' --localstatedir='/var' --disable-{dumper,static,tests} --with-gtk='2'
  make
}

package() {
  cd ${pkgname%-*}-${pkgver}

  make -C libdbusmenu-glib DESTDIR="${pkgdir}" install
  make -C libdbusmenu-gtk DESTDIR="${pkgdir}" install
  make -C libdbusmenu-glib DESTDIR="${pkgdir}" uninstall
}

# vim: ts=2 sw=2 et:

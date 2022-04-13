# Maintainer: drarig29 <corentingirard.dev@gmail.com>
# Contributor: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Timm Preetz <timm@preetz.us>

pkgname=vala0.52
pkgver=0.52.11
pkgrel=1
pkgdesc="Compiler for the GObject type system"
url="https://wiki.gnome.org/Projects/Vala"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
license=(LGPL)
depends=(glib2 gtk-doc graphviz ttf-font pkg-config gcc)
makedepends=(libxslt vala git help2man autoconf-archive)
checkdepends=(dbus libx11 gobject-introspection)
provides=(vala valadoc libvala-${pkgver%.*}.so libvaladoc-${pkgver%.*}.so)
conflicts=(vala valadoc)
source=("https://download.gnome.org/sources/vala/0.52/vala-${pkgver}.tar.xz")
sha256sums=('7c7c3cb3e5eb03c918544c6ab8130a2fc05a8cad0942836cdfded9aec5787077')

build() {
  cd "vala-$pkgver"
  ./configure --prefix=/usr
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

check() {
  cd "vala-$pkgver"
  make check
}

package() {
  cd "vala-$pkgver"
  make DESTDIR="$pkgdir" install
}

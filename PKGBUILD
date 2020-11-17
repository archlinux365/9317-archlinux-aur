# Contributor: twa022 <twa022 at gmail dot com>

_pkgname=vala
pkgname=${_pkgname}0.40
pkgver=0.40.24
pkgrel=1
pkgdesc='Compiler for the GObject type system (0.40 long term support branch)'
url='https://wiki.gnome.org/Projects/Vala'
arch=('x86_64' 'i686')
license=('LGPL')
depends=('glib2' 'gtk-doc' 'graphviz' 'ttf-font' 'pkg-config' 'gcc')
makedepends=('libxslt' 'vala' 'help2man' 'autoconf-archive')
checkdepends=('dbus' 'libx11' 'gobject-introspection')
provides=(libvala-${pkgver%.*}.so libvaladoc-${pkgver%.*}.so)
source=("https://download.gnome.org/sources/${_pkgname}/${pkgver%.*}/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('a51ccb5504766071e0d85626f749bb93e1222261388f434252e9e36e0407b1c7')

build() {
  cd "${_pkgname}-${pkgver}"
  ./configure --prefix=/usr
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

check() {
  cd "${_pkgname}-${pkgver}"
  make check
}

package() {
  cd "${_pkgname}-${pkgver}"
  make DESTDIR="$pkgdir" install

  # Remove conflicting files with the vala package
  rm -rf "${pkgdir}/usr/share/aclocal"
  rm "${pkgdir}"/usr/lib/pkgconfig/vapigen.pc
  mkdir -p "${pkgdir}"/usr/lib/pkgconfig/vala-${pkgver%.*}
  for _f in libvala valadoc vapigen ; do
    ln -s ../${_f}-${pkgver%.*}.pc "${pkgdir}"/usr/lib/pkgconfig/vala-${pkgver%.*}/
  done
  ln -s ./vapigen-${pkgver%.*}.pc "${pkgdir}"/usr/lib/pkgconfig/vala-${pkgver%.*}/vapigen.pc
  rm "${pkgdir}"/usr/share/vala/Makefile.vapigen
  rm "${pkgdir}"/usr/bin/{vala,valac,vala-gen-introspect,valadoc,vapigen}
  rm "${pkgdir}"/usr/share/man/man1/{valac,valadoc,vala-gen-introspect,vapigen}.1
}

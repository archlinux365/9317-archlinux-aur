# Contributor: twa022 <twa022 at gmail dot com>

_pkgname=xfce4-panel
pkgname=${_pkgname}-devel
pkgver=4.13.7
pkgrel=1
pkgdesc="Panel for the Xfce desktop environment"
arch=('i686' 'x86_64')
url="https://www.xfce.org/"
license=('GPL2')
groups=('xfce4-devel')
depends=('exo>=0.11.2' 'garcon>=0.5.0' 'libxfce4ui>=4.13.0' 'libxfce4util>4.13.0'
         'libwnck3' 'hicolor-icon-theme' 'desktop-file-utils' 'xfconf>=4.13.2')
makedepends=('intltool' 'gtk-doc' 'gobject-introspection' 'vala' 'python') #for gdbus-codegen
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}" "${_pkgname}-git")
source=("https://archive.xfce.org/src/xfce/$_pkgname/${pkgver%.*}/$_pkgname-$pkgver.tar.bz2")
sha256sums=('888e30417342b05d566f5ef5a85791b05117fadbbc2f00bc5f29a30d6ba42ba9')

build() {
  cd "$srcdir/$_pkgname-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --disable-static \
    --enable-gio-unix \
    --enable-gtk-doc \
    --enable-gtk2 \
    --disable-debug
  make
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}

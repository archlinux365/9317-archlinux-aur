# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=xfconf
pkgname=${_pkgname}-devel
pkgver=4.13.3
pkgrel=1
pkgdesc="A simple client-server configuration storage and query system"
arch=('i686' 'x86_64')
url="http://www.xfce.org/"
license=('GPL2')
depends=('libxfce4util' 'dbus')
makedepends=('perl-extutils-depends' 'perl-extutils-pkgconfig' 'glib-perl'
             'intltool' 'gtk-doc' 'chrpath')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
options=('!emptydirs')
source=(http://archive.xfce.org/src/xfce/$_pkgname/${pkgver%.*}/$_pkgname-$pkgver.tar.bz2)
sha256sums=('842416258d87f24b8e2b72ddf3cb1385d0c73c982e66b18d2b2e7cb8123f98c8')
install='xfconf.install'

build() {
  cd "$srcdir/$_pkgname-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib/xfce4 \
    --localstatedir=/var \
    --disable-static \
    --enable-gtk-doc \
    --with-perl-options=INSTALLDIRS="vendor" \
    --disable-debug
  make
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"

  make DESTDIR="$pkgdir" install

  # fix insecure rpath, http://bugs.archlinux.org/task/19980
  chrpath -d "$pkgdir/usr/lib/perl5/vendor_perl/auto/Xfce4/Xfconf/Xfconf.so"
}

# vim:set ts=2 sw=2 et:

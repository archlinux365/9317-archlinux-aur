# Maintainer: Mark Weiman <mark dot weiman at markzz dot com>
# Contributor: Dan Vratil <vratil@progdansoft.com>
# Contributor: Alex Jordan <alex at strugee dot net>

pkgname=libvterm-vwm
pkgver=0.99.7
pkgrel=1
pkgdesc="Terminal emulation library to mimic VT100 and rxvt capabilities"
arch=('i686' 'x86_64')
url="http://libvterm.sourceforge.net"
license=('GPLv2')
source=('http://superb-dca2.dl.sourceforge.net/project/libvterm/libvterm-0.99.7.tar.gz')
md5sums=('ac68b77eb33086f7532ab303245efb77')
_srcname=libvterm

build() {
  cd "$srcdir/$_srcname"
  make || return 1
}

package() {
  cd "$srcdir/$_srcname"
  install -m644 -D vterm.h $startdir/pkg/usr/include/vterm.h || return 1
  install -m755 -D libvterm.so $startdir/pkg/usr/lib/libvterm.so || return 1
}

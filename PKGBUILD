# Maintainer: jose <jose1711 [at] gmail (dot) com>

pkgname=fi
_pkgname=f-irc
arch=('i686' 'x86_64')
pkgver=1.36
pkgrel=1
pkgdesc="f-irc is an irc terminal client"
license=('unknown')
depends=('ncurses')
url="http://www.vanheusden.com/fi/"
source=("http://deb.debian.org/debian/pool/main/f/f-irc/f-irc_${pkgver}.orig.tar.gz"
        "fix_ftbfs.patch")
md5sums=('f5b092f75f9b5dc068ecdde92a9ebb62'
         'fb409c6b07aec6c189b8e9f82b1c12ae')

prepare() {
  cd $srcdir/$pkgname-$pkgver
  patch -p1 -i $srcdir/fix_ftbfs.patch
}

build() {
  cd $srcdir/$pkgname-$pkgver
  sed -i '/ln /s%.*%	ln -s /usr/bin/fi $(DESTDIR)/bin/f-irc%' Makefile
  sed -i '/include/s%ncursesw/%%' *.c *.h
 make
}

package() {
  mkdir -p $pkgdir/{usr/{bin,share/man/man1},etc}
  cd $srcdir/$pkgname-$pkgver
  make DESTDIR=$pkgdir/usr SYSCONFDIR=$pkgdir/etc install
  install -Dm644 firc.ignore $pkgdir/etc
  #sed -i 's/ignore_file=firc.ignore/ignore_file=\/etc\/firc.ignore/' $pkgdir/etc/firc.conf
}

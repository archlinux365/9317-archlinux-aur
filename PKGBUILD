# Maintainer: Brian Bidulock <bidulock@openss7.org>
# Contributor: Andrea Scarpino <bash.lnx@gmail.com>
# Contributor: Mario Blättermann <mariobl@gnome.org>

pkgname=wmcliphist
pkgver=1.0
pkgrel=3
pkgdesc="A clipboard history dockable application for Window Maker"
arch=('i686' 'x86_64')
url="http://linux.nawebu.cz/wmcliphist/"
license=('GPL')
depends=('gtk2')
install=wmcliphist.install
source=(http://linux.nawebu.cz/$pkgname/$pkgname-$pkgver.tar.gz
	gtk2.patch)
md5sums=('81c9627c2955949669d2afa547415a10'
         'c91efc33caad564242fa923ac5ad04eb')

prepare() {
  cd "$srcdir/$pkgname"
  patch -Np2 -b -z .orig -i ../gtk2.patch
}
build()  {
  cd "$srcdir/$pkgname"
  make
}
package() {
  cd "$srcdir/$pkgname"
  install -D -m 644 wmcliphistrc $pkgdir/etc/wmcliphistrc.sample
  install -D -m 755 wmcliphist $pkgdir/usr/bin/wmcliphist
}

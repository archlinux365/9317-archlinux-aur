# Maintainer:  TDY <tdy@archlinux.info>
# Contributor: Kaiting Chen <kaitocracy@gmail.com>
# Contributor: Anton Bazhenov <anton.bazhenov at gmail>

pkgname=udunits
pkgver=2.2.24
pkgrel=1
pkgdesc="A tool for calculations of physical quantities"
arch=('i686' 'x86_64')
url="http://www.unidata.ucar.edu/software/udunits/"
license=('MIT')
depends=('expat')
options=('!libtool')
install=udunits.install
source=(ftp://ftp.unidata.ucar.edu/pub/$pkgname/$pkgname-$pkgver.tar.gz)
sha256sums=('20bac512f2656f056385429a0e44902fdf02fc7fe01c14d56f3c724336177f95')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr --disable-static
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  ln -s libudunits2.so "$pkgdir/usr/lib/libudunits.so"
  ln -s libudunits2.so.0 "$pkgdir/usr/lib/libudunits.so.0"
  ln -s libudunits2.so.0.1.0 "$pkgdir/usr/lib/libudunits.so.0.1.0"
  install -Dm0644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:

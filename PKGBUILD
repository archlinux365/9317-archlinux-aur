# Maintainer: Lex Black <autumn-wind at web dot de>
# Contributor: Patrick Hof <patrickhof@web.de>

pkgname=pdfresurrect
pkgver=0.21
pkgrel=1
pkgdesc="tool aimed at analyzing PDF documents"
#url="http://757labs.org/wiki/Projects/pdfresurrect"
url="https://github.com/enferex/pdfresurrect"
license=("GPL3")
arch=('x86_64' 'i686')
depends=('glibc')
source=("$pkgname-$pkgver.tar.gz::https://github.com/enferex/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('5bb2edbe5db15ab9cdac625f4ffa1a5d')


build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr
  make
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="${pkgdir}" install
}

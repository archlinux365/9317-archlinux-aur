# Maintainer: Olaf Bauer <hydro@freenet.de>

pkgname=udfclient
pkgver=0.8.8
pkgrel=1
pkgdesc="a userland implementation of the UDF filingsystem"
arch=('i686' 'x86_64')
url="http://www.13thmonkey.org/udfclient/"
license=('custom:Clarified Artistic')
depends=(glibc)
makedepends=('bmake')
source=(${url}releases/UDFclient.$pkgver.tgz)
md5sums=('529a047f5e87b04540d06e369747c50b')

build() {
  cd "$srcdir/UDFclient.$pkgver"
  ./configure --prefix=/usr
  bmake
}

package() {
  cd "$srcdir/UDFclient.$pkgver"
  install -d "$pkgdir/usr/bin"
  bmake prefix="$pkgdir/usr" install
  install -Dm 644 LICENCE.clearified.artistic "$pkgdir/usr/share/licenses/$pkgname/LICENCE"
}

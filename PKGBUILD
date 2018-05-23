# Maintainer: Luca P <meti at lplab.net>
# Contributor: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Contributor: Kaiting Chen <kaiting.chen@kiwilight.com>

pkgname='librelp'
pkgver=1.2.16
pkgrel=1
pkgdesc="The Reliable Event Logging Protocol"
url="http://www.librelp.com/"
arch=('x86_64' 'i686')
license=('GPL3')
depends=('gnutls')
source=("http://download.rsyslog.com/librelp/librelp-${pkgver}.tar.gz")
sha256sums=('0c235dd2a01060ad5e64438879b31ae64e7640d0e262aa1a287a2dd9bc60fd53')

build() {
  cd "$srcdir"/${pkgname}-${pkgver}
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}

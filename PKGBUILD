# Maintainer: Mattias Andrée <`base64 -d`(bWFhbmRyZWUK)@member.fsf.org>

pkgname=bus
pkgver=3.1.3
pkgrel=1
pkgdesc="A simple daemonless system for broadcasting messages locally"
arch=(i686 x86_64)
url="https://github.com/maandree/bus"
license=('MIT')
depends=()
makedepends=()
source=($url/archive/$pkgver.tar.gz)
sha256sums=(dfd49640d16b6c71d0be012dca878d8781b89e6b620071f10ddf459764399a07)


build() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX=/usr
}


package() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX=/usr install DESTDIR="$pkgdir"
}


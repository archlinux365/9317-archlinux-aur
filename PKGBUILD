# Maintainer: Daniel Menelkir <menelkir@itroll.org>
# Contributor: Muhammad Herdiansyah <herdiansyah@netc.eu>
# Contributor: Alexander Keller <git@nycroth.com>
pkgname=sinit
pkgver=1.1
pkgrel=2
pkgdesc="Suckless init"
url="http://tools.suckless.org/sinit/"
arch=('i686' 'x86_64')
license=('MIT')
install=sinit.install
source=("$pkgname-$pkgver::git+https://git.suckless.org/${pkgname}")
md5sums=('SKIP')

makedepends=('git')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  cp "$srcdir/../config.h" "config.h"
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" PREFIX=/usr install
  install -m644 -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -m644 -D README "$pkgdir/usr/share/doc/$pkgname/README"
}

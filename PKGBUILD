# Maintainer: Dave Reisner <d@falconindy.com>

pkgname=cower
pkgver=15
pkgrel=1
pkgdesc="A simple AUR agent with a pretentious name"
arch=('i686' 'x86_64')
url="http://github.com/falconindy/cower"
license=('MIT')
depends=('curl' 'openssl' 'pacman' 'yajl')
makedepends=('perl')
source=("http://code.falconindy.com/archive/$pkgname/$pkgname-$pkgver.tar.gz"{,.sig})
validpgpkeys=('487EACC08557AD082088DABA1EB2638FF56C0C53')  # Dave Reisner
md5sums=('0e4ec7d658648c899cec4eb7dc377315'
         'SKIP')

build() {
  cd "$pkgname-$pkgver"

  make
  sed '/^$/q' cower.c >LICENSE
}

package() {
  cd "$pkgname-$pkgver"

  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ft=sh syn=sh

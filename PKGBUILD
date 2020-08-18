# Maintainer: Kevin MacMartin <prurigro@gmail.com>

pkgname=thumbdrives
pkgver=0.3.1
pkgrel=1
pkgdesc='Thumbdrive and ISO emulator for phones'
url='https://git.sr.ht/~martijnbraam/thumbdrives'
license=('MIT')
arch=('any')
depends=('dconf' 'hicolor-icon-theme' 'python')
makedepends=('meson')
source=("https://git.sr.ht/~martijnbraam/thumbdrives/archive/$pkgver.tar.gz")
sha512sums=('2eae87efc239f5de6e704d4dc51b9e68b67219d1d0f86444d219408387b81e8f57cc67cfa53eca0fbdeb0d317de37e9ec8650e31c7731319070b422cdd17cbd3')

build() {
  cd $pkgname-$pkgver
  meson --prefix=/usr ../build
  ninja -v -C ../build
}

package() {
  cd $pkgname-$pkgver
  DESTDIR="$pkgdir" meson install -C ../build
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

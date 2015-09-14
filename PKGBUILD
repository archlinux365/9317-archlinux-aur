# Maintainer: Lieven Moors <lievenmoors@gmail.com>

pkgname=x42-plugins
pkgver=20150702
pkgrel=1
pkgdesc="Collection of LV2 plugins"
arch=('i686' 'x86_64')
url="https://github.com/x42/x42-plugins"
license=('GPL')
depends=('pango' 'jack' 'liblo' 'zita-convolver>3' 'libltc')
makedepends=('gtk2' 'ftgl' 'ttf-freefont' 'lv2>1.6.0')
groups=('lv2-plugins')
source=("http://gareus.org/misc/x42-plugins/$pkgname-$pkgver.tar.xz")
md5sums=('4fa76d39ddb5830bca9b0e5142b6ffe0')

build() {
  cd "$pkgname-$pkgver"
  sed -i '25 s/BUILDDIR ?=/BUILDDIR =/' fil4.lv2/Makefile
  FONTFILE=/usr/share/fonts/TTF/FreeSansBold.ttf make
}

package() {
  cd "$pkgname-$pkgver"
  make install DESTDIR="$pkgdir/" PREFIX=/usr
}

# vim:set ts=2 sw=2 et:

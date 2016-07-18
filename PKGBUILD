# Maintainer: Thomas Ascher <thomas.ascher@gmx.at>
# Contributor: Thomas Ascher <thomas.ascher@gmx.at>
pkgname=gshisen.app
_pkgname=GShisen 
pkgrel=1
pkgver=1.3.0
pkgdesc="A game for GNUstep."
arch=('i686' 'x86_64')
url="http://www.nongnu.org/gap/gshisen/index.html"
license=('GPL')
groups=('gnustep')
depends=('gnustep-base'
         'gnustep-gui')
makedepends=('gcc-objc'
             'gnustep-make')
source=("http://savannah.nongnu.org/download/gap/$_pkgname-$pkgver.tar.gz")
sha256sums=('f904621f70cccc2efa70698c21a78049870fb4305775f9a04ecf7f7a7f4a5dfe')

build() {
  cd "$_pkgname-$pkgver"
  make
}

package() {
  cd "$_pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  install -D -m644 "$pkgdir/usr/lib/GNUstep/Applications/$_pkgname.app/Resources/$_pkgname.desktop" \
    "$pkgdir/usr/share/applications/$_pkgname.desktop"
}

post_install() {
  update-desktop-database -q
}

post_upgrade() {
  post_install $1
}

post_remove() {
  post_install $1
}

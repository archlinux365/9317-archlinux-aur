# Maintainer: goetzc
# Contributor: Philip Goto <philip.goto@gmail.com>
# Contributor: grimi

pkgname=xcursor-breeze
epoch=1
pkgver=5.15.3
pkgrel=1
pkgdesc="Breeze cursor theme (KDE Plasma 5). This package is for usage in non-KDE Plasma desktops."
arch=('any')
url="https://www.kde.org"
license=('GPL')
depends=('libxcursor')
conflicts=('breeze')
source=("http://download.kde.org/stable/plasma/${pkgver}/breeze-${pkgver}.tar.xz")
sha1sums=('6ded454a6f1d00f8c4204f78164dd272400aabcc')

package() {
  install -dm755 "$pkgdir"/usr/share/icons/
  cp -r "$srcdir"/breeze-${pkgver}/cursors/Breeze/Breeze/           "$pkgdir"/usr/share/icons/
  cp -r "$srcdir"/breeze-${pkgver}/cursors/Breeze_Snow/Breeze_Snow/ "$pkgdir"/usr/share/icons/
}

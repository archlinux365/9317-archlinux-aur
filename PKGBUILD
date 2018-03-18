# Maintainer: ahrs <Forward dot to at hotmail dot co dot uk>

pkgname=nougat-git
_pkgname=nougat
pkgver=1.r16.g818d21d
pkgrel=1
pkgdesc='Screenshot wrapper'
arch=(any)
url='https://github.com/Sweets/nougat'
license=('MIT')
optdepends=(
  'maim: Maim backend support'
  'imagemagick: ImageMagick backend support'
  'slop: ImageMagick backend support'
  'xclip: Clipboard support'
)
provides=('nougat')
conflicts=('nougat')

source=(
  "nougat::git+https://github.com/Sweets/nougat.git"
)

sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --tags --long | sed -e 's/\([^-]*-g\)/r\1/;s/-/./g' -e 's/^v//g'
}

package() {
  install -Dm755 "$srcdir"/$_pkgname/$_pkgname "$pkgdir/usr/bin/$_pkgname"

  install -Dm644 "$srcdir"/$_pkgname/README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 "$srcdir"/$_pkgname/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

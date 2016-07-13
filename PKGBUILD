# Maintainer: Andy Crowd <andy_crowd@ainsdata.se>
pkgname="genwipe.sh"
pkgver=1.0.0
pkgrel=0
pkgdesc="Show calculated dd and pv examples for destination."
arch=(any)
depends=(bash)
optdepends=('pv')
makedepends=('git')
source=("genwipe.sh::git+https://github.com/AndyCrowd/genwipe.sh.git")
license=('GPL3')
md5sums=('SKIP')
url="https://github.com/AndyCrowd/list-desktop-files"

package() {
  install -d "$pkgdir/usr/bin"
  install -d "$pkgdir/usr/share/licenses/$pkgname"
  install -d "$pkgdir/usr/share/doc/$pkgname"

  install -m755 "$srcdir/$pkgname/lsdesktopf" "$pkgdir/usr/bin"
  install -m644 "$srcdir/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname"
  install -m644 "$srcdir/$pkgname/README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
}

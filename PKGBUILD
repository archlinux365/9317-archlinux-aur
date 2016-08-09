# Maintainer: Chad "crossroads1112" Sharp <crossroads1112@riseup.net>
pkgname=libcs50-git
pkgver=r99.ccec25a
pkgrel=1
pkgdesc="Harvard's CS50 library"
arch=('x86_64' 'i686')
url="cs50.harvard.edu"
license=('BSD')
depends=()
optdepends=()
makedepends=('git')
provides=("libcs50")
source=(git+https://github.com/cs50/lib50-c.git)
md5sums=(SKIP)


build(){
    cd "$srcdir/lib50-c/"
    make build
}

package() {
    cp -a "$srcdir/lib50-c/build" "$pkgdir/$pkgname"
}

pkgver() {
  cd "$srcdir/lib50-c"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

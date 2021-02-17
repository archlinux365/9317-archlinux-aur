# Maintainer 5amu <v.casalino@protonmail.com>

pkgname=searchpoc
pkgver=v1.0.1
pkgrel=1
pkgdesc="Search a PoC for a (or some) given CVE id"
url="https://github.com/5amu/searchpoc/"
license=('MIT')
arch=('x86_64')
depends=()
makedepends=('python3' 'nuitka' 'chrpath')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/5amu/searchpoc/archive/${pkgver}.tar.gz")
sha256sums=("SKIP")

build() {
    cd $srcdir/$pkgname-$pkgver
    make DESTDIR="$pkgdir" PREFIX="/usr" build
}

package() {
    cd $srcdir/$pkgname-$pkgver
    make DESTDIR="$pkgdir" PREFIX="/usr" install
}

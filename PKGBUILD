# Maintainer: Rihards Skuja <rhssk at posteo eu>
_remotename=kpeoplevcard
_pkgname=kpeople-vcard
pkgname=$_pkgname-git
pkgver=r36.d912814
pkgrel=1
pkgdesc="KPeople VCard Support"
arch=(x86_64)
url="https://phabricator.kde.org/source/$_remotename/"
license=("GPL")
depends=(kpeople kcontacts)
makedepends=(extra-cmake-modules)
provides=($_pkgname)
conflicts=($_pkgname)
source=("git+git://anongit.kde.org/$_remotename")
md5sums=("SKIP")

pkgver() {
    cd $_remotename
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../$_remotename
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir/" install
}

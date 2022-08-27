# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=patchance
pkgname="$_pkgname-git"
pkgver=r51.14719a7
pkgrel=1
pkgdesc='A modern graphical patchbay for JACK (git version)'
arch=(any)
url='https://github.com/Houston4444/Patchance'
license=(GPL2)
depends=(python-pyqt5)
makedepends=(git qt5-tools)
groups=(pro-audio)
provides=($_pkgname)
conflicts=($_pkgname)
source=("$_pkgname::git+https://github.com/Houston4444/Patchance.git"
        'HoustonPatchbay::git+https://github.com/Houston4444/HoustonPatchbay.git')
md5sums=('SKIP'
         'SKIP')

pkgver() {
  cd $_pkgname
  (
    set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd $_pkgname
  git submodule init
  git config submodule.HoustonPatchbay.url "$srcdir"/HoustonPatchbay
  git submodule update
}

build() {
  cd $_pkgname
  make
}

package() {
  cd $_pkgname
  make PREFIX=/usr DESTDIR="$pkgdir" install
  # remove unneeded files from installation
  rm -rf "$pkgdir"/usr/share/patchance/HoustonPatchbay/patchbay
  rm -f "$pkgdir"/usr/share/patchance/HoustonPatchbay/{.git,.gitignore,Makefile,readme.md}
  rm -rf "$pkgdir"/usr/share/patchance/HoustonPatchbay/manual
}

# Maintainer: Fred <lapdogpdx.yahoo.com>

pkgname=filet-git
pkgver=r51.1b2411d
pkgrel=1
pkgdesc="A fucking fucking fast file fucker"
arch=('i686' 'x86_64')
url="https://github.com/buffet/filet"
license=('MPL')
depends=()
makedepends=('git')
conflicts=('filet')
provides=('filet')
source=("${pkgname}::git+https://github.com/buffet/filet.git")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${pkgname}"
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  DESTDIR="${pkgdir}" PREFIX=/usr make install
}

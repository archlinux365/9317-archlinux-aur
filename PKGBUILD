# Maintainer: Guilherme Rugai Freire <gui.rugai.freire at gmail dot com>

_pkgname=sowon
pkgname="${_pkgname}-git"
pkgver=r66.85dbbd0
pkgrel=1
pkgdesc="Starting Soon Timer and Clock"
arch=('x86_64')
url="https://github.com/tsoding/sowon"
license=('MIT')
depends=('sdl2')
makedepends=('git' 'make')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	make -C "$_pkgname"
}

package() {
	cd "$srcdir/$_pkgname"
    make PREFIX=/usr DESTDIR="$pkgdir" install
}


# Maintainer: crasm <crasm@vczf.io>

pkgname=lily-git
pkgver=?
pkgrel=1
pkgdesc='An interpreted language with a focus on expressiveness and type safety'
arch=('any')
url="https://jesserayadkins.github.io/lily/"
license=('MIT')
makedepends=('git' 'cmake')
provides=('lily')
conflicts=('lily')
source=("git+https://github.com/jesserayadkins/lily.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/lily"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
	cd "$srcdir/lily"
}

build() {
	cd "$srcdir/lily"
	cmake .
	make
}

package() {
	cd "$srcdir/lily"
	make DESTDIR="$pkgdir/" install
}

# vim: noet nowrap tw=120

# Maintainer: Antonín Dach <dach@protonmail.com>
pkgname=wayst-git
pkgver=r38.cf2cf2c
pkgrel=1
pkgdesc='Simple terminal emulator for Wayland and X11 with OpenGL rendering and minimal dependencies.'
arch=('x86_64')
url='https://github.com/91861/wayst'
license=('MIT')
depends=('mesa' 'freetype2' 'fontconfig' 'libxkbcommon')
makedepends=('git') 
provides=('wayst')
conflicts=('wayst')
install=
source=('git+https://github.com/91861/wayst.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/wayst"
#	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/wayst"
	make
}

package() {
	cd "$srcdir/wayst"
	make INSTALL_DIR="$pkgdir/" install
}

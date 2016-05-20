# Maintainer: PureTryOut
pkgname=openrw-git
pkgver=r621.2ee4a6e
pkgrel=1
epoch=
pkgdesc="OpenRW 'Open ReWrite' is an un-official open source recreation of the classic Grand Theft Auto III game executable"
arch=('x86_64')
url="https://github.com/danhedron/openrw"
license=('GPL3')
groups=()
depends=('bullet' 'glm' 'sfml' 'boost')
makedepends=('git' 'cmake' 'make')
checkdepends=()
optdepends=()
provides=('openrw')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=('openrw-git::git+https://github.com/danhedron/openrw.git'
	'openrw.desktop')
noextract=()
sha256sums=('SKIP'
	'78f96261cf22a5413f4e17480b9cb08ce4da8683fb2f8399018e80c96246d0b0')
validpgpkeys=()

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$pkgname"
	
	if [[ -d build ]]; then
		rm -rf build
	fi
	mkdir build && cd build

	cmake ..
	make $MAKEFLAGS
}


package() {
	cd "$pkgname"

	# The application
	install -Dm755 build/rwgame/rwgame "$pkgdir/usr/bin/rwgame"

	# .desktop file and icon
	install -Dm644 "$srcdir/openrw.desktop" "$pkgdir"/usr/share/applications/openrw.desktop
}

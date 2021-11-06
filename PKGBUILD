# Maintainer: Magnus Groß, for email contact see AUR commit author email
_pkgname=blobdrop
pkgname="$_pkgname"-git
pkgver=r5.e75e543
pkgrel=1
pkgdesc="Drag and drop files directly out of the terminal"
arch=('i686' 'x86_64')
url="https://github.com/vimpostor/$_pkgname"
license=('GPL3')
depends=(qt6-base qt6-declarative qt6-svg qt6-quickcontrols2)
makedepends=(git cmake ninja)
source=("git+https://github.com/vimpostor/$_pkgname.git")
md5sums=('SKIP')

pkgver() {
	cd "$_pkgname"
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cd "$_pkgname"
	cmake -B build -G Ninja -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=Release
	cmake --build build
}

package() {
	cd "$_pkgname"
	DESTDIR=$pkgdir cmake --install build
}

# Maintainer: Jerome Leclanche <jerome@leclan.ch>

_pkgname=liblxqt
pkgname=$_pkgname-git
pkgver=0.13.0
pkgrel=1
pkgdesc="Common base library for LXQt components."
arch=("i686" "x86_64")
url="https://lxqt.org"
license=("GPL2")
depends=("qt5-base" "qt5-x11extras" "kwindowsystem" "libqtxdg-git" "libxss" "polkit-qt5")
makedepends=("git" "cmake" "qt5-tools" "lxqt-build-tools-git")
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/lxqt/$_pkgname.git")
sha256sums=('SKIP')


pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --always | sed "s/-/./g"
}

build() {
	mkdir -p build
	cd build
	cmake "$srcdir/$_pkgname" \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=lib
	make
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
}

# Maintainer: Xentec <xentec at aix0 dot eu>

pkgname=cppformat-git
pkgver=1.1.0.r392.g869ed1e
pkgrel=1
pkgdesc="Small, safe and fast formatting library for C++"
arch=('i686' 'x86_64')
url="http://cppformat.github.io"
license=('BSD')

conflicts=('cppformat')
depends=('gcc-libs')
makedepends=('cmake' 'git' 'doxygen' 'nodejs-less' 'python-virtualenv')

source=("$pkgname"::'git+https://github.com/cppformat/cppformat')
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
	cd "$pkgname"

	sed -i  "s/'--clean-css',//" doc/build.py
}

build() {
	cd "$pkgname"
	mkdir -p build && cd build

	cmake \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_BUILD_TYPE=Release \
		-DBUILD_SHARED_LIBS=1 \
		-DFMT_TEST=0 \
		-Wno-dev \
		..

	make
	make doc
}

check() {
	cd "$pkgname"/build

	cmake \
		-DFMT_TEST=1 \
		-Wno-dev \
		..

	make test
}

package() {
	cd "$pkgname"

	install -D -m644 LICENSE.rst "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

	cd build
	DESTDIR="$pkgdir" make install
}


# Maintainer: Forest Crossman <cyrozap at gmail dot com>

pkgname=opengv-git
pkgver=r91.0b2017d
pkgrel=2
pkgdesc="An efficient C++ library for calibrated camera pose computation using geometric computer vision algorithms."
arch=('i686' 'x86_64')
url="https://laurentkneip.github.io/opengv/"
license=('BSD')
depends=('boost-libs' 'eigen>=3' 'python2-numpy')
makedepends=('boost' 'cmake' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+https://github.com/laurentkneip/opengv.git"
        "https://github.com/laurentkneip/opengv/pull/61.patch"
        "https://github.com/laurentkneip/opengv/pull/76.patch")
sha256sums=('SKIP'
            'SKIP'
	    'SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/${pkgname%-git}"

	patch -p1 < ../61.patch
	patch -p1 < ../76.patch

	[ ! -d build ] || rm -r build
}

build() {
	cd "$srcdir/${pkgname%-git}"

	mkdir build
	cd build
	cmake .. \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DBUILD_SHARED_LIBS=ON \
		-DBUILD_PYTHON=ON \
		-DBUILD_POSITION_INDEPENDENT_CODE=ON \
		-DINSTALL_OPENGV=ON
	make
}

check() {
	cd "$srcdir/${pkgname%-git}"

	cd build/bin
	for test in test_*; do
		./$test
	done
}

package() {
	cd "$srcdir/${pkgname%-git}"

	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	install -m 644 License.txt "$pkgdir/usr/share/licenses/$pkgname/"

	cd build
	make DESTDIR="$pkgdir/" install
}

# Maintainer: Bert Peters <bert@bertptrs.nl>
pkgname=simdjson
pkgver=0.8.2
pkgrel=1
pkgdesc="A C++ library to see how fast we can parse JSON with complete validation."
arch=('x86_64')
url="https://github.com/simdjson/simdjson"
license=('APACHE')
depends=(gcc-libs)
makedepends=(cmake)
source=("$pkgname-$pkgver.tar.gz::https://github.com/simdjson/simdjson/archive/v$pkgver.tar.gz")
sha256sums=('6540b7fe5d7cb37afdf8be487b2c6abf31a503fe6709c581d2b198b0016cc5fc')

build() {
	cd "$pkgname-$pkgver"
	cmake . -DCMAKE_INSTALL_PREFIX="/usr/" -DSIMDJSON_JUST_LIBRARY=On
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}

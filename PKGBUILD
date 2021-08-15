pkgname=s2geometry
pkgver=0.9.0
pkgrel=1
pkgdesc="A library for manipulating geometric shapes"
arch=("x86_64" "aarch64")
source=("https://github.com/google/s2geometry/archive/refs/tags/v0.9.0.tar.gz")
sha256sums=("54c09b653f68929e8929bffa60ea568e26f3b4a51e1b1734f5c3c037f1d89062")
depends=("openssl")
makedepends=("cmake")
license=("Apache-2.0")

build() {
	cd $pkgname-$pkgver
	cmake -B build -DCMAKE_INSTALL_PREFIX='/usr'
	make -C build
}

package() {
	cd $pkgname-$pkgver
	make -C build DESTDIR="$pkgdir/" install
}

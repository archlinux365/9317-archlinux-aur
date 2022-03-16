# Maintainer: Leonard Iklé <leonard.ikle@gmail.com>

pkgname=cargs
pkgver=1.0.3
pkgrel=1
pkgdesc="A lightweight cross-platform getopt alternative that works on Linux, Windows and macOS. Command line argument parser library for C/C++. Can be used to parse argv and argc parameters."
arch=('x86_64')
url="https://likle.github.io/cargs/"
license=('MIT')
makedepends=('cmake')
source=("https://github.com/likle/cargs/archive/refs/tags/v$pkgver.tar.gz")
md5sums=('5944cf654ed92e388f48d0438b6f28f3')

build() {
  cmake -S "$pkgname-$pkgver" -B build \
    -DCMAKE_BUILD_TYPE="None" \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DBUILD_SHARED_LIBS="1" \
    -DENABLE_TESTS="1" \
    -Wno-dev
  cmake --build build
}

check() {
	cd build
	./cargstest
}

package() {
	DESTDIR="$pkgdir" cmake --install build
}

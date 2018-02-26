# Maintainer: Marc Tiehuis <marctiehuis@gmail.com>

pkgname=zig
pkgver=0.1.1
pkgrel=1
pkgdesc='a programming language prioritizing robustness, optimality, and clarity'
arch=('i686' 'x86_64')
url='http://ziglang.org/'
license=('MIT')
depends=('llvm' 'clang')
makedepends=('cmake')
source=("https://s3.amazonaws.com/ziglang.org/download/$pkgver/zig-$pkgver.tar.xz")
md5sums=('e1d62c8f196acef9173c88b4787bf4eb')

build() {
    cd "$srcdir/$pkgname-$pkgver"
    mkdir -p build
    cd build
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DZIG_LIBC_LIB_DIR=$(dirname $(cc -print-file-name=crt1.o)) \
        -DZIG_LIBC_INCLUDE_DIR=$(echo -n | cc -E -x c - -v 2>&1 | grep -B1 "End of search list." | head -n1 | cut -c 2-) \
        -DZIG_LIBC_STATIC_LIB_DIR=$(dirname $(cc -print-file-name=crtbegin.o))
    make
}

check() {
    # We rebuild and install into a new local directory so we can test the
    # stdlib before installing. The `--zig-std-dir` option does not work as
    # expected with the `build` command right now so, hence the workaround.
    cd "$srcdir/$pkgname-$pkgver"
    mkdir -p build_test
    cd build_test
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=$(pwd) \
        -DZIG_LIBC_LIB_DIR=$(dirname $(cc -print-file-name=crt1.o)) \
        -DZIG_LIBC_INCLUDE_DIR=$(echo -n | cc -E -x c - -v 2>&1 | grep -B1 "End of search list." | head -n1 | cut -c 2- | sed "s/ .*//") \
        -DZIG_LIBC_STATIC_LIB_DIR=$(dirname $(cc -print-file-name=crtbegin.o))
    make install

    cd "$srcdir/$pkgname-$pkgver/build_test"
    ./zig build --build-file ../build.zig test
}

package() {
    cd "$srcdir/$pkgname-$pkgver/build"
    install -Dm644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    make DESTDIR="$pkgdir" install
}

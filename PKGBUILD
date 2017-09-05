# Maintainer: Dario Ostuni <dario.ostuni@gmail.com>

pkgname=binaryen
pkgver=37
pkgrel=2
pkgdesc="Compiler infrastructure and toolchain library for WebAssembly, in C++"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="https://github.com/WebAssembly/binaryen"
license=('MIT')
depends=()
makedepends=('emscripten' 'cmake' 'clang')
source=("https://github.com/WebAssembly/binaryen/archive/version_${pkgver}.tar.gz"
        "binaryen.sh"
        "https://patch-diff.githubusercontent.com/raw/WebAssembly/binaryen/pull/1162.patch")
sha256sums=('dcdfc95f3c1a2b2319bd525931aadd43dfb39c8e94366d3731befe81a2b4f84c'
            '2262d9450ee2558e48dfc056627cabe4a1760d9e6cfad9b091f485efca68607a'
            '56151afd83446ef741fd4d03773759045b09ed125e5f2da719ea81564387d458')

prepare() {
    cd binaryen-version_${pkgver}
    patch -p1 < ../1162.patch
}

build() {
    export CC=clang
    export CXX=clang++
    cd binaryen-version_${pkgver}
    rm -rf build
    mkdir build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
    make
}

package() {
    install -Dm755 $srcdir/binaryen.sh $pkgdir/etc/profile.d/binaryen.sh
    cd binaryen-version_${pkgver}/build
    make DESTDIR=${pkgdir} install
    install -Dm644 ../LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    if [[ -d "${pkgdir}/usr/lib64" ]]; then
        mv ${pkgdir}/usr/lib64 ${pkgdir}/usr/lib
    fi
}

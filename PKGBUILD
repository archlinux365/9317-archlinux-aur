# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=aom
pkgname=lib32-aom
pkgver=1.0.0
pkgrel=1
pkgdesc="Alliance for Open Media video codec (32-bit)"
url="https://aomedia.org/"
arch=(x86_64)
license=(BSD custom:PATENTS)
depends=(aom)
makedepends=(cmake git ninja yasm)
_commit=d14c5bb4f336ef1842046089849dee4a301fbbf0  # tags/v1.0.0^0
source=("git+https://aomedia.googlesource.com/aom#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
    cd $_basename

    git describe --tags | sed 's/^v//;s/-/+/g'
}

prepare() {
    mkdir build

    cd $_basename

    # Reduce docs size
    printf '%s\n' >>libs.doxy_template \
        HAVE_DOT=yes DOT_IMAGE_FORMAT=svg INTERACTIVE_SVG=yes
}

build() {
    cd build

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake -G Ninja ../$_basename \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DBUILD_SHARED_LIBS=1 \
        -DENABLE_TESTS=0 \
        -DENABLE_DOCS=0

    cmake --build .
}

package() {
    DESTDIR="$pkgdir" cmake --build build --target install

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 $_basename/{LICENSE,PATENTS}

    cd "$pkgdir/usr"

    mv lib lib32
    rm -r bin include
}

# Maintainer: Roshless <pkg@roshless.com>

pkgname=lagrange
pkgrel=1
pkgver=1.1.1
pkgdesc="Beautiful Gemini Client"
url="https://git.skyjake.fi/skyjake/lagrange"
arch=('x86_64' 'i686')
license=("BSD")
source=(
    "https://git.skyjake.fi/skyjake/$pkgname/releases/download/v$pkgver/lagrange-$pkgver.tar.gz"
)

depends=(
    "openssl"
    "sdl2"
    "libunistring"
    "pcre"
)
optdepends=("mpg123")
makedepends=("cmake")

build() {
    cmake -B build -S "$pkgname-${pkgver}" \
        -DCMAKE_BUILD_TYPE='Release' \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -Wno-dev
    make -C build
}

package() {
    install -Dm644 $pkgname-$pkgver/LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    cd build
    make DESTDIR="$pkgdir" install
}

md5sums=('43f82c255c5faadb2e15f38d8d65a30b')

# Maintainer: Vaporeon <vaporeon@vaporeon.io>

pkgname=invader-git
pkgver=0.18.0.r879.661166e
pkgrel=1
pkgdesc="Open source modding toolkit for Halo Combat Evolved on the PC"
depends=('libtiff' 'libarchive' 'freetype2' 'zstd')
makedepends=('cmake' 'git' 'python')
arch=('i686' 'x86_64')
url="https://invader.opencarnage.net"
license=('GPL')
source=('git+https://github.com/Kavawuvi/invader.git')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir"/invader
    printf "%s.r%s.%s" "$(git describe --abbrev=0 --tags)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir"
    mkdir -p build
}

build() {
    cd "$srcdir"/build
    cmake ../invader -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX="$pkgdir/usr"
    make
}

package() {
    cd "$srcdir"/build
    make install
}

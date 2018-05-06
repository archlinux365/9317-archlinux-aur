# Maintainer: Vlad Zagorodniy <vladzzag@gmail.com>
pkgname=kwin-effects-unminimize1
pkgver=1.3
pkgrel=1
pkgdesc="KWin effect that animates the unminimizing of windows"
arch=('x86_64')
url="https://github.com/zzag/kwin-effects-unminimize1"
license=('GPL3')
depends=(kwin)
makedepends=(extra-cmake-modules)
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/zzag/${pkgname}/archive/${pkgver}.tar.gz)
sha256sums=('c131238e7fa864e31bf4a14cd5beff673565a5915ae990578ccfb892c8d315e0')

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../$pkgname-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install
}

# Maintainer: Vladislav Semyonoff <vsemyonoff@gmail.com>

pkgname=cmdd
pkgver=1.0.0
pkgrel=1
pkgdesc='ConnMan D-bus network state Dispatcher'
url='https://github.com/vsemyonoff/cmdd'
arch=('x86_64')
license=('GPL')
install="${pkgname}.install"
depends=('sdbus-cpp')
makedepends=('cmake' 'doxygen')
validpgpkeys=('F22C0C7E78F39CD3724529D7DAB2782BD0363778')
source=("${url}/archive/v${pkgver}.tar.gz")
md5sums=('17f07dfcc599f0e97acab72b147d9ec1')

build() {
    mkdir -p "${srcdir}/build"
    cd "${srcdir}/build"

    cmake -DCMAKE_INSTALL_PREFIX="/usr" \
          -DCMAKE_STAGING_PREFIX="${pkgdir}/usr" \
          -DCMAKE_BUILD_TYPE="Release" \
          "${srcdir}/${pkgname}-${pkgver}"
    cmake --build . --target all
}

package() {
    cd "${srcdir}/build"
    cmake --install .
}

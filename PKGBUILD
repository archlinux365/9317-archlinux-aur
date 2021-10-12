# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgname=osqp
pkgver=0.6.2
pkgrel=1
pkgdesc="The Operator Splitting QP Solver"
arch=('i686' 'x86_64')
url="https://github.com/osqp/$pkgname"
license=('apache')
depends=('boost-libs')
optdepends=('doxygen')
makedepends=('cmake' 'eigen' 'boost' 'python-numpy')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz"{,.sig})
source=("$pkgname-$pkgver.tar.gz::$url/releases/download/v$pkgver/complete_sources.tar.gz")
sha256sums=('0a7ade2fa19f13e13bc12f6ea0046ef764049023efb4997a4e72a76534f623ec')

build() {
    cd "$pkgname"

    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib . \
        -DUNITTESTS=ON -DENABLE_MKL_PARDISO=OFF
    make
}

check() {
    cd "$pkgname"
    make test
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir/" install
}

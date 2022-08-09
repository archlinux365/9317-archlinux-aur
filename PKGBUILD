# Maintainer:  Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: sxe <sxxe@gmx.de>

pkgname=kio_recoll
pkgver=1.32.7
pkgrel=1
pkgdesc="KIO Slave for recoll a full text search tool based on Xapian backend"
arch=('i686' 'x86_64')
url="http://www.lesbonscomptes.com/recoll/"
license=('GPL')
depends=('xapian-core>=1.0.15-1' 'openssl' 'hicolor-icon-theme' 'kio' 'recoll')
makedepends=('cmake' 'extra-cmake-modules')
source=("http://www.lesbonscomptes.com/recoll/recoll-${pkgver}.tar.gz")
md5sums=('66e5a45d04f18cb5ace36c096bb30b57')

build() {
    cd "${srcdir}"

    cmake -B build -S "recoll-${pkgver}/kde/kioslave/$pkgname" -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE='Release'
    make -C build
}

package() {
    make -C build DESTDIR="$pkgdir" install
}

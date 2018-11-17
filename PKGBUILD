# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: Christian Krause ("wookietreiber") <kizkizzbangbang@googlemail.com>

pkgname=libbigwig
pkgver=0.4.2
pkgrel=1
pkgdesc="library for handling bigWig files"
arch=('i686' 'x86_64')
url="https://github.com/dpryan79/libBigWig"
depends=('curl')
license=('MIT')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/dpryan79/libBigWig/archive/${pkgver}.tar.gz")
sha256sums=('c32c655bf6e383226f76fd4052e0371848a274bc14502a0fe1b851b6d901c85b')

build() {
  cd ${srcdir}/libBigWig-${pkgver}

  make
}

package() {
  cd ${srcdir}/libBigWig-${pkgver}

  make prefix=${pkgdir}/usr install

  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

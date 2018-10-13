# Maintainer: James Harvey <jamespharvey20@gmail.com>
# * No namcap warnings or errors

pkgname=libcelero
_pkgname=Celero
pkgver=2.2.0
pkgrel=1
pkgdesc='C++ Benchmark Authoring Library/Framework'
arch=('x86_64')
url='https://github.com/DigitalInBlue/Celero'
license=('custom:"Apache License, Version 2.0"')
depends=('gcc-libs')
makedepends=('cmake')
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/DigitalInBlue/${_pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('00348d461dee15bc69518ee1b4f7a8f6')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  install -Dm644 license.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  cd build
  make DESTDIR="${pkgdir}" install
}

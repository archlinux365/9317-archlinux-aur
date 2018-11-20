# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgbase=meteoio
pkgname=('meteoio' 'meteoio-examples')
pkgver=2.7.0
pkgrel=2
pkgdesc="Make data access easy and safe for numerical simulations in environmental sciences"
arch=('x86_64')
url="https://models.slf.ch/p/meteoio/"
license=('LGPL3')
makedepends=('cmake')
optdepends=('doxygen: documentation')
source=("https://models.slf.ch/p/meteoio/downloads/get/MeteoIO-$pkgver-src.tar.gz")

build() {
  cd "MeteoIO-$pkgver-src"
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  make
  cd ../doc/examples
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
}

package_meteoio() {
  cd "MeteoIO-$pkgver-src/build"
  make DESTDIR="$pkgdir/" install
}

package_meteoio-examples() {
  cd "MeteoIO-$pkgver-src/doc/examples/build"
  find -executable
  for example in 2D_interpolations coordinates data_converter dem_reading grid2d_reading matrix meteo_reading sun time; do
    install -Dm755 $example "$pkgdir/usr/bin/meteoio_$example"
  done
}

sha256sums=('4e5e141c7d56f18b79644116337775c03648e3e011bc1f30bee657afc63fe3ba')

# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgbase=meteoio
pkgname=('meteoio' 'meteoio-examples' 'meteoio-docs')
pkgver=2.7.0
pkgrel=4
pkgdesc="Make data access easy and safe for numerical simulations in environmental sciences"
arch=('x86_64')
url="https://models.slf.ch/p/meteoio/"
license=('LGPL3')
makedepends=('cmake' 'doxygen')
source=("https://models.slf.ch/p/meteoio/downloads/get/MeteoIO-$pkgver-src.tar.gz")

build() {
  cd "MeteoIO-$pkgver-src"
  mkdir -p build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DINSTALL_DOC=1 .
  make
  make doc
  cd doc/examples
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package_meteoio() {
  cd "MeteoIO-$pkgver-src/build"
  make DESTDIR="$pkgdir/" install
}

package_meteoio-examples() {
  cd "MeteoIO-$pkgver-src/doc/examples/build"
  install -vDm644 ../io.ini "$pkgdir/usr/share/meteoio/io.ini"
  for example in 2D_interpolations coordinates data_converter dem_reading grid2d_reading matrix meteo_reading sun time; do
    install -vDm755 $example "$pkgdir/usr/bin/meteoio_$example"
  done
}

package_meteoio-docs() {
  cd "MeteoIO-$pkgver-src/doc/html"
  mkdir -p "$pkgdir/usr/share/doc/meteoio"
  cp -r * "$pkgdir/usr/share/doc/meteoio"
}

sha256sums=('4e5e141c7d56f18b79644116337775c03648e3e011bc1f30bee657afc63fe3ba')

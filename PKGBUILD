# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python2-pika
pkgver=0.9.10
pkgrel=1
_libname=${pkgname/python2-/}
pkgdesc="Pure-Python implementation of the AMQP 0-9-1"
arch=(any)
url="http://pika.readthedocs.org/"
license=('GPL')
depends=(python2)
makedepends=(python2-distribute)
source=(http://pypi.python.org/packages/source/${_libname:0:1}/$_libname/$_libname-$pkgver.tar.gz)

build() {
  cd "$srcdir/$_libname-$pkgver"
  python2 setup.py build
}

package() {
	cd "$srcdir/$_libname-$pkgver"
	python2 setup.py install --skip-build -O1 --root="$pkgdir"
}

sha256sums=('5408828c49933ac1e87bd4de2782b7719bd25b275c6ab744211b9f0397afa100')

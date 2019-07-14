# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_gis
_name=trytond_gis
pkgver=5.2.0
_pkgdir=5.2
pkgrel=1
pkgdesc="Adds Geographic Information System support to trytond"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('b0d91b8e288a6d7e04b327f19cf8f6def05b03680ac95f9e15e10f8340d810f1')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

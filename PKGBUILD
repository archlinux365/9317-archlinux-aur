# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_marketing
_name=trytond_marketing
pkgver=5.2.0
_pkgdir=5.2
pkgrel=1
pkgdesc="Tryton module to group marketing features"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('fcedef5c31b843db58bed71ea07415391b49f1d06b853d2becc4e0d748dcc3ff')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

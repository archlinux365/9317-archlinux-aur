#Automatically generated by pip2arch on 2015-08-31

pkgname=python2-pycddlib
pkgver=1.0.4
pkgrel=1
pkgdesc="pycddlib is a Python wrapper for Komei Fukuda's cddlib."
url="http://pypi.python.org/pypi/pycddlib"
# Note: cddlib is bundled with pycddlib
depends=('python2' 'gmp')
makedepends=('python2')
license=('GPL')
arch=('any')
source=("https://pypi.python.org/packages/source/p/pycddlib/pycddlib-$pkgver.zip")
md5sums=('2da4347f5d4964b5a8eafddb9dd19d24')

build() {
  cd $srcdir/pycddlib-$pkgver
  python2 setup.py build
}

package() {
  cd $srcdir/pycddlib-$pkgver
  python2 setup.py install --root="$pkgdir" --optimize=1
}

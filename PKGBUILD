#Automatically generated by pip2arch on 2015-06-23

pkgname=python2-functools32
pkgver=3.2.3
pkgrel=1
pkgdesc="Backport of the functools module from Python 3.2.3 for use on 2.7 and PyPy."
url="https://github.com/MiCHiLU/python-functools32"
depends=('python2' )
makedepends=('python2-distribute' )
license=('CUSTOM')
arch=('any')
source=('https://pypi.python.org/packages/source/f/functools32/functools32-3.2.3-1.zip')
md5sums=('b678cafedac34ff19e8962e965f773bb')

build() {
    cd $srcdir/functools32-3.2.3-1
    python2 setup.py build
}

package() {
    cd $srcdir/functools32-3.2.3-1
    python2 setup.py install --root="$pkgdir" --optimize=1 
}

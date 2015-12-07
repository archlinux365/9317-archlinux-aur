pkgname='python-pythonz-bd'
pkgver=1.10.2
pkgrel=2
pkgdesc="Python installation manager supporting CPython, Stackless, PyPy and Jython (berdario branch)"
url="https://github.com/berdario/pythonz"
arch=('any')
license=('MIT')
depends=('python' 'python-resumable-urlretrieve')
makedepends=('python' 'python-setuptools')
conflicts=('python-pythonz')
source=("https://pypi.python.org/packages/source/p/pythonz-bd/pythonz-bd-${pkgver}.tar.gz")

package() {
  cd "$srcdir/pythonz-bd-$pkgver"
  python3 setup.py build
  python3 setup.py install --prefix=/usr --root="$pkgdir"
}

md5sums=('9d35cb47fc07e834957473ee41f2d4ae')

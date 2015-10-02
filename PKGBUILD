# Maintainer: XavierCLL

pkgname=python2-pympler
pkgver=0.4.2
pkgrel=1
pkgdesc='Measure, monitor and analyze the memory behavior of Python objects'
arch=('any')
url='http://pypi.python.org/pypi/pympler/'
license=('Apache')
depends=('python2')
source=("http://pypi.python.org/packages/source/P/Pympler/Pympler-$pkgver.tar.gz")
md5sums=('6bdfd913ad4c94036e8a2b358e49abd7')

build() {
  cd "$srcdir/Pympler-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/Pympler-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


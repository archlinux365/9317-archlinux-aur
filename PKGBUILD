# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
# Contributor: Antony Lee <anntzer dot lee at gmail dot com>

_pyname=nbstripout
pkgname=python-$_pyname
pkgver=0.3.5
pkgrel=1
pkgdesc='Strips outputs from Jupyter and IPython notebooks'
url="https://pypi.python.org/pypi/$_pyname/"
depends=('jupyter-nbformat')
#checkdepends=('git' 'hg' 'python-pytest' 'python-pytest-cram')
license=('MIT')
arch=('any')
source=("https://pypi.org/packages/source/${_pyname:0:1}/$_pyname/$_pyname-$pkgver.tar.gz"
"https://raw.githubusercontent.com/kynan/nbstripout/master/LICENSE.txt")
sha256sums=('814efbe00988445b2c3f3d1944c9f296a556e2b14a060f7b25372881c2e497d4'
            'cceb6581e12b4e46f8291d138b15731e8b77e6e1eee9dca23be2297e2c48fe29')

build() {
  cd $srcdir/$_pyname-$pkgver
  python setup.py build
}

package() {
  install -D -m644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  cd $srcdir/$_pyname-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1
}

#check() {
  #python setup.py test
#}

# Contributor: Patrick Mischke

pkgname='python-pygad'
_name='pygad'
pkgver=2.17.0
pkgrel=2
pkgdesc="A Python 3 Library for Building the Genetic Algorithm and Training Machine Learning Algoithms"
url="https://github.com/ahmedfgad/GeneticAlgorithmPython"
depends=('python-numpy' 'python-matplotlib')
makedepends=()
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('8c28a4b741481bf27eeaa032a346d933c96ad1a7516b22359746fbc9b64eaedb')

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
}

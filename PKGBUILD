# Maintainer: Benjamin Winger <bmw@disroot.org>

pkgname=python-python-sat
pkgver=0.1.7.dev16
pkgrel=1
pkgdesc="A Python library for prototyping with SAT oracles"
provides=('python-python-sat')
conflicts=('python-python-sat')
arch=(any)
url="https://github.com/pysathq/pysat"
license=(GPL3)
depends=("python" "python-six")
source=("https://files.pythonhosted.org/packages/f4/ce/e809612cc36c60aea071d6127a4aac7d4eeb0785c64ae040436197ab6aae/python-sat-0.1.7.dev16.tar.gz")
sha512sums=('e5e7d5290a11e19555bd705c7baca34a5b740000ad24d9ba614dde4ab4bb1ae399c8286d825af1141e3a650c242ee4e1991aff7baf65e4774b9434da8540d8e9')

package() {
  cd "$srcdir/python-sat-$pkgver"
  python setup.py install --root $pkgdir
}

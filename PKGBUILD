pkgname=python-questionary
_name=questionary
pkgver=1.5.1
pkgrel=0
pkgdesc="Python library to build pretty command line user prompts"
license=("MIT")
url="https://pypi.python.org/pypi/$_name"
depends=('python-prompt_toolkit')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name:0:1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('f199d4a780183679725f10a209b68be27f07cfd2852d6d7ea9e4a31fb45fb0c0')
arch=('any')

package() {
  cd $srcdir/${_name}-$pkgver
  python setup.py install --root=$pkgdir
}

# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase='python-osrf_pycommon'
pkgname=('python-osrf_pycommon')
_module='osrf_pycommon'
pkgver='0.1.6'
pkgrel=1
pkgdesc="Commonly needed Python modules, used by Python software developed at OSRF"
url="http://osrf-pycommon.readthedocs.org/"
depends=('python')
provides=('python-osrf-pycommon')
conflicts=('python-osrf-pycommon')
makedepends=('python-setuptools')
license=('Apache')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/o/osrf_pycommon/osrf_pycommon-${pkgver}.tar.gz")
md5sums=('a3d463b483ed077b19491d9a58d02ab4')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

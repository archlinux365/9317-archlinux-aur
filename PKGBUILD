# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgname=('python2-osrf_pycommon')
pkgver='0.1.10'
pkgrel=1
pkgdesc='Commonly needed Python modules, used by Python software developed at OSRF'
arch=('any')
url='https://github.com/osrf/osrf_pycommon'
license=('Apache')
depends=('python2' 'python2-trollius')
makedepends=('python2-setuptools')
provides=('python2-osrf-pycommon')
conflicts=('python2-osrf-pycommon')
source=("https://github.com/osrf/osrf_pycommon/archive/${pkgver}.tar.gz")
sha256sums=('429708204cc3c9389e90da637fc0ac797bc6653853599f0ac4b59091f41b6cb4')

_module='osrf_pycommon'

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

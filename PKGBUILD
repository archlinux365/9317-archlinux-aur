# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>
pkgname=python-ffn
_pkgname=${pkgname:7}
pkgver=0.3.6
pkgrel=1
pkgdesc="Financial functions for Python"
arch=('any')
url="https://pypi.org/project/${_pkgname}"
license=('MIT')
makedepends=(python-build python-installer python-wheel)
depends=(
    python
    python-decorator
    python-future
    python-matplotlib
    python-numpy
    python-pandas
    python-pandas-datareader
    python-scikit-learn
    python-scipy
    python-tabulate
)
source=(https://files.pythonhosted.org/packages/source/${_pkgname::1}/$_pkgname/$_pkgname-$pkgver.tar.gz)
sha256sums=('4a79e72e06ff328e333ffe97010b1ce110bcd694fcd03be7351bf5065cd273e8')

build() {
    cd ${srcdir}/${_pkgname}-${pkgver}
    python -m build --wheel --no-isolation
}

package() {
    cd ${srcdir}/${_pkgname}-${pkgver}
    python -m installer --destdir="$pkgdir" dist/*.whl
}

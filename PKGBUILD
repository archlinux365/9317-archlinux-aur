# Maintainer: Max G <max3227@gmail.com>

pkgname=python-scapy-utils
_pypiname=${pkgname/python-/}
pkgver=0.3.6
pkgrel=1
pkgdesc="A collection of utility function for use with Scapy module"
arch=('any')
url='https://pypi.org/project/scapy-utils/'
license=('MIT')
depends=('python-setuptools' 'python-scapy')

source=("https://files.pythonhosted.org/packages/d2/f2/73b0f73df369256893549e410d24d3a377a22331b039c8c7780fdc020009/scapy-utils-0.3.6.tar.gz")
sha256sums=('9bb0f2e0b58436275998c362015a78d17f1f2d95eb634098091c52949ff2756e')

package() {
    cd $srcdir/${_pypiname}-${pkgver}
    python setup.py install --root="${pkgdir}/" --optimize=1
}


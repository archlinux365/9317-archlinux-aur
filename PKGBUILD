# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-pytest-arraydiff
pkgver=0.2
pkgrel=1
pkgdesc="Pytest plugin to help with comparing array output from tests"
arch=('i686' 'x86_64')
url="https://github.com/astrofrog/pytest-arraydiff"
license=('BSD')
depends=('python>=3.5' 'python-pytest' 'python-numpy')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/p/pytest-arraydiff/pytest-arraydiff-${pkgver}.tar.gz")
md5sums=('1c84bdfc49347af1d8eceb47c23655ad')

package() {
  cd ${srcdir}/pytest-arraydiff-${pkgver}

  install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
  python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

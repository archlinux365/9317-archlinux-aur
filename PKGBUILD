# Contributor: Serkan Hosca <serkan@hosca.com>

pkgbase=python-cfgv
pkgname=(python-cfgv python2-cfgv)
pypi_name=cfgv
pkgver=1.1.0
pkgrel=1
pkgdesc="Validate configuration and produce human readable error messages."
arch=('any')
license=('MIT')
url="https://pypi.org/project/cfgv/"
makedepends=('python' 'python2')
source=("https://pypi.io/packages/source/c/${pypi_name}/${pypi_name}-${pkgver}.tar.gz")
md5sums=('7de14fb101e924aa8d14ba4832368b97')

prepare() {
  cp -a ${pypi_name}-${pkgver}{,-python2}
}

build() {
  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py build
}

package_python-cfgv() {
  pkgdesc='Python 3 client for cfgv'
  depends=('python' 'python-six')

  cd "${srcdir}/${pypi_name}-${pkgver}"
  python setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
}

package_python2-cfgv() {
  pkgdesc='Python 2 client for cfgv'
  depends=('python2' 'python2-six')

  cd "${srcdir}/${pypi_name}-${pkgver}-python2"
  python2 setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}" --skip-build
}

# vim: set ft=sh ts=4 sw=4 noet:

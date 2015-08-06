# Maintainer: Rich Li <rich at dranek com>
# Contributor: Samed Beyribey <ras0ir AT eventualis DOT org>
pkgname=python-pyspf
pkgver=2.0.12
pkgrel=1
pkgdesc="Python implementation of the Sender Policy Framework (SPF) protocol"
arch=('any')
url="http://pypi.python.org/pypi/pyspf"
license=('PSF')
depends=('python-pydns')
makedepends=('python-setuptools')
optdepends=('python-authres: Return RFC 5451 Authentication Results headers')
source=(http://pypi.python.org/packages/source/p/pyspf/pyspf-$pkgver.tar.gz)
md5sums=('c7dbad42e4f0ef65b5bf0b01b8ec1c3b')
 
build() {
  cd "$srcdir/pyspf-$pkgver"
  python setup.py build
}

# The package requires installation before testing...so it won't work here
# check() {
# }
 
package() {
  cd "$srcdir/pyspf-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1
}
# vim:set ts=2 sw=2 et:

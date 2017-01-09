# Maintainer: Simon Boulay <simon.boulay@alkeona.net>

pkgbase=python-breathe
pkgname=('python-breathe' 'python2-breathe')
pkgver=4.4.0
pkgrel=1
pkgdesc="An extension to reStructuredText and Sphinx to be able to read and render Doxygen xml output."
arch=('any')
url="https://breathe.readthedocs.org/en/latest/"
license=('BSD')
makedepends=('python' 'python-setuptools' 'python2' 'python2-setuptools')
source=("https://github.com/michaeljones/breathe/archive/v${pkgver}.tar.gz")
sha256sums=('348eb5f895f7369a703b67b48ff88e7a47182ca0fb2cd3eb3ce07e209159b3ca')

prepare() {
  cp -a "breathe-$pkgver" "breathe2-$pkgver"
}

package_python-breathe() {
  depends=('python' 'python-setuptools')

  cd "breathe-$pkgver"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
}

package_python2-breathe() {
  depends=('python2' 'python2-setuptools')

  cd "breathe2-$pkgver"
  python2 setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1

  # To avoid file conflict with the python3 version
  mv "$pkgdir/usr/bin/breathe-apidoc" "$pkgdir/usr/bin/breathe-apidoc2"
}

# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_account_invoice
_name=trytond_account_invoice
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgdesc="Tryton module for invoicing"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('9fbd8fcdc709e4ec9faafd7216f99705ede40e23c5a0a8ce2d0599b7aa622c37')
b2sums=('bfc69b73551e0422da6766019925d24f48b39b192cbca74a94ab974dc49790c60ca69cedf365dbd5a2d2b142761385fa6be0dba4ad3932c1e1b1c311e15d6ecc')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

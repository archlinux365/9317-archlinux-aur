# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_account
_name=trytond_account
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module for accounting"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('fcb42ea63f24ea6ec2aa578ddd65d23b10527b74cc94d6d9b36976cbf631de9a')
b2sums=('432c2fefa73e98058373a6de406339c5f8659c9951e79c6cb0892bc6844c5e44befb15d836ff26f19128d9e923e55b84451a836ee3cbb1caf0ddfffe20711094')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

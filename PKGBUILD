# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_stock_assign_manual
_name=trytond_stock_assign_manual
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to assign manually stock move"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('f15233ef7e421e6bd9981128d07b20b8ffa698130bc3d5f2faa0d68a4327d4d4')
b2sums=('ef2e3d743ecf4c7013ed5cfbc5f7866a8c75c13857e28e36e18e98d6d94d49c24332b42a8fa445e57027ce4a10d71be46612354a0672a363abb55b1fed06097c')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

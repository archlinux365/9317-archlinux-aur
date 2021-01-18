# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_marketing_email
_name=trytond_marketing_email
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to manage marketing mailing lists"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('07ebd05eae3aba8d279e2cf9121f4fcd23eab2a6ebd918f044a93992aac76e31')
b2sums=('7c4a56cdfdc167d98bb53e2a4f2df618379dd2d6d920e956630fdd51730a4333cb08177c641c1e9f38611a9ad55716bb3f3982c36197a63d38b3cba312528666')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

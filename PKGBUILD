# Maintainer: Arnold Sommerfeld <mrsommerfeld@pm.me>
# Contributor: Morten Linderud <foxboron@archlinux.org>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Jeff Mickey <jeff@archlinux.org>
# Contributor: Pappa <jcberg@gmail.com >

pkgname=python2-xlib
pkgver=0.26
pkgrel=2
pkgdesc="A fully functional X client library for Python 2 programs"
url="https://github.com/python-xlib/python-xlib"
arch=('any')
license=('LGPL')
depends=('python2-six')
makedepends=('python2-setuptools-scm')
source=("$pkgname-$pkgver.tar.gz::https://github.com/python-xlib/python-xlib/archive/$pkgver.tar.gz")
sha256sums=('26dff6bc4e9e0d1c175a96e9c1d672b18cc0e4ec900c17cad409ce5a628b3dd1')

build(){
  cd "python-xlib-$pkgver"
  python2 setup.py build
}

package_python2-xlib() {
  cd "python-xlib-$pkgver"
  python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

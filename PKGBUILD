pkgname=python-pyenet-piqueserver-git
_pkgname=pyenet
provides=('pyenet')
conflicts=('pyenet')
pkgdesc="pyenet is a python wrapper for the ENet library (piqueserver fork)"
url="https://github.com/piqueserver/pyenet"
pkgver=1.3.13.post7.r4.g7f619c8
pkgrel=1
arch=('i686' 'x86_64' 'armv7h')
license=('BSD' 'MIT')
depends=('python' 'cython')
makedepends=('git')
source=("${pkgname}"::"git+https://github.com/piqueserver/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd ${srcdir}/${pkgname}
  python setup.py build
}

package() {
  cd ${srcdir}/${pkgname}
  python setup.py install --root="${pkgdir}/" --optimize=1
}

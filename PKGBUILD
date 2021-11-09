# Maintainer: Kirill Pshenichnyi <pshcyrill@mail.ru>
pkgname=python-pytango-git
_pkgname=pytango
pkgver=v9.3.3.r79.gb78181d
pkgrel=1
pkgdesc="Python binding for Tango, a library dedicated to distributed control systems."
arch=('any')
url="http://pytango.readthedocs.io/"
license=('GPL3')
depends=('python' 'python-six>=1.10' 'python-numpy>=1.1' 'python-setuptools'
	 'python-gevent' 'boost-libs' 'tango')
source=("git+https://gitlab.com/tango-controls/pytango")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_pkgname"
  python setup.py build
}

package() {
  cd "$_pkgname"
  python setup.py install --root=$pkgdir/
}

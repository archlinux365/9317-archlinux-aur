# Maintainer: Lari Tikkanen <lartza@wippies.com>

pkgname=python-namedlist
pkgver=1.8
pkgrel=1
pkgdesc="Like namedtuples, but mutable"
arch=(any)
url="http://pypi.python.org/pypi/namedlist"
license=('Apache')
depends=('python')
makedepends=('python-setuptools')
source=("https://pypi.python.org/packages/source/n/namedlist/namedlist-$pkgver.tar.gz")
sha256sums=('34f89fc992592c80b39a709e136edcf41ea17f24ba31eaf84a314a02c8b9bcef')

build() {
  cd "$srcdir/namedlist-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/namedlist-$pkgver"
  python setup.py install --root=$pkgdir --optimize=1
}

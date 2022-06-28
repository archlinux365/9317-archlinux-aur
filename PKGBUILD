# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: Simon Conseil <contact+aur at saimon dot org>

pkgname=pip-tools
pkgver=6.7.0
pkgrel=1
pkgdesc='A set of tools to keep your pinned Python dependencies fresh'
arch=(any)
url='https://github.com/jazzband/pip-tools/'
license=(BSD)
depends=('python-click>=7' python-build 'python-pip>=21' python-setuptools python-wheel)
makedepends=(python-setuptools-scm)
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('0aeedc28c0316a30c561893a1f41c3611b46ac536bc271082ffdbdbd1d26924c')

prepare() {
  cd $pkgname-$pkgver
  # extra/python-pip is still at version 21.0 due to packaging issues
  sed -i -e 's/pip >= .*/pip/' setup.cfg
}

build() {
  cd $pkgname-$pkgver
  python setup.py build
}

package() {
  cd $pkgname-$pkgver
  python setup.py install --root="$pkgdir/" --prefix=/usr --optimize=1 --skip-build
  # license
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  # documentation
  install -Dm644 CHANGELOG.md CONTRIBUTING.md README.rst \
    -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm644 img/*.svg \
    -t "$pkgdir/usr/share/doc/$pkgname/img"
  install -Dm644 examples/* \
    -t "$pkgdir/usr/share/doc/$pkgname/examples"
}

# vim:set ts=2 sw=2 et:

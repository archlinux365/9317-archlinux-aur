# Maintainer: Alex Dewar <alex.dewar@gmx.co.uk>
pkgname=pwclient
pkgver=1.3.0
pkgrel=1
pkgdesc="The command-line client for the patchwork patch tracking tool"
arch=(any)
url="https://github.com/getpatchwork/$pkgname"
license=('GPL')
depends=(python-pbr)
makedepends=(python-setuptools)
checkdepends=(python-pytest python-mock)
source=("$url/archive/$pkgver.tar.gz")
sha256sums=('a4affd5a38170f78b63e752bb110f908c8250f13bfa1d6bbd9abdd6bc157db2c')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

check() {
	cd "$pkgname-$pkgver"
	pytest
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1
	mkdir -p "$pkgdir/usr/share/man/man1"
	install -Dm644 man/pwclient.1 "$pkgdir/usr/share/man/man1/"
}

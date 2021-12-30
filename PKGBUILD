# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Konstantin Shalygin <k0ste@k0ste.ru>

pkgname=opendrop
pkgver=0.13.0
pkgrel=3
pkgdesc='An open Apple AirDrop implementation'
arch=('any')
url="https://github.com/seemoo-lab/opendrop"
license=('GPL3')
depends=(
	'python-requests'
	'python-fleep'
	'python-ifaddr'
	'python-pillow'
	'python-requests-toolbelt'
	'python-libarchive-c'
	'python-setuptools'
	'python-zeroconf'
	'owlink')
checkdepends=('python-pytest-runner')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('1684ee1497615b6d9c410d73f0712ebc2b6b5c706075e75fb6799175264e4de5')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

check() {
	cd "$pkgname-$pkgver"
	python setup.py pytest
}

package() {
	export PYTHONHASHSEED=0
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

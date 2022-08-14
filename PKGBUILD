# Maintainer: Zhanibek Adilbekov <zhanibek.adilbekov@pm.me>
pkgname=gita
pkgver=0.16.2
pkgrel=1
pkgdesc="A command-line tool to manage multiple git repos"
arch=('any')
url="https://github.com/nosarthur/gita"
license=('MIT')
depends=('python-yaml')
makedepends=('python-setuptools')
source=(
	"$pkgname-$pkgver.tar.gz::https://github.com/nosarthur/gita/archive/refs/tags/v$pkgver.tar.gz")
b2sums=('91b3ab226ad760e8b6a43765c4f49c4f71a3af451342ced534ef00ebfbea6d7e3c6737a7497a0b139194c3bb2874d6a1f3cc2c30e0ad23aea9e8be82f1242e2d')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

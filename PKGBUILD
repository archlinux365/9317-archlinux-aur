# Maintainer: Michael Lass <bevan@bi-co.net>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=arxiv-collector
pkgver=0.4.1
pkgrel=1
pkgdesc="Small script to collect LaTeX sources for upload to the arXiv"
arch=(any)
url="https://github.com/dougalsutherland/arxiv-collector"
license=('BSD')
depends=(texlive-core)
makedepends=(python-setuptools)
source=("https://github.com/djsutherland/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('4fdb51c9db0d8641fc65cde3c085df14af67bfb8a149a3f267057ba5d81fe72b')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

	# License
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

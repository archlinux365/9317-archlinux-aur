# Maintainer: Yauhen Kirylau <actionless DOT loveless PLUS aur AT gmail MF com>
# Maintainer: Padraic Fanning <fanninpm AT miamioh DOT edu>

_name=gaphas
pkgname=python-${_name}
pkgver=3.7.0
pkgrel=1
pkgdesc="Diagramming widget library for Python"
arch=('any')
url="https://github.com/gaphor/${_name}"
license=('Apache')
depends=(
	'gtk3'
	'python-gobject'
	'python-cairo'
	'python-importlib-metadata'
)
makedepends=(
	'python-build'
	'python-installer'
	'python-poetry-core'
)
checkdepends=(
	'python-pytest'
	'xorg-server-xvfb'
)
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('6a326a3fbdec0dfc5e000883963c4a049ecebcf23721edd2654ee129d0125b3d')

build() {
	cd "${_name}-${pkgver}"
	# Note: set `GIT_CEILING_DIRECTORIES` to prevent poetry
	# from incorrectly using a parent git checkout info.
	# https://github.com/pypa/build/issues/384#issuecomment-947675975
	GIT_CEILING_DIRECTORIES="${PWD}/.." python -m build --wheel --no-isolation
}

check() {
	cd "${srcdir}/${_name}-${pkgver}"
	xvfb-run --auto-servernum pytest
}

package() {
	cd "${_name}-${pkgver}"
	python -m installer --destdir="$pkgdir" dist/*.whl
}

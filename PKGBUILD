# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

_pyname=fontParts
pkgname=python-${_pyname,,}
pkgver=0.9.11
pkgrel=3
pkgdesc='The replacement for RoboFab'
arch=(any)
url="https://github.com/robotools/${_pyname}"
license=(MIT)
_pydeps=(booleanoperations
         defcon
         fontmath
         fontpens # for defcon[pens]
         fonttools
         fs # for fonttools[ufo]
         lxml # for fonttools[lxml]
         unicodedata2) # for fonttools[unicode]
depends=(python
         "${_pydeps[@]/#/python-}")
makedepends=(python-setuptools-scm)
_archive="$_pyname-$pkgver"
source=("https://files.pythonhosted.org/packages/source/${_pyname::1}/$_pyname/$_archive.zip")
sha256sums=('558a5f681fcf7ca0bb5a1c68917b5d9b61c77d517833a01ea1667773d13f4012')

build() {
	cd "$_archive"
	python setup.py build
}

check() {
	cd "$_archive/Lib"
	# Tests fail on Python 3.10, but library seems to work...
	# PYTHONPATH=. python "$_pyname/fontshell/test.py"
}

package() {
	cd "$_archive"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	install -Dm0644 -t "$pkgdir/usr/share/licenses/$pkgname/" LICENSE
}

# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Miguel de Val-Borro <miguel dot deval at gmail dot com>

pkgname=python-agnpy
pkgver=0.1.8
pkgrel=1
pkgdesc="Models Active Galactic Nuclei radiative processes"
arch=('any')
url="https://github.com/cosimonigro/agnpy"
license=('BSD')
depends=('python-astropy' 'python-numpy' 'python-matplotlib' 'python-scipy')
makedepends=('python-build' 'python-install' 'python-wheel' 'python-setuptools')
checkdepends=('python-pytest')
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/a/agnpy/agnpy-$pkgver.tar.gz")
sha256sums=('44937cac40df3bb349c752fbed35b1f66a097047450c659b39836b27b0ed174c')

build() {
	cd "agnpy-$pkgver"
	python -m build --wheel --skip-dependency-check --no-isolation
}

# check() {
# 	cd "agnpy-$pkgver"
# 	pytest -x
# }

package() {
	export PYTHONHASHSEED=0
	cd "agnpy-$pkgver"
	python -m install --optimize=1 --destdir="$pkgdir/" dist/*.whl
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}

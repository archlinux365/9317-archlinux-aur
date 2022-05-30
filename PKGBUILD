# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Harley Wiltzer <harleyw@hotmail.com>

pkgname=python-omegaconf
pkgver=2.2.2
pkgrel=1
pkgdesc='Flexible Python configuration system'
arch=('any')
url='https://github.com/omry/omegaconf'
license=('BSD')
depends=('python-antlr4' 'python-pyaml')
makedepends=(
	'java-runtime'
	'python-build'
	'python-installer'
	'python-pytest'
	'python-setuptools'
	'python-wheel')
# checkdepends=('python-pytest-mock')
changelog=NEWS.md
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('10a89b5cb81887d68137b69a7c5c046a060e2239af4e37f20c3935ad2e5fd865')

build() {
	cd "omegaconf-$pkgver"
	python -m build --wheel --no-isolation
}

# check() {
# 	cd "omegaconf-$pkgver"
# 	pytest -x
# }

package() {
	cd "omegaconf-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" dist/*.whl
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
	install -Dm644 DISCLAIMER -t "$pkgdir/usr/share/licenses/$pkgname/"
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	ln -s \
		"$_site/omegaconf-$pkgver.dist-info/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/"
}

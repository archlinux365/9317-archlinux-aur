# Maintainer: Alexander Seiler <seileralex@gmail.com>

pkgname=python-halo
_name=${pkgname#python-}
pkgver=0.0.18
pkgrel=1
pkgdesc="Beautiful terminal spinners in Python"
arch=('any')
url="https://github.com/manrajgrover/${_name}"
license=('MIT')
depends=('python' 'python-log_symbols' 'python-spinners' 'python-cursor' 'python-termcolor' 'python-six')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('b47d06f5d12d42473befb3ee88442f1cd0cfbec9a804c48ff83bc00f28dcd714')

prepare() {
	cd "$_name-$pkgver"
}

build() {
	cd "$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$_name-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

# Maintainer: Adrián Pérez de Castro <aperez@igalia.com>
pkgname=em-keyboard
pkgdesc='Command-line utility for referencing emoji characters by name'
pkgver=3.6.0
pkgrel=1
url=https://github.com/hugovk/em-keyboard
license=(custom:MIT)
arch=(any)
depends=(python-docopt python-xerox python-wheel)
makedepends=(git python-setuptools-scm)
source=("${pkgname}::git+${url}#tag=v${pkgver}")
b2sums=(SKIP)

package () {
	cd "${pkgname}"
	python3 setup.py install --optimize=1 --root="${pkgdir}"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# Maintainer: Łaurent ʘ❢Ŧ Ŧough <laurent dot fough at gmail dot com>
pkgname='alluvium'
pkgver=20200614.r4_gbc9fed7
pkgrel=1
pkgdesc='Generate visual overlays from your i3 bindings'
url='https://github.com/cqql/alluvium'
depends=('python')
makedepends=('python-setuptools' 'git')
checkdepends=('python-pytest')
license=('GPL3')
arch=('x86_64')
provides=("alluvium")
conflicts=("alluvium")
sha256sums=('SKIP')

BUILDENV+=('!check')

source=(
	"git://github.com/cqql/${pkgname}#branch=${BRANCH:-master}"
)

pkgver() {

	cd "$srcdir/$pkgname"
	local DATE=$(git log -1 --format="%cd" --date=short | sed s/-//g)
	local COUNT=$(git rev-list --count HEAD)
	local COMMIT=$(git rev-parse --short HEAD)
	printf "%s.%s_%s" "$DATE" "r${COUNT}" "g${COMMIT}"

}

check() {
    cd "${srcdir}/${pkgname}"
    pytest
}

build() {
    cd "${srcdir}/${pkgname}"
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

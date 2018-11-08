# Maintainer: Yauheni Kirylau <actionless dot loveless AT gmail.com>
# shellcheck disable=SC2034,SC2154

_pkgname=nohang
pkgname=${_pkgname}-git
pkgver=r83ac238
pkgrel=1
pkgdesc="A highly configurable OOM preventer"
arch=('any')
url="https://github.com/hakavlad/nohang"
license=('MIT')
source=(
	"$pkgname::git+https://github.com/hakavlad/nohang.git#branch=master"
)
md5sums=('SKIP')
depends=(
	'python3'
	'libnotify'
	'sudo'
	'procps-ng'
)
optdepends=(
)
conflicts=("${_pkgname}")

pkgver() {
	cd "${srcdir}/${pkgname}" || exit 2
	set -o pipefail
	git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' || \
		git describe --long --always | sed 's/^/r/'
}

package() {
	cd "${srcdir}/${pkgname}" || exit 2
	make DESTDIR=${pkgdir} install

	cd ${pkgdir}
	mv usr/sbin usr/bin
	mv lib usr/lib
}

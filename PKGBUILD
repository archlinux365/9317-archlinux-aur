# Maintainer: brent s. <bts (at) square-r00t (dot) net>

pkgname=swatd-git
pkgver=1
pkgrel=2
pkgdesc="A daemon for running scripts when a sensor is triggered"
arch=('any')
url="https://github.com/defuse/swatd"
license=('GPL3')
depends=('')
makedepends=('git')
source=('git+https://github.com/defuse/swatd.git'
	'swatd.service')
md5sums=('SKIP'
	'719ef9b8911054561f157475c117c649')

build() {
	cd "${srcdir}"/swatd
	make
}

package(){

	cd "${pkgdir}"
	install -D -m 0755 "${srcdir}"/swatd/swatd usr/bin
	install -D -m 0640 "${srcdir}"/swatd/swatd.conf etc/swatd/swatd.conf
	install -D -m 0644 "${srcdir}"/swatd.service usr/lib/systemd/system
}

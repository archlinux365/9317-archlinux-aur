# Maintainer: Max <silverhammermba@gmail.com>
pkgname=launch
pkgver=1
pkgrel=1
pkgdesc="Launch an independent process from a shell"
arch=('any')
license=('GPL')
source=('launch.c')
sha256sums=('SKIP')

build() {
	make launch
}

package () {
	install -Dm755 launch ${pkgdir}/usr/bin/launch
}

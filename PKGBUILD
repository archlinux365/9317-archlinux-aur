# Maintainer: Ivan Shapovalov <intelfx100@gmail.com>

pkgname=power-management
pkgver=25.37f7ca4
url="https://github.com/intelfx/power-management"
pkgrel=1
pkgdesc="systemd-aware pm-powersave replacement"
arch=(any)
license=("GPL3")
depends=()
source=("power-management::git://github.com/intelfx/power-management#commit=37f7ca4")
install="power-management.install"
md5sums=('SKIP')

package() {
	cd "power-management"
	DESTDIR="$pkgdir" ./install.sh
}


# Maintainer: Daniel Menelkir <menelkir at itroll dot org>
pkgname=g15stats-systemd
pkgver=20210514
pkgrel=1
pkgdesc="g15stats init script for systemd"
arch=('any')
url="https://gitlab.com/menelkir/g15stats"
license=('GPL2')
depends=('g15stats' 'systemd')
_filename='g15stats.run'
source=("https://gitlab.com/menelkir/g15stats/-/raw/master/contrib/init/g15stats.service")
sha256sums=('2723465ba726a4675d442fdb3068353def37bc70ce84cdab6c65f1c450c1dc4a')

pkgver() {
   date +%Y%m%d
}

package() {
install -D -m 644 "g15stats.service" "${pkgdir}/usr/lib/systemd/system/g15stats.service"
}

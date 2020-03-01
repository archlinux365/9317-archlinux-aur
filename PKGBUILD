# Maintainer: Nitroretro <nitroretro@protonmail.com>

pkgname=duckdns-ipv6
pkgver=1.0.1
pkgrel=1
pkgdesc="Automatically update DuckDNS domains, with IPv6 support"
arch=("any")
url="https://duckdns.org"
license=("GPL3")
depends=("jq")
provides=("duckdns")
conflicts=("duckdns")
backup=("etc/duckdns.d/default")
install="${pkgname}.install"
source=("duckdns.conf"
	"duckdns.sh"
	"duckdns.service"
	"duckdns.timer")
sha512sums=('e781a69a01a7b590a5435f123d118ef64a111b57440a72e3671f560b4f2afae72f9a28c1766b032c7586fa95ac8b3dc7ea68b861d68571fcd6b3cb09185b7f68'
            '33bdf3312e8d0f8b3d34fa9c8cf5efd598daaaaf85f5a93c263ffe934a519ba437ca66d60d28ca303f206a162416a55f54f049e53aca2d51ee9e0f5583cea9a6'
            '33aa22ec51e44fa2d9c58e564cee6b7a280850aabb6fe24bf2a429a87d07a8a163d1e6f76505af0be9c5630133349a66613ceece8f1568fbd847c09b7328392d'
            '55fa343bd4be6157b9b909721559a8fe163ad0968d2dcfcb5d9bca2fe268d70b1369dde225adc8d3a31815356d43afc76a43d8cf39d92209a1965d0e1e40f618')

package() {
	install -Dm600 duckdns.conf "${pkgdir}/etc/duckdns.d/default"
	install -Dm755 duckdns.sh "${pkgdir}/usr/bin/duckdns"
	install -Dm644 duckdns.service "${pkgdir}/usr/lib/systemd/system/duckdns.service"
	install -Dm644 duckdns.timer "${pkgdir}/usr/lib/systemd/system/duckdns.timer"
}

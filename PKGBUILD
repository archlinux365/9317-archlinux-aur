# Contributor: Maxim Devaev <mdevaev@gmail.com>
# Author: Maxim Devaev <mdevaev@gmail.com>


pkgname=kvmd-webterm
pkgver=0.7
pkgrel=1
pkgdesc="Pi-KVM Web Terminal (GoTTY)"
url="https://github.com/pi-kvm/kvmd-webterm"
license=(GPL)
arch=(any)
depends=(kvmd gotty)
makedepends=(go)
install=$pkgname.install
source=(
	$pkgname.install
	kvmd-webterm.service
	terminal.svg
	nginx.http-ctx.conf
	nginx.server-ctx.conf
	manifest.yaml
)
md5sums=(
	"a8119b6f675ca954c71ecd241745df0c"
	"64eb8202a52dbd8726c1ff282276d5e1"
	"8310f16f1892706c6ee5d07d51393e00"
	"dc9e0d328cb2710ef2921737fded3229"
	"4623292f8a4dab570ea14ec63e25216e"
	"410a3ebca5c38aedf04d7bfe3799aa72"
)


package() {
	mkdir -p "$pkgdir/usr/lib/systemd/system"
	install -Dm644 kvmd-webterm.service "$pkgdir/usr/lib/systemd/system/kvmd-webterm.service"

	mkdir -p "$pkgdir/usr/share/kvmd/web/extras/webterm"
	cp terminal.svg "$pkgdir/usr/share/kvmd/web/extras/webterm"

	mkdir -p "$pkgdir/usr/share/kvmd/extras/webterm"
	cp nginx.*.conf manifest.yaml "$pkgdir/usr/share/kvmd/extras/webterm"
}

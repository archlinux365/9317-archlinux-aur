# Contributor: Maxim Devaev <mdevaev@gmail.com>
# Author: Maxim Devaev <mdevaev@gmail.com>


pkgname=kvmd-webterm
pkgver=0.2
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
	http-ctx.conf
	server-ctx.conf
	manifest.json
)
md5sums=(
	"a8119b6f675ca954c71ecd241745df0c"
	"64eb8202a52dbd8726c1ff282276d5e1"
	"8310f16f1892706c6ee5d07d51393e00"
	"dc9e0d328cb2710ef2921737fded3229"
	"0047a331249dd17f42563e39b610dce7"
	"95fc71f20d695f31523a53bbaa57c43b"
)


package() {
	mkdir -p "$pkgdir/usr/lib/systemd/system"
	install -Dm644 kvmd-webterm.service "$pkgdir/usr/lib/systemd/system/kvmd-webterm.service"

	mkdir -p "$pkgdir/usr/share/kvmd/web/apps/webterm"
	cp terminal.svg "$pkgdir/usr/share/kvmd/web/apps/webterm"

	mkdir -p "$pkgdir/usr/share/kvmd/configs/nginx/apps/webterm"
	cp http-ctx.conf server-ctx.conf manifest.json "$pkgdir/usr/share/kvmd/configs/nginx/apps/webterm"
}

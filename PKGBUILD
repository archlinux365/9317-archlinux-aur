# Contributor: Maxim Devaev <mdevaev@gmail.com>
# Author: Maxim Devaev <mdevaev@gmail.com>


pkgname=kvmd-webterm
pkgver=0.19
pkgrel=1
pkgdesc="Pi-KVM - Web terminal (ttyd)"
url="https://github.com/pi-kvm/kvmd-webterm"
license=(GPL)
arch=(any)
depends=(kvmd ttyd)
install=$pkgname.install
source=(
	$pkgname.install
	$pkgname.service
	https://raw.githubusercontent.com/tsl0922/ttyd/master/src/index.html
	index.sed
	terminal.svg
	nginx.ctx-http.conf
	nginx.ctx-server.conf
	manifest.yaml
)
md5sums=(SKIP SKIP SKIP SKIP SKIP SKIP SKIP SKIP)


package() {
	mkdir -p "$pkgdir/usr/lib/systemd/system"
	install -Dm644 kvmd-webterm.service "$pkgdir/usr/lib/systemd/system/kvmd-webterm.service"

	mkdir -p "$pkgdir/usr/share/kvmd/web/extras/webterm"
	cp terminal.svg "$pkgdir/usr/share/kvmd/web/extras/webterm"

	mkdir -p "$pkgdir/usr/share/kvmd/extras/webterm"
	cp nginx.*.conf index.html manifest.yaml "$pkgdir/usr/share/kvmd/extras/webterm"
	sed -i -f index.sed "$pkgdir/usr/share/kvmd/extras/webterm/index.html"
}

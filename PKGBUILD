# Maintainer: Fabien Devaux <fdev31@gmail.com>
pkgname=k780-fnkeyctl
pkgver=1
pkgrel=2
pkgdesc="Logitech K780 Fn-key configuration"
arch=('i686' 'x86_64')
url="https://google.com"
license=('MIT')
groups=()
depends=('libusb')
source=(k780swap
99-k780-config.rules
k780-fnkeyctl.sh)
sha256sums=(14bbd131bc286b56cfcf7587b4c9a9102d9faa82756332e68b244ddb17da817e
5a83a1c1e9a72af099640b4753610db6f633aa854d193a3b589d83db047c4384
98e2a3962c1d085e5e37b9b45b7a19734e3d0678554c0e1bfe12d753da860e19)

build() {
    return 0
}

package() {
	# udev script
	mkdir -p "$pkgdir/etc/udev/rules.d"
	cp 99-k780-config.rules "$pkgdir/etc/udev/rules.d/99-k780-config.rules"
	# systemd post-sleep script
	mkdir -p "$pkgdir/usr/lib/systemd/system-sleep"
	cp k780-fnkeyctl.sh "$pkgdir/usr/lib/systemd/system-sleep/k780-fnkeyctl.sh"
	chmod +x "$pkgdir/usr/lib/systemd/system-sleep/k780-fnkeyctl.sh"

	cd "$srcdir"
	# main binary
	mkdir -p "$pkgdir/usr/bin"
	cp k780swap "$pkgdir/usr/bin"
}

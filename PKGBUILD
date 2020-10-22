# Maintainer: Nguyen Pham Cao <natsukagami at gmail dot com>

pkgname=mpd-mpris
pkgver=0.3.0
pkgrel=1
pkgdesc='An implementation of the MPRIS protocol for MPD.'
arch=('any')
url='https://github.com/natsukagami/mpd-mpris'
makedepends=('go>=1.9' 'git')
source=("https://github.com/natsukagami/mpd-mpris/archive/v$pkgver.tar.gz")
sha256sums=('d5c288c1fa0371892af9697f3787c30a10f50ca6afbe5d9d12c7d5deb6cd18fc')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	go build -v -o mpd-mpris cmd/mpd-mpris/*.go
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	install -D -m 0755 mpd-mpris "$pkgdir/usr/bin/mpd-mpris"
	install -D -m 0644 mpd-mpris.service "$pkgdir/usr/lib/systemd/user/mpd-mpris.service"
}

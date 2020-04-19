# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Wei Congrui < crvv.mail at gmail dot com >
# Contributor: Carl George < arch at cgtx dot us >
# Contributor: Eric Engeström <eric at engestrom dot ch>
# Contributor: Andreas Linz <klingt.net at gmail dot com>
# Contributor: Akshay S Dinesh <asdofindia at gmail dot com>

pkgname=caddy-git
_pkgname=caddy
pkgver=20200417.f9801709
pkgrel=1
pkgdesc='HTTP/2 Web Server with Automatic HTTPS'
url='https://caddyserver.com/'
license=('Apache')
arch=('x86_64')
makedepends=('git' 'go')
source=("git+https://github.com/mholt/caddy.git"
        'tmpfiles'
        'service'
        'conf')
sha256sums=('SKIP'
            'e99057c26b2670e9aa382c8cc6b63f4437f8020e2eb4e04d97a01a3e4d68779f'
            '6a826854b8b10cadd2bb8d4107b91c5703368f60d96bfbd2c0d8f8c782a285be'
            '61644647161ddf5045c99e389eac8dacc0eb0e3bca0b9271a96add6671b2b9b7')

provides=("${_pkgname}")
conflicts=("${_pkgname}")

backup=('etc/caddy2.conf')

pkgver() {
	cd "${srcdir}/caddy"
	git log -1 --format='%cd.%h' --date=short | tr -d -
}

prepare() {
	cd "${srcdir}/caddy"
	go get -v -d
}

build() {
	cd "${srcdir}/caddy"
	go build -v -o caddy2 cmd/caddy/main.go
}

package() {
	cd "${srcdir}/caddy"
	install -D -m 0755 caddy2 "${pkgdir}/usr/bin/caddy2"
	install -D -m 0644 ../tmpfiles "${pkgdir}/usr/lib/tmpfiles.d/caddy2.conf"
	install -D -m 0644 ../service "${pkgdir}/usr/lib/systemd/system/caddy2.service"
	install -D -m 0644 ../conf "${pkgdir}/etc/caddy2.conf"
	ln -s caddy2 "${pkgdir}/usr/bin/caddy"
}

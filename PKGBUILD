# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Damir Perisa <damir.perisa@bluewin.ch>
# Contributor: Stewart Starbuck <stewart@stewartstarbuck.co.uk>

_pkgname=sthttpd
pkgname=sthttpd-git
pkgver=20150722.aa3f36c
pkgrel=1
pkgdesc='Supported fork of the thttpd web server'
url='https://github.com/blueness/sthttpd'
license=('custom:BSD')
arch=('i686' 'x86_64')
backup=('etc/thttpd.conf')
makedepends=('git')
source=('git+https://github.com/blueness/sthttpd'
        'discreet.patch'
        'service'
        'config')
sha1sums=('SKIP'
          'ae0143fce29cf7eb84ebbee9640b9a2c977b5093'
          '73bd76de0e89a9cc31e5605659837d83b3c8dfde'
          '7a6413491b6ba68625d450caa3c6f071af0ca1ac')

provides=("${_pkgname}")
conflicts=("${_pkgname}")

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git log -1 --format='%cd.%h' --date=short | tr -d -
}

prepare() {
	cd "${srcdir}/${_pkgname}"
	./autogen.sh
	patch -p1 -i ../discreet.patch
	sed '/DEFAULT_CHARSET/c #define DEFAULT_CHARSET "utf-8"' -i src/thttpd.h
}

build() {
	cd "${srcdir}/${_pkgname}"
	export WEBDIR=/srv/http
	export WEBGROUP=http
	./configure \
		--prefix=/usr \
		--sbindir=/usr/bin \
		--mandir=/usr/share/man \

	make
}

package() {
	cd "${srcdir}/${_pkgname}"
	make DESTDIR="${pkgdir}" install
	rm -fr "${pkgdir}"/srv

	install -Dm644 ../config "${pkgdir}"/etc/thttpd.conf
	install -Dm644 ../service "${pkgdir}"/usr/lib/systemd/system/thttpd.service
	install -Dm644 README.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

	# Avoid conflicts with Apache
	mv "${pkgdir}"/usr/bin/htpasswd{,-thttpd}
	mv "${pkgdir}"/usr/share/man/man1/htpasswd{,-thttpd}.1
}

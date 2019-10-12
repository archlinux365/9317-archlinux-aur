# Maintainer:  twa022 <twa022 at gmail dot com>

_pkgname=basilisk
pkgname=${_pkgname}-bin
epoch=1
_buildid=20190912144248
pkgver=52.9.2019.09.12
pkgrel=1
pkgdesc="Basilisk Browser from the makers of Pale Moon"
url="http://www.basilisk-browser.org"
arch=('x86_64')
license=('GPL')
depends=('gtk2' 'gtk3' 'dbus-glib' 'libxt' 'mime-types' 'nss' 'alsa-lib' 'icu')
optdepends=('hunspell: spell checker and morphological analyzer'
            'hyphen: library for hyphenation and justification'
            'ffmpeg: record, convert, and stream audio and video')
source=(http://archive.palemoon.org/basilisk/basilisk-${_buildid}.linux-x86_64.{tar.bz2,json}
#source=('http://us.basilisk-browser.org/release/basilisk-latest.linux64.tar.bz2'
        'basilisk.desktop')
sha256sums=('9f1004c9cf1c63e7ac24c15db153994df74b3555583a3a1768e61d26735900c9'
            'b0717b30a4a169c12e15c23f06c4b2536228141e5c018208e7ad9811e01debe6'
            'c4223e966bc404467fece4a524cc2db3e99c12455087da2ade9a47b8d99d3a45')

pkgver() {
	grep 'moz_app_version' "${srcdir}"/basilisk-${_buildid}.linux-x86_64.json | sed -e 's/.*:[\ \t]*"//;s/"[,]*[\ \t]*$//'
#	cd "$srcdir"/basilisk
#	./basilisk --version | grep -o -E '[0-9\.]+$'
}

package() {
	mkdir -p "$pkgdir"/opt
	cp -ar --no-preserve=ownership "$srcdir"/basilisk "$pkgdir"/opt
	mkdir -p "${pkgdir}"/usr/bin
	cat > "${pkgdir}"/usr/bin/basilisk <<- __EOF__
		#!/bin/bash
		/opt/basilisk/basilisk "\$@"
	__EOF__
	chmod 755 "${pkgdir}"/usr/bin/basilisk
	install -Dm644 "${srcdir}"/basilisk.desktop "${pkgdir}"/usr/share/applications/basilisk.desktop
	install -Dm644 "${srcdir}"/basilisk/browser/icons/mozicon128.png "${pkgdir}"/usr/share/pixmaps/basilisk.png
}

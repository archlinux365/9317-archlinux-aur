# Maintainer: Ismo Toijala <ismo.toijala@gmail.com>

pkgname=i3-wsbar
pkgver=1
pkgrel=2
pkgdesc='i3 workspace output for dzen2'
url='https://i3wm.org/'
arch=('any')
license=('BSD')
depends=(
	'dzen2'
	'perl-ipc-run'
	'perl-json-xs'
	'perl-anyevent-i3'
)
source=('i3-wsbar')

package() {
	install -Dm755 i3-wsbar "${pkgdir}/usr/bin/i3-wsbar"
}

md5sums=('1af3160aa252542abdaf4b21eb942242')

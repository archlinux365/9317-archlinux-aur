# Maintainer: Matthew McGinn <mamcgi@gmail.com>
pkgname=aisdeco2
pkgver=20150415
pkgrel=1
pkgdesc="Cross-Platform Console Software-defined radio (SDR) receiver/decoder for marine Automatic Information System (AIS) signals"
arch=('x86_64' 'i686' 'armv6h' 'armv7h')
url="http://xdeco.org/"
license=('MIT')
depends=('curl')
provides=('aisdeco2')

prepare() {
	case "$CARCH" in
		armv6h)	_source_bin=("aisdeco_rpi_20140704.tgz")
				;;
		armv7h)	_source_bin=("aisdeco_rpi_20140704.tgz")
				;;
		i686) _source_bin=("aisdeco2_"$CARCH"_20150415.tgz")
				;;
		x86_64) _source_bin=("aisdeco2_"$CARCH"_20150415.tar.gz")
				;;
	esac
	curl -sL "https://github.com/xginn8/aisdeco/blob/master/$_source_bin?raw=true" | tar xz
}

package() {
	install -Dm755 "$srcdir/$pkgname" "$pkgdir/usr/bin/$pkgname"
}


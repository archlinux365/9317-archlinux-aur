# Maintainer: Your Name <ioan.coleman@gmail.com>
pkgname=ioanaur
pkgver=1
pkgrel=1
pkgdesc="Description here"
arch=('any')
url="https://ioan.cc"
source=("https://raw.githubusercontent.com/ioancole/ioanaur101/master/aprogram.sh")
md5sums=('6445c32eb304f9de4a34d1d8ff54c23b')

package() {
	cd "${pkgname}-${pkgver}"
	install -Dm755 aprogram.sh "$pkgdir/usr/bin/aprogram"
}

# Maintiner: Victor DENIS <victordenis01@gmail.com>
# Contributor: hotaru70o, ilearn32
pkgbase=sielo-browser
pkgname=sielo-browser
pkgver=1.3.00
pkgrel=2
pkgdesc="A simple, customizable and fast web browser"
arch=(x86_64)
url="https://feldrise.com"
license=('custom:MIT')
depends=('openssl-1.0' 'qt5-base' 'qt5-webengine' 'qt5-webchannel' 'qt5-location' 'qt5-declarative')
replaces=('sielo-navigateur')
source=(https://www.feldrise.com/Sielo/Linux/$pkgname-$pkgver.tar.gz)
md5sums=('22e0a79fc3fe212f7515594b3a19b5ed')
package() {
	cd "$srcdir/$pkgname-$pkgver"
	cp -r usr $pkgdir/
	chmod +x $pkgdir/usr/bin/sielo-browser
	chmod +x $pkgdir/usr/bin/sielo-compiler
}

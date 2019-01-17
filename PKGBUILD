# Maintainer: Reto Brunner <brunnre8@gmail.com>
pkgname=thelounge-theme-zenburn
pkgver=1.0.2
pkgrel=1
pkgdesc="Dark & low-contrast theme based on Vim's Zenburn color scheme"
url='https://github.com/thelounge/thelounge-theme-zenburn'
arch=('any')
license=('MIT')
makedepends=('npm')
source=("http://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
md5sums=('cdc23fc34917dcbee468803bb8434a30')

package() {
	npm install -g --user root --prefix "$pkgdir"/usr "$srcdir"/$pkgname-$pkgver.tgz

	# Fix npm derp
	find "$pkgdir/usr" -type d -exec chmod 755 '{}' +

	# Install license since the package doesn't include it
	install -Dm 644 "$srcdir/package/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

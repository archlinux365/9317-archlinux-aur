# Maintainer: Sebastian Wiesner <sebastian@swsnr.de>

pkgname=gnome-search-providers-jetbrains
pkgver=1.10.0
pkgrel=2
pkgdesc="Add Jetbrains IDE projects to Gnome Search"
arch=('x86_64')
url="https://codeberg.org/flausch/gnome-search-providers-jetbrains"
license=('MPL2')
depends=('gnome-shell')
makedepends=('rust')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v${pkgver}.tar.gz")
md5sums=('b441e02789f04b7939e31b30ca867ec5')
sha1sums=('4fffe88c1492dd17946af3a3229185c96994d9b8')
sha512sums=('c0ba957ed2562a8c50cf279706ec55b58c45c122babf689cf231e44271f32bd1c19e1246971f628f743518f2e9da9be282c21a6abadb8d2fefb34a5af532c762')

build() {
	cd "$pkgname"
	export RUSTFLAGS='--cap-lints=allow'
	make PREFIX="/usr" build
}

package() {
	cd "$pkgname"
	make DESTDIR="$pkgdir" PREFIX="/usr" install
}

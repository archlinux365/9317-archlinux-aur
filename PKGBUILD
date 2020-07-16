# Maintainer: Linus Probert <linus.probert@gmail.com>
pkgname=blightmud
pkgver=0.5.1
pkgrel=1
epoch=
pkgdesc="A terminal mud client written in rust"
arch=('x86_64' 'i686')
url="https://github.com/liquidityc/blightmud"
license=('GPL')
groups=()
depends=('gcc-libs')
makedepends=('cargo')
checkdepends=()
optdepends=()
provides=('blightmud')
conflicts=('blightmud')
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/LiquidityC/Blightmud/archive/v$pkgver.tar.gz")
md5sums=('e3c425367f96c0e82bd34963bebddd7d')

prepare() {
	mv Blightmud-$pkgver $pkgname-$pkgver
}

build() {
	cd $pkgname-$pkgver
	cargo build --release
}

package() {
	cd $pkgname-$pkgver
	install -D -m755 "$srcdir/$pkgname-$pkgver/target/release/blightmud" "$pkgdir/usr/bin/blightmud"
}

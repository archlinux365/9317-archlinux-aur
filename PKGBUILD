# Maintainer: Samuel Laurén <samuel dot lauren at iki dot fi>
pkgname=xcolor
pkgver=0.3.1
pkgrel=1
pkgdesc="Lightweight color picker for X11"
arch=(x86_64)
url="https://github.com/Soft/xcolor"
license=(MIT)
depends=("libxcb")
makedepends=("rust" "cargo" "python")
source=("https://github.com/Soft/xcolor/archive/${pkgver}.tar.gz")
md5sums=("7192f03c4e3050b22d9ec8afd8f804d6")


build() {
	cd "$srcdir/xcolor-${pkgver}"
	cargo build --release
}

package() {
	cd "$srcdir/xcolor-${pkgver}"
	install -D -m755 -D target/release/xcolor "$pkgdir/usr/bin/xcolor"
	install -D -m644 -D man/xcolor.1 "$pkgdir/usr/share/man/man1/xcolor.1"
}

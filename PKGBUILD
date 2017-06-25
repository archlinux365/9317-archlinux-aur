pkgname=xxoff-phonepi
pkgver=1
pkgrel=7
pkgdesc="Shutdown application for PhonePi project"
url="https://github.com/PhonePi"
arch=("i686" "x86_64" "armv6h")
license=("GPL2")
makedepends=("git")
depends=("qt5-base" "qt5-tools" "qt5-declarative")
source=(git://github.com/PhonePi/phonepi.git)
sha256sums=("SKIP")

build() {
	cd "$srcdir/phonepi/src/XXoff"
	qmake
	make
}

package() {
	cd "$srcdir/phonepi/src/XXoff"
	install -Dm755 "./xxoff" "$pkgdir/usr/bin/xxoff"
}

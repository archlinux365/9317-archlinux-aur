# Maintainer: mekb https://github.com/mekb-turtle
pkgname=odus-git
pkgver=r34.ef1e609
pkgrel=1
pkgdesc='Light-weight sudo alternative'
arch=('any')
url="https://github.com/mekb-turtle/odus"
source=("odus::git+${url}.git")
sha256sums=(SKIP)
package() {
	mkdir -pv -- "$pkgdir/usr/local/bin"
	make -C "$srcdir/odus" DESTDIR="$pkgdir/usr/local/" install
}
build() {
	make -C "$srcdir/odus"
}
pkgver() {
	cd "$srcdir/odus"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

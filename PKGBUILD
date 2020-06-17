# Maintainer: Joan Moreau <jom@grosjo.net>
pkgname=tomboy-reborn-bin
pkgver=1.0
pkgrel=2
_pkgstate=beta
pkgdesc="a 'drop-in', straightforward, replacement of deprecated , but extremely usefull, /Gnome Tomboy/"
arch=('x86_64')
license=('GPL-3.0')
url="https://github.com/grosjo/tomboy-reborn"
depends=(gtk2 libcanberra)
makedepends=()
optdepends=()
source=(
	"https://github.com/grosjo/tomboy-reborn/releases/download/${pkgver}-${_pkgstate}${pkgrel}/tomboy-reborn_${pkgver}-${_pkgstate}${pkgrel}_amd64.deb"
)
sha512sums=(
	SKIP
)

package() {
	_src="$srcdir/$pkgname"
	mkdir -p "$_src"
	cd $_src
	tar xf "$srcdir/data.tar.xz"

	mkdir -p "$pkgdir/usr/share"
	for dir in man applications icons; do
		cp -r "usr/share/$dir" "$pkgdir/usr/share"
	done

	install -Dm755 "usr/bin/tomboy-reborn" "$pkgdir/usr/bin/tomboy-reborn"
}

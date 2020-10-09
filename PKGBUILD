# Maintainer: Mark Wagie <mark.wagie at tutanota dot com>
pkgname=stilo-themes-git
pkgver=3.36.2.r23.g8c29dd4
pkgrel=1
pkgdesc="Minimalistic GTK themes"
arch=('any')
url="https://github.com/lassekongo83/stilo-themes"
license=('GPL3')
depends=('gtk-engine-murrine' 'gtk-engines')
makedepends=('git' 'meson' 'sassc')
optdepends=('ttf-roboto: The recommended font')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
options=('!strip')
source=('git+https://github.com/lassekongo83/stilo-themes.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	arch-meson "${pkgname%-git}"build
	meson compile -C build
}

package() {
	DESTDIR="$pkgdir" meson install -C build
}

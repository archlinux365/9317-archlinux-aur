# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gnome-shell-extension-blur-my-shell-git
_pkgname=blur-my-shell
pkgver=7.r3.gcb9393c
pkgrel=1
pkgdesc="Extension that adds a blur look to different parts of the GNOME Shell"
arch=('any')
url="https://github.com/aunetx/blur-my-shell"
license=('unknown')
depends=('gnome-shell')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/aunetx/blur-my-shell.git#branch=gnome-40')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/$_pkgname"
	make
}

package() {
	cd "$srcdir/$_pkgname"
	_uuid='blur-my-shell@aunetx'

	install -d "$pkgdir/usr/share/gnome-shell/extensions"
	cp -r build "$pkgdir/usr/share/gnome-shell/extensions/$_uuid"

	install -d "$pkgdir/usr/share/glib-2.0/schemas"
	ln -s "/usr/share/gnome-shell/extensions/$_uuid/schemas/org.gnome.shell.extensions.$_pkgname.gschema.xml" \
		"$pkgdir/usr/share/glib-2.0/schemas"
}

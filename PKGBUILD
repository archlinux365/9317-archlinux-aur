# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=elementary-planner-git
pkgver=2.2.14.r0.gbf2181dd
pkgrel=1
pkgdesc="Personal task manager designed for elementary OS"
arch=('x86_64')
url="https://planner-todo.web.app"
license=('GPL3')
depends=('libsoup' 'granite' 'webkit2gtk' 'evolution-data-server'
         'gtk-theme-elementary' 'elementary-icon-theme')
makedepends=('git' 'meson' 'vala' 'cmake' 'appstream')
provides=("${pkgname%-git}" 'planner')
conflicts=("${pkgname%-git}" 'planner')
source=('git+https://github.com/alainm23/planner.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/planner"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	arch-meson planner build
	ninja -C build
}

package() {
	DESTDIR="$pkgdir" ninja -C build install

	ln -s /usr/bin/com.github.alainm23.planner "$pkgdir/usr/bin/planner"
}

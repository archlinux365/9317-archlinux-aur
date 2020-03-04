# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Lubosz <lubosz at gmail dot com>
pkgname=planner-git
pkgver=0.14.6.r159.d8906b1
pkgrel=1
pkgdesc="A project management tool for planning, scheduling and tracking projects."
arch=('i686' 'x86_64')
url="https://wiki.gnome.org/Apps/Planner"
license=('GPL')
depends=('libgnomecanvas' 'gnome-vfs' 'libxslt' 'pygtk')
makedepends=('git' 'gnome-common' 'rarian')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://gitlab.gnome.org/GNOME/planner.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --long | sed 's/^PLANNER_//;s/\([^-]*-\)g/r\1/;s/_/./;s/_/./;s/-/./g'
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	sed -i 's/python/python2/g' tests/python/task-test.py
}

build() {
	cd "$srcdir/${pkgname%-git}"
	export PYTHON=/usr/bin/python2
	export CFLAGS=-Wno-error

	./autogen.sh --prefix=/usr --disable-update-mimedb
	./configure
	make prefix=/usr
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" prefix=/usr install

	# Remove conflicting files
	cd "$pkgdir/usr/share/mime"
	find . -maxdepth 1 -type f -exec rm "{}" \;
}

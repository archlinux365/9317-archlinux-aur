# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=gnome-text-editor-git
pkgver=42.0.r1.g985c8dd
pkgrel=1
pkgdesc='Simple text editor that focuses on session management'
arch=(x86_64 aarch64)
url='https://gitlab.gnome.org/GNOME/gnome-text-editor'
license=(GPL3)
provides=(gnome-text-editor)
conflicts=(gnome-text-editor)
depends=(
	enchant
	gtksourceview5
	libadwaita
)
makedepends=(
	git
	itstool
	meson
)
options=(debug)
source=("git+${url}.git")
b2sums=('SKIP')

pkgver() {
	cd gnome-text-editor
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	arch-meson gnome-text-editor build
	meson compile -C build
}

check() {
	meson test -C build --print-errorlogs
}

package() {
	DESTDIR="${pkgdir}" meson install -C build
}

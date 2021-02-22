# Maintainer: Daniel Peukert <daniel@peukert.cc>
_projectname='spot'
pkgname="$_projectname-client"
pkgver='0.1.8'
pkgrel='1'
pkgdesc='Gtk/Rust native Spotify client'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/xou816/$_projectname"
license=('MIT')
depends=('alsa-lib' 'glib2' 'gtk3' 'libhandy' 'libpulse' 'openssl')
makedepends=('cargo' 'meson>=0.50.0')
source=("$pkgname-$pkgver-$pkgrel.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('61a14eff406f18e397cf99bee810b60acc34129e1310c239ceee7b2501edfeb0')

_sourcedirectory="$_projectname-$pkgver"
_builddirectory='build'

build() {
	cd "$srcdir/"
	arch-meson "$_sourcedirectory" "$_builddirectory" -Doffline=false
	meson compile -C "$_builddirectory"
}

check() {
	cd "$srcdir/"
	meson test -C "$_builddirectory"
}

package() {
	cd "$srcdir/"
	DESTDIR="$pkgdir" meson install -C "$_builddirectory"
	install -Dm644 "$_sourcedirectory/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

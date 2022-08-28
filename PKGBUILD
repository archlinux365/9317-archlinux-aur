# Maintainer: Alexander Seiler <seileralex@gmail.com>
pkgname=sioyek
pkgver=1.5.0
pkgrel=1
pkgdesc="PDF viewer for research papers and technical books."
arch=('x86_64')
license=('GPL3')
url="https://github.com/ahrm/sioyek"
depends=(
	'gumbo-parser'
	'harfbuzz'
	'jbig2dec'
	'libmupdf'
	'openjpeg2'
	'qt5-3d'
	'qt5-base'
	'zlib')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz" "mupdf-1.20.patch")
sha256sums=('2d01c757953c3f2d98428376e642d13b8a9edeba8fee506477e8aa178756f16b' 'cd639043d9978a27f8957db59001c846bc6b5190fd08afd9cd8d2d8875b532fa')

prepare() {
	cd "$pkgname-$pkgver"
	patch --forward --strip=1 --input="${srcdir}/mupdf-1.20.patch"
	sed -i 's/-lmupdf-threads/-lfreetype -lgumbo -ljbig2dec -lopenjp2 -ljpeg/' pdf_viewer_build_config.pro
	sed -i '/#define LINUX_STANDARD_PATHS/s/\/\///' pdf_viewer/main.cpp
}

build() {
	cd "$pkgname-$pkgver"
	./build_linux.sh
}

package() {
	cd "$pkgname-$pkgver"
	install -D build/sioyek -t "$pkgdir/usr/bin/"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 resources/sioyek-icon-linux.png -t "$pkgdir/usr/share/icons/"
	install -Dm644 resources/$pkgname.desktop -t "$pkgdir/usr/share/applications/"
	install -Dm644 build/shaders/* -t "$pkgdir/usr/share/$pkgname/shaders/"
	install -Dm644 -t "$pkgdir/etc/sioyek/" build/keys.config build/prefs.config
	install -Dm644 -t "$pkgdir/usr/share/man/man1" resources/sioyek.1
    install -Dm644 -t "$pkgdir/usr/share/sioyek" build/tutorial.pdf
}

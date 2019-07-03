# Maintainer: Nikola Hadžić <nikola@firemail.cc>
pkgname="bamr"
pkgver=0.5
pkgrel=1
epoch=
pkgdesc="Simple GUI recording software"
arch=("x86_64")
url="https://gitlab.com/oktopod11/bamr"
license=("GPL3")
groups=()
depends=("gtk3" "gstreamer" "gst-plugins-base" "gst-plugins-good" "gst-plugins-rs")
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
source=("https://gitlab.com/oktopod11/$pkgname/raw/master/archive/$pkgname-$pkgver.tar.gz")
noextract=()
sha256sums=("ca44756d78f9cc5a3eba2cba6c15e2876af8be3d4b1b41ab175ba3ca204277b1")

build() {
	cd "$srcdir/$pkgname"
	make FLAGS=-O3
}

package() {
	cd "$srcdir/$pkgname"
	mkdir -vp "$pkgdir/usr/bin/"
	mkdir -vp "$pkgdir/usr/share/man/man1/"
	mkdir -vp "$pkgdir/usr/share/icons/hicolor/48x48/apps/"
	mkdir -vp "$pkgdir/usr/share/icons/hicolor/32x32/apps/"
	mkdir -vp "$pkgdir/usr/share/icons/hicolor/scalable/apps/"

	cp bamr "$pkgdir/usr/bin/"
	cp bamr.man "$pkgdir/usr/share/man/man1/bamr.1"
	gzip "$pkgdir/usr/share/man/man1/bamr.1"
	cp "$pkgdir/icons/bamr.svg /usr/share/icons/hicolor/scalable/apps/bamr.svg"
	cp "$pkgdir/icons/bamr_32x32.png /usr/share/icons/hicolor/32x32/apps/bamr.png"
	cp "$pkgdir/icons/bamr_48x48.png /usr/share/icons/hicolor/48x48/apps/bamr.png"
	gtk-update-icon-cache "$pkgdir//usr/share/icons/hicolor/"
}


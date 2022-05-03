# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=diff-pdf
pkgver=0.5
pkgrel=3
pkgdesc='A simple tool for visually comparing two PDF files'
arch=(x86_64)
url="http://vslavik.github.io/$pkgname"
_url="https://github.com/vslavik/$pkgname"
license=(GPL)
depends=(poppler-glib
         wxgtk2)
_archive="$pkgname-$pkgver"
source=("$_url/releases/download/v$pkgver/$_archive.tar.gz")
sha256sums=('e7b8414ed68c838ddf6269d11abccdb1085d73aa08299c287a374d93041f172e')

prepare() {
	cd "$_archive"
	./bootstrap
}

build() {
	cd "$_archive"
	./configure --prefix /usr
	make
}

package() {
	cd "$_archive"
	make DESTDIR="$pkgdir" install
}

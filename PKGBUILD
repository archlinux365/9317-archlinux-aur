# Maintainer: Anna Ivanova <kalterfx@gmail.com>

pkgname=terminus-re33
pkgver=1.0
pkgrel=1
pkgdesc="ttf version of terminus-font"

arch=(any)
depends=(fontconfig xorg-font-utils)

source=("https://deadsoftware.ru/files/kalterfx/aur.archlinux.org/packages/terminus-re33/terminus-re33.ttf.gz")
sha256sums=('ccf315c5ffeac3efee3fbc9e066595a05e4f79aa0742831598a4ab7c28641d25')

package() {
	install -Dm644 "$srcdir/${pkgname}.ttf" \
	               "$pkgdir/usr/share/fonts/TTF/${pkgname}.ttf"
}


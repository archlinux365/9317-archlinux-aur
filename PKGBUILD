# Maintainer: duffydack <duffydack73 {at] gmail {dot} com>

pkgname=ttf-archlinux-unicode
pkgver=1.0
pkgrel=1
pkgdesc="Arch Linux glyph (unicode e900).  See url below showing it."
url="https://github.com/duffydack/dotfiles/ttf-archlinux-unicode.png"
arch=('any')
license=('custom')
depends=('fontconfig' 'xorg-font-utils')
source=("https://github.com/duffydack/dotfiles/blob/master/Archlinux-unicode.ttf")
md5sums=('SKIP')
package() {
install -d "$pkgdir"/usr/share/fonts/TTF
install -Dm644 "$srcdir/Archlinux-unicode.ttf" "$pkgdir/usr/share/fonts/TTF"
}

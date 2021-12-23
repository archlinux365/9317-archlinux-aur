# Maintainer : Nicolas Perrin <booloki@lokizone.net>
# Contributor: Chris Clonch <chris at theclonchs dot com>
# Contributor: Nathan Owe <ndowens04 at gmail>
# Contributor: Chris Allison <daemon@cca.me.uk>

pkgname=ccextractor
pkgver=0.94
pkgrel=1
pkgdesc="A fast closed captions extractor for MPEG files."
arch=('i686' 'x86_64')
url="https://www.ccextractor.org"
license=('GPL')
depends=('gcc-libs' 'tesseract' 'leptonica' 'ffmpeg' 'rust' 'clang')
source=(
  https://github.com/CCExtractor/ccextractor/releases/download/v$pkgver/ccextractor_minimal.tar.gz
)
sha512sums=('35ddcfb540f2b9a9354b81885c31c4fedd4385700401f71db59048a855f74bff045de8787e13dc8d772e1d3bf7d75ae8732c2d97a8148475502f0e0586b47aa9')

build() {
  cd "$srcdir/$pkgname/linux"
  ./build_hardsubx
}

package() {
  cd "$srcdir/$pkgname/linux"
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
}

# vim:set ts=2 sw=2 et:

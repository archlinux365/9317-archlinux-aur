# Maintainer: OSAMC <https://github.com/osam-cologne/archlinux-proaudio>
# Contributor: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: Tuyen Pham <tuyenpm9@gmail.com>
# Contributor: Lex Black <autumn-wind@web.de>
# Contributor: Simon Thorpe <simon@hivetechnology.com.au>
# Contributor: kess <joe@macmahon.eu>
# Contributor: damir <damir@archlinux.org>
# Contributor: Luis Pablo Gasparotto <lpgasparotto(at)gmail(dot)com>

pkgname=abcm2ps
pkgver=8.14.13
pkgrel=3
pkgdesc='Convert ABC music notation files to PostScript from the command line'
arch=(x86_64 aarch64)
url='http://moinejf.free.fr/'
license=(GPL3)
depends=(glibc)
makedepends=(freetype2 glib2 pango python-docutils)
checkdepends=(adobe-source-han-sans-cn-fonts)
groups=(abc pro-audio)
source=("$pkgname-$pkgver.tar.gz::https://github.com/lewdlime/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('8db29e33f30fce609ddffeb641c3bfe60ae5d16c3305402157ddc88bcaaf0c5b')

build() {
  cd $pkgname-$pkgver
  ./configure --prefix=/usr
  make
}

check() {
  cd $pkgname-$pkgver
  rm -f *.ps
  make -j1 test
}

package() {
  depends+=(libpangocairo-1.0.so libpangoft2-1.0.so libpango-1.0.so
            libgobject-2.0.so libglib-2.0.so libfreetype.so)
  cd $pkgname-$pkgver
  make prefix="$pkgdir"/usr docdir="$pkgdir"s/usr/share/doc install
}

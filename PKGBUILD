# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: Egon Geerardyn < egon DOT geerardyn AT gmail DOT com >
# Contributor: TDY <tdy@gmx.com>

pkgname=cb2bib
pkgver=1.9.5
pkgrel=1
pkgdesc="A tool for parsing clipboard data into BibTeX bibliographic database files"
arch=('i686' 'x86_64')
url="http://www.molspaces.com/cb2bib/"
license=('GPL3')
depends=('desktop-file-utils' 'lzo2' 'qt5-base' 'qt5-x11extras')
optdepends=('openssl: network reference query support'
            'perl-image-exiftool: meta data support'
            'texlive-core: file correctness checking; bib2pdf printing'
            'xpdf: pdftotext support')
install=cb2bib.install
source=(http://www.molspaces.com/dl/progs/$pkgname-$pkgver.tar.gz)
sha256sums=('7c4830835aacf3a23273e21ce8aaba6134c22847cbc48dafbd4f1ee26f99d9bf')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix /usr --qmakepath /usr/bin/qmake-qt5
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make INSTALL_ROOT="$pkgdir" install
}

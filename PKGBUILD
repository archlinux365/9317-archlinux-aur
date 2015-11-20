# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=tex2page-git
pkgver=20151120
pkgrel=1
pkgdesc="Lisp program for making Web pages from TeX documents"
arch=('any')
url="https://github.com/ds26gte/tex2page"
license=('custom')
depends=('bash' 'guile')
makedepends=('git' 'texlive-formatsextra') # texlive-formatsextra only for docs
source=("git+https://github.com/ds26gte/tex2page" end)
md5sums=('SKIP'
         '08020a685846b280394f4cd9949a677f')
install=$pkgname.install
_gitname="tex2page"

pkgver() {
  cd "$_gitname"
  echo $(git log -1 --format="%cd" --date=short | sed 's|-||g')
}

build() {
  cd "$_gitname"
  ./configure searchpathforscmxlate="$srcdir" --dialect=guile --prefix=/usr
  # creating the documentation
  cat story.tex $srcdir/end > story.new
  mv story.new story.tex
  pdftex story
  pdftex index || true
  makeindex index
  mpost lambda
  pdftex index
  pdftex index
}

check() {
  cd "$_gitname"
  # run the generated program to build html-docs, also a good test
  ./my-$_gitname index
  ./my-$_gitname index
}

package() {
  cd "$_gitname"
  install -Dm755 "my-${_gitname}" $pkgdir/usr/bin/"$_gitname"
  install -Dm644 "$_gitname".sty $pkgdir/usr/share/texmf/tex/plain/"$_gitname".sty
  install -Dm644 "$_gitname".tex $pkgdir/usr/share/texmf/tex/plain/"$_gitname".tex
  # for texinfo sources
  install -Dm644 texi2p.tex $pkgdir/usr/share/texmf/tex/plain/texi2p.tex
  # manpage
  install -Dm644 "$_gitname".1 $pkgdir/usr/share/man/man1/"$_gitname".1
  # bibtex file 
  install -Dm644 "$_gitname".bib \
	  $pkgdir/usr/share/texmf/bibtex/bib/"$_gitname"/"$_gitname".bib
  install -Dm644 COPYING $pkgdir/usr/share/licenses/$pkgname/COPYING
  # installing documentation other than manpage 
  for _i in index*
  do
    install -Dm644 $_i $pkgdir/usr/share/doc/$pkgname/$_i
  done
}

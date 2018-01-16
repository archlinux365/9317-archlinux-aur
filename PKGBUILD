# Original author: Josiah Schwab <jschwab at gmail dot com>
# Maintainer: Josiah Schwab <jschwab at gmail dot com>

pkgname=texlive-aastex6
pkgdesc="Package for preparing papers in American Astronomical Society (AAS) journals "
pkgver=6.2
pkgrel=1
arch=('i686' 'x86_64')
url="http://journals.aas.org/authors/aastex.html"
depends=('texlive-core' 'texlive-publishers')
provides=('texlive-aastex6')
install=texlive-aastex6.install
source=('http://journals.aas.org/authors/aastex/aastex62.cls'
        'http://journals.aas.org/authors/aastex/aasjournal.bst')
sha1sums=('235593315dc0455eff2511831037be4268641695'
          '693276c5dd1ac4111a696088aea4a79534c77620')


package() {

  cd "$srcdir"

  # install current files
  install -Dm644 aastex62.cls $pkgdir/usr/share/texmf/tex/latex/aastex/aastex62.cls
  install -Dm644 aasjournal.bst $pkgdir/usr/share/texmf/bibtex/bst/aastex/aasjournal.bst

}

# Contributor: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=perl-latexml-git
_realname=LaTeXML
pkgver=0.8.3.112.ga3a0f218
pkgrel=1
pkgdesc="LaTeX to XML converter"
arch=('any')
license=('custom')
url="http://dlmf.nist.gov/LaTeXML/"
depends=('perl' 'perl-parse-recdescent' 'perl-text-unidecode'
    'imagemagick' 'perl-xml-libxml' 
    'perl-xml-libxslt' 'db' 'texlive-core'
    'perl-image-size' 'perl-file-which'
    'perl-libwww' 'perl-io-string' 'perl-archive-zip')
options=('!emptydirs')
provides=('perl-latexml')
conflicts=('perl-latexml')
source=("git+https://github.com/brucemiller/LaTeXML.git")
sha512sums=('SKIP')

pkgver() {
  cd ${_realname}
  printf "%s" $(git describe | cut -c2-| tr - .) 
}

build() {
  cd ${_realname}

  # install module in vendor directories.
  perl Makefile.PL INSTALLDIRS=vendor INSTALLVENDORBIN=/usr/bin INSTALLVENDORSCRIPT=/usr/bin TEXMF=/usr/share/texmf
  make
}

package() {
  cd ${_realname}
  make install DESTDIR="$pkgdir"

  # remove perllocal.pod and .packlist
  find "$pkgdir" -name perllocal.pod -delete
  find "$pkgdir" -name .packlist -delete
  # add liense file
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  # add manual
  install -Dm644 manual.pdf "$pkgdir"/usr/share/$pkgname/doc/manual.pdf
}

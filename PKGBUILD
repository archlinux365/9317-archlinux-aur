# Contributor: John D Jones III <j[nospace]n[nospace]b[nospace]e[nospace]k[nospace]1972 -_AT_- the domain name google offers a mail service at ending in dot com>
# Generator  : CPANPLUS::Dist::Arch 1.25

pkgname='perl-datetime-format-flexible'
pkgver='0.25'
pkgrel='1'
pkgdesc="DateTime::Format::Flexible - Flexibly parse strings and turn them into DateTime objects."
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-datetime' 'perl-datetime-format-builder>=0.74' 'perl-datetime-timezone' 'perl-list-moreutils')
makedepends=('perl-test-mocktime')
url='http://search.cpan.org/dist/DateTime-Format-Flexible'
source=('http://search.cpan.org/CPAN/authors/id/T/TH/THINC/DateTime-Format-Flexible-0.25.tar.gz')
md5sums=('e0da700eeab8639382be0f7cca763c85')
sha512sums=('c2cdd0dc682a7ef87f006c27c3822f92db658d187748852c2079b58a08fa527f83ed810e4b737dcc3d3de26eae7b89fb173ab2ffbc25935b868d01510fab8ca6')
_distdir="DateTime-Format-Flexible-0.25"

build() {
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                 \
      PERL_AUTOINSTALL=--skipdeps                            \
      PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
      PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
      MODULEBUILDRC=/dev/null

    cd "$srcdir/$_distdir"
    /usr/bin/perl Makefile.PL
    make
  )
}

check() {
  cd "$srcdir/$_distdir"
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""
    make test
  )
}

package() {
  cd "$srcdir/$_distdir"
  make install

  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:

# Contributor: BluePeril <blueperil@blueperil.de>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-module-cpants-analyse'
pkgver='1.01'
pkgrel='1'
pkgdesc="Generate Kwalitee ratings for a distribution"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-archive-any-lite>=0.06' 'perl-array-diff>=0.04' 'perl-cpan-distnameinfo>=0.06' 'perl-class-accessor>=0.19' 'perl-data-binary>=0' 'perl-file-find-object>=0.2.1' 'perl-module-find>=0' 'perl-perl-prereqscanner-notquitelite>=0.9901' 'perl-software-license>=0.103012' 'perl>=5.8.1')
makedepends=()
checkdepends=('perl-test-failwarnings>=0' 'perl-extutils-makemaker-cpanfile' 'perl-algorithm-diff' 'perl-class-xsaccessor')
url='https://metacpan.org/release/Module-CPANTS-Analyse'
source=("http://search.cpan.org/CPAN/authors/id/I/IS/ISHIGAKI/Module-CPANTS-Analyse-${pkgver}.tar.gz")
md5sums=('8e111492657174bf0291d90ba5308cc0')
sha512sums=('31381f83376297842668fc6e42ea4affa6775eddbc2c7b3e7806db5da2190a4b3b8600029a04a0814dc185b1e047c25366a7bd06bece5e4a3e2a67e47d45d97a')
_distdir="Module-CPANTS-Analyse-${pkgver}"

build() {
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                 \
      PERL_AUTOINSTALL=--skipdeps                            \
      PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
      PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
      MODULEBUILDRC=/dev/null

    cd "$_distdir"
    /usr/bin/perl Makefile.PL
    make
  )
}

check() {
  cd "$_distdir"
  ( export PERL_MM_USE_DEFAULT=1 PERL5LIB=""
    make test
  )
}

package() {
  cd "$_distdir"
  make install
  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:

# Moritz Bunkus <moritz@bunkus.org>

pkgname='perl-net-sip'
pkgver='0.805'
pkgrel='1'
pkgdesc="SIP (Voice Over IP, RFC3261) packet handling"
arch=('any')
license=('PerlArtistic')
options=('!emptydirs')
depends=('perl-net-dns')
url='http://search.cpan.org/dist/Net-SIP'
source=("https://cpan.metacpan.org/authors/id/S/SU/SULLR/Net-SIP-${pkgver}.tar.gz")
sha512sums=('743ff6bd870e50444515a64529660f722cb0ce41d489daf4e4f9f9d4fcab5da51140e8bd7e0a35ae3714bf509cb0466b5d9bc5f8db6d7b56b4c0c50189d1f7fd')

prepare_environment() {
  export PERL_MM_USE_DEFAULT=1 PERL5LIB=""                 \
    PERL_AUTOINSTALL=--skipdeps                            \
    PERL_MM_OPT="INSTALLDIRS=vendor DESTDIR='$pkgdir'"     \
    PERL_MB_OPT="--installdirs vendor --destdir '$pkgdir'" \
    MODULEBUILDRC=/dev/null
  cd "${srcdir}/Net-SIP-${pkgver}"
}

build() {
  prepare_environment
  /usr/bin/perl Makefile.PL
  make
}

check() {
  prepare_environment
  make test
}

package() {
  prepare_environment
  make install
  find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
}

# Local Variables:
# mode: shell-script
# sh-basic-offset: 2
# End:
# vim:set ts=2 sw=2 et:

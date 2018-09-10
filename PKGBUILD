# Maintainer : <michael dot kogan at gmx dot net>
# Contributor: John D Jones III AKA jnbek <jnbek1972 -_AT_- g m a i l -_Dot_- com>
# Generator  : CPANPLUS::Dist::Arch 1.32

pkgname='perl-json-maybexs'
pkgver='1.004000'
pkgrel='1'
pkgdesc="Use Cpanel::JSON::XS with a fallback to JSON::XS and JSON::PP"
arch=('any')
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl-cpanel-json-xs' 'perl>=5.006')
makedepends=()
url='https://metacpan.org/release/JSON-MaybeXS'
source=("https://cpan.metacpan.org/authors/id/H/HA/HAARG/JSON-MaybeXS-$pkgver.tar.gz")
md5sums=('db61fb5515f8e2f19709a317e26dde42')
sha512sums=('caebd00e49f4bd79f9a9a748077d58d963f53b656e4f48f9577a14fb36a80e956ff393f0ccdf7066129bcd7ebcec73a201c1c6fc778ce2488522b4e3886d2bbb')
_distdir="JSON-MaybeXS-$pkgver"

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

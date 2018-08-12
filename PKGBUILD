# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: John D Jones III <j[nospace]n[nospace]b[nospace]e[nospace]k[nospace]1972 -_AT_- the domain name google offers a mail service at ending in dot com>

pkgname=perl-test-subcalls
_perl_namespace=Test
_perl_module=SubCalls
pkgver=1.10
pkgrel=1
pkgdesc="Track the number of times subs are called"
arch=('any')
url="https://metacpan.org/release/${_perl_namespace}-${_perl_module}"
license=('GPL' 'PerlArtistic')
depends=('perl-hook-lexwrap')
makedepends=('perl-module-install')
source=("https://www.cpan.org/modules/by-module/${_perl_namespace}/${_perl_namespace}-${_perl_module}-${pkgver}.tar.gz")
sha256sums=('cbc1e9b35a05e71febc13e5ef547a31c8249899bb6011dbdc9d9ff366ddab6c2')
options=('!emptydirs')

build() {
  cd "${_perl_namespace}-${_perl_module}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1 PERL_AUTOINSTALL=--skipdeps
  perl Makefile.PL
  make
}

check() {
  cd "${_perl_namespace}-${_perl_module}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  make test
}

package() {
  cd "${_perl_namespace}-${_perl_module}-${pkgver}"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  make pure_install INSTALLDIRS=vendor DESTDIR="${pkgdir}"
  # Delete unuseful files
  find "${pkgdir}" -name '.packlist' -delete
}


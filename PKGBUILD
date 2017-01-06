# Maintainer: Stefan Göbel <aur —at— subtype —dot— de>

pkgname='perl-data-rmap'
_module='Data-Rmap'
_author='B/BO/BOWMANBS'
pkgver='0.65'
pkgrel='1'
pkgdesc='Recursive map, apply a block to a data structure.'
arch=('any')
url="https://metacpan.org/release/$_module"
license=('PerlArtistic' 'GPL')
options=('!emptydirs')
depends=('perl')
checkdepends=('perl-test-exception')
source=("http://search.cpan.org/CPAN/authors/id/$_author/$_module-$pkgver.tar.gz")
md5sums=('8be88e43eb0de36a91b3f0cd200241bb')

build() {
   (
      unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
      export PERL_MM_USE_DEFAULT='1' PERL_AUTOINSTALL='--skipdeps'
      cd "$_module-$pkgver"
      /usr/bin/perl Makefile.PL
      make
   )
}

check() {
   (
      cd "$_module-$pkgver"
      unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
      export PERL_MM_USE_DEFAULT='1'
      make test
   )
}

package() {
   (
      cd "$_module-$pkgver"
      unset PERL5LIB PERL_MM_OPT PERL_LOCAL_LIB_ROOT
      make install INSTALLDIRS='vendor' DESTDIR="$pkgdir"
      find "$pkgdir" -name .packlist -o -name perllocal.pod -delete
   )
}

#:indentSize=3:tabSize=3:noTabs=true:mode=shellscript:maxLineLen=87:

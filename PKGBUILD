# Generated by Xyne::Arch::CPAN 0.07

pkgname=perl-sqlite-db
pkgver=0.04
pkgrel=2
pkgdesc="SQLite::DB provides an object oriented wrapper to SQLite databases using DBI and DBD::SQLite modules."
arch=('any')
url="https://metacpan.org/pod/SQLite::DB"
license=('PerlArtistic')
source=("https://cpan.metacpan.org/authors/id/V/VX/VXX/SQLite-DB-0.04.tar.gz")
md5sums=('1a3ac853de79f7d09a321092a3819d1d')
sha256sums=('284ede206c3a97e8501e6f7bda51b0137bc417ef06f4c4d62a107ef21f647614')
depends=('perl' 'perl-dbi' 'perl-dbd-sqlite' 'sqlite')
makedepends=('perl-module-build')
options=(!emptydirs)

build() {
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Makefile.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
    make

  else
    _dir=$(find $srcdir -maxdepth 2 -type f -name 'Build.PL')
    if [ ! -z "$_dir" ]; then
      cd $(dirname "$_dir")
      PERL_MM_USE_DEFAULT=1 perl Build.PL INSTALLDIRS=vendor
      ./Build

    else
      echo "error: failed to detect build method for $pkgname"
      echo "you may be able to fix this by editing the PKGBUILD"
      return 1
    fi
  fi

}

package() {
echo "pkg starts here"
  _dir=$(find $srcdir -maxdepth 2 -type f -name 'Makefile.PL')
  if [ ! -z "$_dir" ]; then
    cd $(dirname "$_dir")
    make install DESTDIR="${pkgdir}"
  else
    _dir=$(find $srcdir -maxdepth 2 -type f -name 'Build.PL')
    if [ ! -z "$_dir" ]; then
      cd $(dirname "$_dir")
      ./Build install destdir=${pkgdir}

    else
      echo "error: failed to detect build method for $pkgname"
      echo "you may be able to fix this by editing the PKGBUILD"
      return 1
    fi
  fi

  # remove perllocal.pod and .packlist
  find ${pkgdir} -name perllocal.pod -delete
  find ${pkgdir} -name .packlist -delete
}

# vim:set ts=2 sw=2 et:

# This PKGBUILD was generated by cpan4pacman via CPANPLUS::Dist::Pacman
# Maintainer: Jose Riha <jose1711 at gmail dot com>

pkgname=perl-math-polygon
_cpanname=Math-Polygon
pkgver=1.03
pkgrel=1
pkgdesc="polygon mathematics"
arch=('any')
url="http://search.cpan.org/~MARKOV/${_cpanname}"
license=('GPL' 'PerlArtistic')
depends=('perl')
options=('!emptydirs')
source=(http://www.cpan.org/authors/id/M/MA/MARKOV/${_cpanname}-${pkgver}.tar.gz) 
md5sums=('11b20ad4c55744c3cf8e3aa516d1d4fc')

build() {
  cd $srcdir/${_cpanname}-${pkgver}
  sed -i '/^auto_install/d' Makefile.PL
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make
}

package() {
  cd $srcdir/${_cpanname}-${pkgver}
  make install DESTDIR=$pkgdir
  find $pkgdir -name '.packlist' -delete
  find $pkgdir -name '*.pod' -delete
}

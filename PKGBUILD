# Maintainer: Jimmy Xu <me at jimmyxu dot org>

_perlmod='Prometheus-Tiny'
_modnamespace=Prometheus
pkgname=perl-prometheus-tiny
pkgver=0.008
pkgrel=1
pkgdesc="A tiny Prometheus client"
arch=("any")
url="http://search.cpan.org/dist/$_perlmod"
license=('GPL' 'PerlArtistic')
depends=('perl')
checkdepends=('perl-plack')
options=('!emptydirs')
source=("http://cpan.perl.org/modules/by-module/$_modnamespace/$_perlmod-$pkgver.tar.gz")
sha256sums=('736a66913b9800beec921d50a12b05cb374b5f09d5709eaf43984dc89259a79d')

build() {
  cd "$srcdir/$_perlmod-$pkgver"

  # Install module in vendor directories.
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make
}

check() {
  cd "$srcdir/$_perlmod-$pkgver"

  # Install module in vendor directories.
  PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
  make test
}

package() {
  cd "$srcdir/$_perlmod-$pkgver"
  make install DESTDIR="$pkgdir/"
}

# vim:set ts=2 sw=2 et:

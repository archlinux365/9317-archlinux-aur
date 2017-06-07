# Maintainer: Brian Bidulock <bidulock at openss7 dot org>

pkgname=perl-ev-glib
pkgver='2.01'
pkgrel=8
pkgdesc="Embed the glib main loop into EV"
arch=('i686' 'x86_64')
url='http://search.cpan.org/perldoc?EV::Glib'
license=('GPL' 'PerlArtistic')
options=('!emptydirs')
source=("http://search.cpan.org/CPAN/authors/id/M/ML/MLEHMANN/EV-Glib-${pkgver}.tar.gz")
depends=('glib-perl' 'perl-ev' 'perl>=5.26' 'perl<5.27')
makedepends=('perl-extutils-pkgconfig')
md5sums=('20c0196095062a5e0f27a455ac32d8f5')

build() {
	cd "$srcdir/EV-Glib-$pkgver"

	# install module in vendor directories
	PERL_MM_USE_DEFAULT=1 perl Makefile.PL INSTALLDIRS=vendor
	make
}
package() {
	cd "$srcdir/EV-Glib-$pkgver"
	make install DESTDIR="$pkgdir/"

	#remove perllocal.pod and .packlist
	find "$pkgdir" -name perllocal.pod -delete
	find "$pkgdir" -name .packlist -delete
}

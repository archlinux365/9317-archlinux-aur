# Maintainer: Matt Day <matt@msday.co.uk>
# Contributor: L. Bradley LaBoon <me@bradleylaboon.com>
# Contributor: Anatol Pomozov <anatol.pomozov+arch@gmail.com>
# Contributor: Firmicus <francois.archlinux.org>
# Contributor: Tom K <tomk@runbox.com>

pkgname=mod_perl
pkgver=2.0.11
pkgrel=3
pkgdesc='Apache module that embeds the Perl interpreter within the server'
arch=(i686 x86_64 armv6h armv7h)
url='http://perl.apache.org/'
license=(APACHE)
depends=(perl apache db apr-util perl-linux-pid)
options=(!emptydirs)
source=(http://apache.org/dist/perl/mod_perl-$pkgver.tar.gz{,.asc})
validpgpkeys=(2026E6A4A6A4483E61BA6F3FAB34BA0040E92ECE)
sha256sums=('ca2a9e18cdf90f9c6023e786369d5ba75e8dac292ebfea9900c29bf42dc16f74'
            'SKIP')

prepare() {
  cd mod_perl-$pkgver
  # Workaround per http://mail-archives.apache.org/mod_mbox/perl-modperl/202009.mbox/%3C8d69b2e8-4a4e-bde4-6eff-7018ddf6354e%40gmail.com%3E
  sed -i -e '1098,1102d' Apache-Test/lib/Apache/TestRun.pm
  sed -i '51,56c push @INC, "xs/tables/current24";' lib/ModPerl/MapUtil.pm
  sed -i -e '66d' src/modules/perl/modperl_sys.c
}

build() {
  cd mod_perl-$pkgver
  perl Makefile.PL INSTALLDIRS=vendor MP_APXS=/usr/bin/apxs
  make
}

check() {
  cd mod_perl-$pkgver
  # Workaround test bug as per https://rt.cpan.org/Public/Bug/Display.html?id=118919
  APACHE_TEST_PRETEND_NO_LWP=1 make test
}

package() {
  cd mod_perl-$pkgver
  make install DESTDIR="$pkgdir"
}

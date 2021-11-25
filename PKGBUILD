# Maintainer: Raf Gemmail <rafiq+aur@dreamthought.com>

pkgname=rakubrew
pkgver=22
pkgrel=1
pkgdesc='Manage Raku (Formarly Perl 6+) installations in your $HOME'
arch=('any')
url="https://rakubrew.org/"
license=('MIT')
depends=('perl' 'perl-capture-tiny' 'perl-cpan-perl-releases' 'perl-devel-patchperl'
         'perl-file-path-tiny' 'perl-local-lib' 'perl-file-homedir' 'perl-http-tinyish'
         'perl-json' 'perl-file-copy-recursive')
makedepends=('perl-module-build-tiny')
checkdepends=('perl-test-exception' 'perl-test-output' 'perl-test-spec'
              'perl-path-class' 'perl-io-all')
options=('!emptydirs')
source=("https://github.com/Raku/App-Rakubrew/archive/refs/tags/v$pkgver.tar.gz")
sha512sums=('183104f3aa6fd36f097bbf64a0194e3b74026ba6207640c56ec41bbfefc50e93fbd2af50739a2db9ed4f40cdd923de49abdab362fa1989864ae497efd6cbe064')

build() {
  cd App-Rakubrew-$pkgver
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1 MODULEBUILDRC=/dev/null
  perl Makefile.PL PREFIX=$pkgdir/usr
  make
}

package() {
  cd App-Rakubrew-$pkgver
  make install
  install -d "${pkgdir}/usr"
  install -d "${pkgdir}/usr/bin"
  install -m555 "${srcdir}/App-Rakubrew-${pkgver}/script/rakubrew" "${pkgdir}/usr/bin"
  install -Dm0644 "${srcdir}/App-Rakubrew-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

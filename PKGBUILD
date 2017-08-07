# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=perl6-http-status
pkgver=0.0.1
pkgrel=2
pkgdesc="Get the text message associated with an HTTP status code"
arch=('any')
depends=('perl6')
checkdepends=('perl')
makedepends=('git')
groups=('perl6')
url="https://github.com/supernovus/perl6-http-status"
license=('PerlArtistic')
source=($pkgname-$pkgver::git+https://github.com/supernovus/perl6-http-status)
sha256sums=('SKIP')

check() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Running tests...'
  PERL6LIB=lib prove -r -e perl6
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing documentation...'
  install -Dm 644 README -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing...'
  export RAKUDO_LOG_PRECOMP=1
  export RAKUDO_RERESOLVE_DEPENDENCIES=0
  perl6-install-dist \
    --to="$pkgdir/usr/share/perl6/vendor" \
    --for=vendor \
    --from=.
}

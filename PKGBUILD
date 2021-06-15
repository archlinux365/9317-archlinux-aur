# Maintainer: mnussbaum <michaelnussbaum08@gmail.com>

_gemname=backport
pkgname=ruby-backport
pkgver=1.2.0
pkgrel=0
pkgdesc="A pure Ruby library for event-driven IO"
arch=("any")
depends=(ruby)
makedepends=(rubygems)
url="https://github.com/castwide/backport"
noextract=($_gemname-$pkgver.gem)
license=("MIT")
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha256sums=("912c7dfdd9ee4625d013ddfccb6205c3f92da69a8990f65c440e40f5b2fc7f75")

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"

  gem install \
    --ignore-dependencies \
    --no-user-install \
    -i "$pkgdir/$_gemdir" \
    -n "$pkgdir/usr/bin" \
    $_gemname-$pkgver.gem

  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

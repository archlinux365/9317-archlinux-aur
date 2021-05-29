# Maintainer: Mario Finelli <mario at finel dot li>

_gemname=rubocop-ast
pkgname=ruby-${_gemname}
pkgver=1.7.0
pkgrel=1
pkgdesc="RuboCop's Node and NodePattern classes"
arch=(any)
depends=(ruby ruby-parser)
makedepends=(rubygems ruby-rdoc)
url=https://github.com/rubocop-hq/rubocop-ast
noextract=($_gemname-$pkgver.gem)
license=(MIT)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
sha256sums=('9b4236061da5b18e1fbcca8e8260b99cc3c73bd244e37b23509757249277d9c2')

package() {
  local _gemdir="$(gem env gemdir)"

  gem install \
    --ignore-dependencies \
    --no-user-install \
    -i "$pkgdir/$_gemdir" \
    -n "$pkgdir/usr/bin" \
    $_gemname-$pkgver.gem

  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"

  install -Dm0644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: set ts=2 sw=2 et:

# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=googleauth
pkgname=ruby-$_gemname
pkgver=0.5.3
pkgrel=1
pkgdesc='Google Auth Library for Ruby'
arch=(any)
url='https://github.com/google/google-auth-library-ruby'
license=(Apache-2.0)
depends=(
  ruby
  'ruby-faraday>=0.12' 'ruby-faraday<1'
  'ruby-jwt>=1.4' 'ruby-jwt<2'
  'ruby-logging>=2' 'ruby-logging<3'
  'ruby-memoist>=0.12' 'ruby-memoist<1'
  'ruby-multi_json>=1.11' 'ruby-multi_json<2'
  'ruby-os>=0.9' 'ruby-os<1'
  'ruby-signet>=0.7' 'ruby-signet<1'
)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('fb690df35038f125fb2ab6285cf6020523120adf')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

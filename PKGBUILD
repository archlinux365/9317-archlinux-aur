# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Anatoly Bashmakov <anatoly at posteo dot net>
# Maintainer: Grey Christoforo <first name at last name dot net>

_gemname=gollum-lib
pkgname=ruby-$_gemname
pkgver=5.1
pkgrel=1
pkgdesc='A simple, Git-powered wiki.'
arch=(any)
url='http://github.com/gollum/gollum-lib'
license=(MIT)
depends=(ruby
         ruby-gemojione
         ruby-github-markup
         ruby-gollum-rugged_adapter
         ruby-loofah
         ruby-nokogiri
         ruby-octicons
         ruby-rouge
         'ruby-twitter-text=1.14.7')
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('989922f4d0fec7d03e0d59fb8c752e578d419ad2')

package() {
  local _gemdir="$(ruby -e 'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

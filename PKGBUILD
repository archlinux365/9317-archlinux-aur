# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farawayer <farwayer@gmail.com>

_gemname=emoji_regex
pkgname=ruby-$_gemname
pkgver=1.0.0
pkgrel=2
pkgdesc='A pair of Ruby regular expressions for matching Unicode Emoji symbols.'
arch=(any)
url='https://github.com/ticky/ruby-emoji-regex'
license=(MIT)
depends=(
  ruby
)
makedepends=(ruby-rdoc)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('b666122e31fa5a109dfead46c0d95a27ea94df77')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

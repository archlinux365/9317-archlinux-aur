# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Matej Grabovsky <matej.grabovsky at gmail>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Nathan Phillip Brink <binki@gentoo.org>

_gemname=sprockets-rails
pkgname=ruby-$_gemname
pkgver=3.0.0
pkgrel=2
pkgdesc='Sprockets Rails integration'
arch=(any)
url='https://github.com/rails/sprockets-rails'
license=(MIT)
depends=(ruby ruby-sprockets ruby-actionpack ruby-activesupport)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('a77fdce13b3cd6c8fb7342dd8ca232dfc9163f57')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

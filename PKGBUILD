# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: gardenapple <gardenapple@posteo.net>

_gemname=wisper
pkgname=ruby-$_gemname-1
pkgver=1.6.1
pkgrel=1
pkgdesc='A micro library providing objects with Publish-Subscribe capabilities'
arch=(any)
url='https://github.com/krisleech/wisper'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('2b95220ea17c312086c1a8b0e8807f22a0b86c10')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: a-wing <1@233.email>

_gemname=actioncable
pkgname=ruby-$_gemname
pkgver=5.2.2
pkgrel=1
pkgdesc='WebSocket framework for Rails.'
arch=(any)
url='http://rubyonrails.org'
license=(MIT)
depends=(ruby ruby-actionpack ruby-nio4r ruby-websocket-driver)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('d10aa1a5c5201a23236fbd6c4de0baf116141ae9')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}

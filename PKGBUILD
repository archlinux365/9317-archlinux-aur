# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Jonas Amundsen <jonasba+aur at gmail dot com>

_gemname=ironment
pkgname=ruby-$_gemname
pkgver=0.0.5
pkgrel=1
pkgdesc='Environment populator & command wrapper utility.'
arch=(any)
url='https://github.com/badeball/ironment'
license=(MIT)
depends=('ruby' 'ruby-commander')
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('81ff0b37658f0a869560ddc4a073925477ecaecc')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

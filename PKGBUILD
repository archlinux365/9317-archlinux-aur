# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Matej Grabovsky <matej.grabovsky at gmail>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: Alexsandr Pavlov <kidoz at mail dot ru>

_gemname=actionmailer
pkgname=ruby-$_gemname
pkgver=4.2.3
pkgrel=1
pkgdesc='Email composition, delivery, and receiving framework (part of Rails).'
arch=(any)
url='http://www.rubyonrails.org'
license=(MIT)
depends=(ruby ruby-actionpack ruby-actionview ruby-mail)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('f02da8c3896d4c8cd208b7c555c2c2235e44ce0e')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}

# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Jonas Amundsen <jonasba+aur at gmail.com>

_gemname=rmonitor
pkgname=ruby-$_gemname
pkgver=1.0.1
pkgrel=2
pkgdesc='A tool for creating monitor profiles that are easily invoked.'
arch=(any)
url='https://github.com/badeball/rmonitor'
license=(MIT)
depends=(ruby xorg-xrandr)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('9e25e7075621062f4ea3ae7b9251624d4916cd06')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

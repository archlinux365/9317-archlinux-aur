# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: Anatol Pomozov <anatol.pomozov@gmail.com>
# Contributor: eagletmt <eagletmt@gmail.com>

_gemname=mini_portile
pkgname=ruby-$_gemname
pkgver=0.7.0.rc2
pkgrel=1
pkgdesc='Simplistic port-like solution for developers'
arch=(any)
url='https://github.com/flavorjones/mini_portile'
license=(MIT)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('d2b9776ed8d1f91d88c10d634d29ce6be9133b356bd17caede9b4bfb328e610d')


package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

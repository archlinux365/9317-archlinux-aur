# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: kusakata <shohei atmark kusakata period com>

_gemname=ttfunk
pkgname=ruby-$_gemname
pkgver=1.5.1
pkgrel=1
pkgdesc='TrueType Font Metrics Parser'
arch=('any')
url='https://github.com/prawnpdf/ttfunk'
license=(Ruby GPL)
depends=(ruby)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('8da1c20cc9e010a4b083376e6ae6996c4aa517558420bb23d9a1d8a228b6f9d5')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

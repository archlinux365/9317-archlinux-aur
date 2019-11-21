# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: kusakata <shohei atmark kusakata period com>

_gemname=pdf-reader
pkgname=ruby-$_gemname
pkgver=2.4.0
pkgrel=1
pkgdesc='A library for accessing the content of PDF files'
arch=(any)
url='http://github.com/yob/pdf-reader'
license=(MIT)
depends=(ruby ruby-ascii85 ruby-ruby-rc4 ruby-hashery ruby-ttfunk ruby-afm)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha256sums=('de3968992d64c3fefe4e3976191cb4ab6d8a07e6926c67b684e50843aac86fbc')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install --no-document -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/MIT-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/MIT-LICENSE"
}

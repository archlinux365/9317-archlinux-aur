# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: ChaosKid42 <christoph.scholz@gmail.com>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

_gemname=rugged
pkgname=ruby-$_gemname
pkgver=0.26.0
pkgrel=1
pkgdesc='Rugged is a Ruby binding to the libgit2 linkable library'
arch=(i686 x86_64)
url='https://github.com/libgit2/rugged'
license=(MIT)
depends=(ruby libgit2)
makedepends=(cmake)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('04238f157b380638c9cf811376b81cdca7e55276')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem -- --use-system-libraries
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
  install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

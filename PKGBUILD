# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: Artem Vorotnikov <artem@vorotnikov.me>

_gemname=ruby-sdl-ffi
pkgname=ruby-$_gemname
pkgver=0.4
pkgrel=1
pkgdesc='Ruby-FFI bindings to SDL'
arch=(any)
url='http://github.com/jacius/ruby-sdl-ffi/'
license=()
depends=(ruby ruby-nice-ffi)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha512sums=('7173fce6e3fa665ba2a214500c142ff64699ddf44621bcdc6b4e60ea6938755c058283e2feacde67522534245f0dd6e708c6e8d8fc66da58b705a7c637a3ddb0')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

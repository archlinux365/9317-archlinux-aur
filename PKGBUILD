# Maintainer: Reik Keutterling <spielkind at gmail dot com>

_gemname=fusuma-plugin-appmatcher
pkgname=ruby-$_gemname
pkgver=0.1.4
pkgrel=1
pkgdesc="Fusuma plugin configure app-specific gestures"
arch=(any)
url="https://github.com/iberianpig/fusuma-plugin-appmatcher"
license=(MIT)
depends=(ruby ruby-fusuma ruby-dbus ruby-rexml)
options=(!emptydirs)
source=(https://rubygems.org/downloads/$_gemname-$pkgver.gem)
noextract=($_gemname-$pkgver.gem)
sha1sums=('0c2294bc076ea7909a7ea70b6832ab2e251a1034')

package() {
  local _gemdir="$(ruby -e'puts Gem.default_dir')"
  gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
  rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
}

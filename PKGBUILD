# Generated by gem2arch (https://github.com/anatol/gem2arch)
# Maintainer: farwayer <farwayer@gmail.com>
# Contributor: Hugo Osvaldo Barrera <hugo@barrera.io>

_gemname=dotenv
pkgname=ruby-${_gemname}
pkgver=2.5.0
pkgrel=1
pkgdesc="Loads environment variables from '.env'."
arch=('any')
depends=(ruby)
url="https://rubygems.org/gems/${_gemname}"
noextract=($_gemname-$pkgver.gem)
options=(!emptydirs)
license=('MIT')
source=(
	"https://rubygems.org/downloads/${_gemname}-${pkgver}.gem"
)
sha256sums=('a3ba27b62133e922283853d43247fae85114cc5f7197bf4781b2d0e352f045ed')

package() {
	local _gemdir="$(ruby -e'puts Gem.default_dir')"
	gem install --ignore-dependencies --no-user-install -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" $_gemname-$pkgver.gem
	rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
	install -D -m644 "$pkgdir/$_gemdir/gems/$_gemname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

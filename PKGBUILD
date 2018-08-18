# Maintainer:  Martin C. Doege <mdoege at compuserve dot com>
# Contributor: Anton Shestakov <engored*ya.ru>
# Contributor: listx <linusarver <at> gmail <dot> com>

pkgname=sdlmame-cheats
pkgver=0.200
pkgrel=1
_srcver=0200
pkgdesc='Official XML Cheat Collection for MAME'
url='http://www.mamecheat.co.uk/'
license=('unknown')
arch=('any')
depends=('mame>=0.145u1') # XML cheat engine since 0.127, 7z support since 0.145u1
optdepends=("mame>=$pkgver: this package is best used with an up-to-date version of mame.")
makedepends=('unzip')
source=("http://cheat.retrogames.com/download/cheat${_srcver}.zip")
install=sdlmame-cheats.install
sha1sums=('986499b423b5259da38c7aff64c1dea327857bfa')

build() {
  unzip -of "cheat${_srcver}.zip"
}

package() {
  install -Dm644 cheat.7z "$pkgdir/usr/lib/mame/cheat.7z"
  install -Dm644 cheat.txt "$pkgdir/usr/share/doc/sdlmame-cheats/cheat.txt"
  install -Dm644 "!README_FIRST!!.txt" "$pkgdir/usr/share/doc/sdlmame-cheats/!README_FIRST!!.txt"
}


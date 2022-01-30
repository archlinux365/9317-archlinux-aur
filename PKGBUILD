# Maintainer: Roboron <robertoms258 at gmail dot com >

pkgname=simutrans-extended-pak128.britain
pkgver=r4031.3f8d1f3a1
pkgrel=1
pkgdesc="High resolution graphics set for Simutrans Extended, with a British theme"
arch=('any')
url="https://www.simutrans.com/"
license=('custom:Artistic')
depends=('simutrans-extended-git')
source=(http://bridgewater-brunel.me.uk/downloads/nightly/pakset/pak128.britain-ex-nightly.tar.gz
        license.txt)
sha256sums=('90fdf4cc91cd59fb5227daefc8bcee84f66632c581d47421ed3b3c400ac07f2b'
            'def758cfe51b6f16d838f777a6540163fb47f334df5a0fb86448f92a36a92017')

package() {
  #data
  mkdir -p "$pkgdir/usr/share/games/simutrans-extended/pak128.britain-ex"
  cp -r * "$pkgdir/usr/share/games/simutrans-extended/pak128.britain-ex"
  
  #license
  install -Dm644 license.txt "$pkgdir/usr/share/licenses/simutrans-extended-pak128.britain/license.txt"
}

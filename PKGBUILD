# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Maintainer: Ryozuki <ryo@ryozuki.xyz>

pkgname=ddnet-skins
pkgver=20200921
pkgrel=2
pkgdesc="DDraceNetwork skin database"
arch=(any)
url="https://ddnet.tw"
license=('custom:unknown') # skins were provided to DDNet without any license
makedepends=('unzip')
source=("$pkgname-$pkgver.zip::https://ddnet.tw/skins/zip/database.zip")
sha256sums=('fc6630b80f3c220ea71bb59b6abc71148c8501e41e343051afa79b83c31a1fbc')

prepare() {
  rm -rf $pkgname-$pkgver
  mv database.dir $pkgname-$pkgver
}

package() {
  cd $pkgname-$pkgver
  install -dm755 "$pkgdir/usr/share/ddnet/data/skins/"
  install -Dvm644 * "$pkgdir/usr/share/ddnet/data/skins/"
  
  cd "$pkgdir/usr/share/ddnet/data/skins/"
  
  # Remove skins already provided by DDNet Client
  rm 'Ablush NeoN.png' 'antiantey.png' 'Apish Coke.png' 'blacktee.png' 'bluekitty.png' 'bluestripe.png' 'bomb.png' 'brownbear.png' 'cammo.png' 'cammostripes.png' 'coala_bluekitty.png' 'coala_bluestripe.png' 'coala_cammo.png' 'coala_cammostripes.png' 'coala_default.png' 'coala_limekitty.png' 'coala_pinky.png' 'coala.png' 'coala_redbopp.png' 'coala_redstripe.png' 'coala_saddo.png' 'coala_toptri.png' 'coala_twinbop.png' 'coala_twintri.png' 'coala_warpaint.png' 'default.png' 'demonlimekitty.png' 'dino.png' 'dragon.png' 'evil.png' 'Evil Puffi.png' 'evilwolfe.png' 'Flying Silex.png' 'ghostjtj.png' 'ghost.png' 'giraffe.png' 'greensward.png' 'greyfox_2.png' 'greyfox.png' 'hammie-chew.png' 'Hidden Assassin.png' 'Irradiated Sunny.png' 'jeet.png' 'kintaro_2.png' 'kitty_bluestripe.png' 'kitty_brownbear.png' 'kitty_cammo.png' 'kitty_cammostripes.png' 'kitty_coala.png' 'kitty_default.png' 'kitty_pinky.png' 'kitty_redbopp.png' 'kitty_redstripe.png' 'kitty_saddo.png' 'kitty_toptri.png' 'kitty_twintri.png' 'kitty_warpaint.png' 'limekitty.png' 'mermydon-coala.png' 'mermydon.png' 'Mobys Skull.png' 'mouse.png' 'musmann.png' 'nanami.png' 'nanas.png' 'nersif.png' 'oldschool.png' 'PaladiN.png' 'penguin.png' 'pinky.png' 'random.png' 'redbopp.png' 'redstripe.png' 'saddo.png' 'teerasta.png' 'Terrorist.png' 'toptri.png' 'twinbop.png' 'twintri.png' 'veteran.png' 'warpaint.png' 'wartee.png' 'whis.png' 'x_ninja.png'
}

# Maintainer: Polichronucci <nick AT discloud DOT eu>
pkgname=prosody-mod-onions
pkgver=14_10_2015
pkgrel=2
pkgdesc="s2s communication through TOR"
arch=('any')
url=("https://hg.prosody.im/prosody-modules/file/720b291cb340/mod_onions/mod_onions.lua")
license=('MIT')
depends=('prosody')
source=("https://hg.prosody.im/prosody-modules/raw-file/720b291cb340/mod_onions/mod_onions.lua")
sha1sums=("e571f273ccff8c0997e6a7bb5cbc812fd43f65aa")

package() {
  install -Dm 644 "mod_onions.lua" "${pkgdir}/usr/lib/prosody/modules/mod_onions.lua"
}

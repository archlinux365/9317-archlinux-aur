# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=anchor-wallet-bin
pkgver=1.3.8
pkgrel=1
pkgdesc="EOSIO Desktop Wallet and Authenticator"
arch=("x86_64")
url="https://github.com/greymass/anchor"
license=("MIT")
depends=("nss" "libxss" "libnotify" "libsecret" "libappindicator-gtk3" "util-linux-libs" "xdg-utils" "libappindicator-gtk2")
optdepends=("xdotool: for Auto-type feature")
provides=("keeweb")
conflicts=("anchor-wallet" "anchor-wallet-git")
source=("$pkgname-$pkgver.deb::$url/releases/download/v${pkgver}/linux-anchor-wallet-${pkgver}-amd64.deb")
sha256sums=('0873d4a34612adc548382e979ac6d88dadc9d9ad8c02d7a8a896cdb27293083f')

prepare() {
  bsdtar xf data.tar.xz
}

package() {
  mv usr "$pkgdir"
  mv opt "$pkgdir"

  sed -i "/Name=anchor-wallet/c\Name=Anchor Wallet" "$pkgdir/usr/share/applications/anchor-wallet.desktop"

  mkdir -p "$pkgdir/usr/bin"
  ln -sf "/opt/Anchor Wallet/anchor-wallet" "$pkgdir/usr/bin/anchor-wallet"
}

# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=mullvad-vpn-beta-bin
_pkgver=2022.5
_channel=stable
_rel=1
# beta
#pkgver=${_pkgver}.${_channel}${_rel}
# stable
pkgver=${_pkgver}.${_channel}
pkgrel=1
pkgdesc="The Mullvad VPN client app for desktop (beta channel)"
arch=('x86_64' 'aarch64')
url="https://www.mullvad.net"
license=('GPL3')
depends=('iputils' 'libnotify' 'libappindicator-gtk3' 'nss')
provides=("${pkgname%-*-*}")
conflicts=("${pkgname%-*-*}")
install="${pkgname%-*-*}.install"
source=("${pkgname%-*-*}.sh")
source_x86_64=(
#  "https://github.com/mullvad/mullvadvpn-app/releases/download/${_pkgver}-${_channel}${_rel}/MullvadVPN-${_pkgver}-${_channel}${_rel}_amd64.deb"{,.asc} # beta
  "https://github.com/mullvad/mullvadvpn-app/releases/download/${_pkgver}/MullvadVPN-${_pkgver}_amd64.deb"{,.asc} # stable
  )
source_aarch64=(
#  "https://github.com/mullvad/mullvadvpn-app/releases/download/${_pkgver}-${_channel}${_rel}/MullvadVPN-${_pkgver}-${_channel}${_rel}_arm64.deb"{,.asc} # beta
  "https://github.com/mullvad/mullvadvpn-app/releases/download/${_pkgver}/MullvadVPN-${_pkgver}_arm64.deb"{,.asc} # stable
  )
sha256sums=('a59c29f07b4eab9af56f0e8be42bae0d83726f5185e88de0c5a48f4098c3c0a4')
sha256sums_x86_64=('1b707891bfae82e918b42547dc71c8e37bb79fd1b4757e96c98500dd7fec67ea'
                   'SKIP')
sha256sums_aarch64=('6c37a787b394f517d4e9b38ccb419304c33d28e7e2a97c658a03553cb70d1370'
                    'SKIP')
validpgpkeys=('A1198702FC3E0A09A9AE5B75D5A1D4F266DE8DDF') # Mullvad (code signing) <admin@mullvad.net>

package() {
  bsdtar -xvf data.tar.xz -C "$pkgdir/"
  chmod 4755 "$pkgdir/opt/Mullvad VPN/chrome-sandbox"

  # Link to the GUI binary
  install -m755 "$srcdir/${pkgname%-*-*}.sh" "$pkgdir/usr/bin/${pkgname%-*-*}"

  # Move ZSH completions to correct directory
  mv "$pkgdir/usr/local/share/zsh" "$pkgdir/usr/share/"
  rm -rf "$pkgdir/usr/local"
}

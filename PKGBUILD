# Maintainer: su-ex <codeworks@supercable.onl>
# Maintainer: SpiritCroc <aur@spiritcroc.de>
# Contributor: David Mehren <david.mehren@udo.edu>

pkgname=schildichat-desktop-bin
_pkgver=1.10.4-sc.1
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="SchildiChat is a Matrix client based on Element with a more traditional instant messaging experience."
arch=('x86_64')
url="https://schildi.chat"
license=('Apache')
depends=('sqlcipher')
provides=('schildichat-desktop')
conflicts=('schildichat-desktop')
source=("https://github.com/SchildiChat/schildichat-desktop/releases/download/v${_pkgver}/schildichat-desktop_${_pkgver}_amd64.deb"
        "schildichat-desktop.sh")
sha256sums=('aa65d855feb278f7bd6928542a5e4c949af842395b449829c6a9363dd1eccdc8'
            '560220747aa96f858b8a6a23b53aead434d71633f9078cbd7ff945ddc3990a7c')

package() {
  msg2 "Extracting the data.tar.xz..."
  bsdtar -xf data.tar.xz -C "$pkgdir/"
  install -Dm755 "${srcdir}"/schildichat-desktop.sh "${pkgdir}"/usr/bin/schildichat-desktop
}

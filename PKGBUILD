# Maintainer: Bilal ELmoussaoui <bil.elmoussaoui@gmail.com>

pkgname=whatsapp-desktop
_pkgbase=Whatsapp-Desktop
pkgrel=1
pkgver=0.3.13
_pkgver="v$pkgver"
pkgdesc="Unofficial whatsapp web desktop client. Build with Electron."
url="https://github.com/Enrico204/Whatsapp-Desktop"
provides=('whatsapp-desktop')
arch=('x86_64')
license=('MIT')
depends=('libnotify' 'gconf')
source=(
  "${url}/releases/download/${_pkgver}/Whatsapp-linux-x64.tar.gz"
  "whatsapp-desktop.desktop"
  "whatsapp-desktop.png"
)
sha256sums=(
  '9fcfe5728c867fb5605d3e08b248dcd86725236baabccaa3f8fb12e188a4ed68'
  '8153a94ecaff2f7466f1621571505a1f55135299cdcf4604fdfd2e7805cb94dc'
  'c128bdf1366f26b203c2a97b1284d66bd28d63c45812a7456385e1bf4afa27e4'
)
package() {
  install -d "$pkgdir"/opt
  cp -R "$srcdir"/WhatsApp-linux-x64 "$pkgdir"/opt/Whatsapp

  install -d "$pkgdir"/usr/bin
  ln -sf ../../opt/Whatsapp/WhatsApp "$pkgdir"/usr/bin/Whatsapp

  install -D -m644 "./whatsapp-desktop.desktop" "${pkgdir}/usr/share/applications/whatsapp-desktop.desktop"
  install -D -m644 "./whatsapp-desktop.png" "${pkgdir}/usr/share/pixmaps/whatsapp-desktop.png"
}

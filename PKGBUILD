# Maintainer: Petr Mrázek <petr@mojang.com>
pkgname=minecraft-launcher-beta
pkgver=2.2.1262
pkgrel=1
pkgdesc="Official Minecraft Launcher Beta"
arch=('x86_64')
url="https://mojang.com/"
license=('All rights reserved')
depends=('java-runtime' 'xorg-xrandr' 'libxss' 'libx11' 'libxcb' 'alsa-lib' 'gtk2' 'gtk3' 'libxtst' 'nss')
optdepends=('flite: narrator support')
conflicts=('minecraft-launcher')
source=(
https://launcher.mojang.com/download/linux/x86_64/minecraft-launcher_${pkgver}.tar.gz
minecraft-launcher.desktop
https://launcher.mojang.com/download/minecraft-launcher.svg
)
sha256sums=(
'ccb238bb00a8b2e8b43edfbf5d2317194e81287f943ceed6f47cdf8a2da3d325'
'677e2442a1ae83cc58d8d403666e508129e97dbed37fdfafdceac6101dc0dee7'
'35c2bcaeb09fa4b8864e9422fd66bf60847706f8b4400ec4a66ba6436b101f71'
)

build() {

  cd "$srcdir/minecraft-launcher"

}

package () {

  cd "$pkgdir"

  mkdir -p "opt"
  mkdir -p "usr/bin"

  install -Dm644 "$srcdir/minecraft-launcher.svg"    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/minecraft-launcher.svg"

  install -Dm644 "$srcdir/minecraft-launcher.desktop"    "$pkgdir/usr/share/applications/minecraft-launcher.desktop"

  cp -Rv "$srcdir/minecraft-launcher" "$pkgdir/opt/minecraft-launcher"
  ln -s "/opt/minecraft-launcher/minecraft-launcher" "$pkgdir/usr/bin/minecraft-launcher"

}

# Maintainer: Martin Müllenhaupt <mm+aur.archlinux.org@netlair.de>
pkgname=faf-ice-adapter
pkgver=5.5.0
pkgrel=1
epoch=0
pkgdesc="A P2P connection proxy for Supreme Commander: Forged Alliance using ICE"
url="http://www.faforever.com/"
arch=('x86_64')
license=('GPL3')
groups=()
depends=('nodejs')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/FAForever/ice-adapter/releases/download/v$pkgver/faf-ice-adapter-linux64-v$pkgver.tar.xz")
sha256sums=('a34f12d9ce428d5702c07b6b356e8e4afacd7723f59a42a493518a7845d9266b')
noextract=()
validpgpkeys=()

package() {
  mkdir -p "$pkgdir/usr/lib"
  cp -r "./faf-ice-adapter" "$pkgdir/usr/lib/faf-ice-adapter"
  mkdir -p "$pkgdir/usr/bin"
  cd "$pkgdir/usr/bin" && ln -s "../lib/faf-ice-adapter/faf-ice-adapter.js" "./faf-ice-adapter"
  chmod +x "./faf-ice-adapter"
}

# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=hqplayer4
_debpkgver=4.8.0-26
pkgver=4.8.0
pkgrel=3
pkgdesc="The high-end upsampling multichannel software HD-audio player"
arch=('x86_64')
url="http://www.signalyst.com/consumer.html"
license=('custom')
depends=('glibc' 'gcc-libs' 'libx11' 'qt5-base' 'qt5-script' 'qt5-quickcontrols' 'qt5-quickcontrols2' 'qt5-svg' 'qt5-declarative' 'qt5-graphicaleffects' 'qt5-charts' 'libmicrohttpd' 'alsa-lib' 'flac')
optdepends=('evince: hqplayer manual reading')
source=("http://www.signalyst.eu/bins/hqplayer/focal/hqplayer4desktop_"$_debpkgver"_amd64.deb")
sha256sums=('4fd8424f6842d2e5a25c1b8cf6fdad227037dccc318982f8bb2a6d08e968f362')

package() {
 cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
  install -Dm644 "$pkgdir/usr/share/doc/hqplayer4desktop/copyright" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  rm "$pkgdir/usr/share/doc/hqplayer4desktop/copyright"
}

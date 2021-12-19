# Maintainer: sc44 <fullpower1 at gmx dot de>

pkgname=streamrecorder
_pkgname=Stream-Recorder
pkgver=1.36
pkgrel=1
pkgdesc="Simple web viewer and recorder"
url="https://github.com/sc44/Stream-Recorder"
arch=('any')
license=('GPL3')
depends=('python' 'tk' 'ffmpeg') 
optdepends=('mpv' 'smplayer' 'vlc' 'celluloid' 'mplayer' 'gnome-mplayer')
source=("https://github.com/sc44/Stream-Recorder/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('e3d5642c40245bb2c88c8800a1400ed682c4d79c58b66f4027c995d8a8bbc262')
package() {
  cd "$srcdir"/"$_pkgname"-"$pkgver"
  install -Dm 755 srecorder.py "$pkgdir/usr/bin/srecorder.py"
  install -Dm 644 srecorder.desktop -t "${pkgdir}/usr/share/applications"
  install -Dm 644 srecorder.png -t "${pkgdir}/usr/share/icons/hicolor/128x128/apps"
}

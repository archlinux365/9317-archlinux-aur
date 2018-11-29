# Maintainer: Bleuzen <supgesu at gmail dot com>

pkgname=ffaudioconverter
pkgver=0.6.1
pkgrel=1
pkgdesc="Simple FFmpeg DnD GUI for converting audio files"
arch=('i686' 'x86_64')
url="https://github.com/Bleuzen/FFaudioConverter/"
license=(MIT)
depends=('qt5-base' 'ffmpeg')
source=("https://github.com/Bleuzen/FFaudioConverter/releases/download/v$pkgver/FFaudioConverter-$pkgver.tar.xz"
        "$pkgname-LICENSE::https://raw.githubusercontent.com/Bleuzen/FFaudioConverter/master/LICENSE"
        "ffaudioconverter.desktop")
sha256sums=('ee69074549e2474866e7162cb0eafde820adac2081b9856b2b47a5dd6a5f5d9f'
            '874f26a02f71289a8ed6d69708ba8ee3ee27b3b13615cb99a09f5f74f76c1673'
            '46b3b2691f4d666809c6155aacf470c84c826099a5a9a304208abdb60dabb953')

build() {
  ./build.sh
}

package() {

  install -D build/dist/FFaudioConverter "$pkgdir/usr/bin/ffaudioconverter"
  install -D $pkgname-LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  
  mkdir -p "$pkgdir/usr/share/applications/"
  install -D ffaudioconverter.desktop "${pkgdir}/usr/share/applications/"
}

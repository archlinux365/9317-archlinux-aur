# Maintainer: Marcin Wieczorek <marcin@marcin.co>
pkgname=minecraft-shiginima
pkgver=3.000
pkgrel=1
pkgdesc="ShiginimaSE Launcher - Sponge Edition"
url="http://teamshiginima.com/"
arch=('x86_64' 'i686')
license=('Custom')
depends=('java-runtime')
source=("http://kosz.marcin.co/ShiginimaSE_v3000.zip" "icon.png" "shiginima.desktop")
md5sums=('5a741eeb344b25519f928e2da6c10f08'
         '02fafe5e4429ca7aecac5610026f0f86'
         'eb3c3b3aa91f39eb4c54ba0d6a8da180')

package() {
  cd $srcdir

  cp "ShiginimaSE_v3000/OS X and Linux/Shiginima Launcher SE v3.000.jar" "shiginima.jar"

  mkdir -p "${pkgdir}/opt/shiginima/"

  install -D -m644 "shiginima.jar" "${pkgdir}/opt/shiginima/"
  install -D -m644 "shiginima.desktop" "${pkgdir}/usr/share/applications/shiginima.desktop"
  install -D -m644 "icon.png" "${pkgdir}/usr/share/pixmaps/shiginima.png"
}

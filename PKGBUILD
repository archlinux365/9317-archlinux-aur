# Maintainer: Your Name <youremail@domain.com>
pkgname=nagome-electron
pkgver=1.0.0
pkgrel=1
pkgdesc="NicoNama comment viewer"
arch=('x86_64')
url="https://github.com/diginatu/nagome-electron"
license=('MIT')
depends=(gtk2 libxss libxtst gconf alsa-lib nss)
source=("https://github.com/diginatu/$pkgname/releases/download/v$pkgver/$pkgname-$pkgver.tar.xz"
"https://raw.githubusercontent.com/diginatu/$pkgname/master/images/icon.png"
"https://raw.githubusercontent.com/diginatu/nagome-electron/master/LICENSE"
"$pkgname.desktop")
md5sums=('6868eb158d107d7be05c13f120057ea8'
         'dcf67353e015d7489f5b771e0c9e8ffe'
         '726fff92b313b3d527d0075756e34892'
         '1db0c25395efc437035a1c087d308268')

package() {
  mkdir -p "$pkgdir/opt/" "$pkgdir/usr/bin"
  cp -R "$srcdir/$pkgname-$pkgver" "$pkgdir/opt/$pkgname"

  ln -s "/opt/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$srcdir/icon.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}

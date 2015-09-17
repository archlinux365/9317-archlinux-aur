# Maintainer: Ole Ernst <olebowle[at]gmx[dot]com>
pkgname=jcatgui-9kw
pkgver=1.1.9
pkgrel=1
pkgdesc='An application written to solve jobs or rather to earn credits on 9kw.eu in more comfortable way than in a browser.'
arch=('any')
url='https://sites.google.com/site/jcatgui9kw/'
license=('unknown')
depends=('bash' 'java-runtime')
makedepends=('gendesk')
source=("https://sites.google.com/site/jcatgui9kw/jCatGUI_9kw.zip")
sha256sums=('77e5362d5a01981d2cf060793ec9555ff0f0220d890060f9bf688fca5df1b295')

prepare() {
  bsdtar -xf jCatGUI_9kw.jar
  gendesk -n --pkgname "$pkgname" --pkgdesc "$pkgdesc" --categories "Network;Scanning;OCR"
  echo -e "#!/bin/sh\njava -jar /usr/share/java/$pkgname/jCatGUI_9kw.jar" > $pkgname.sh
}

package() {
  install -Dm755 $pkgname.sh "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 jCatGUI_9kw.jar "$pkgdir/usr/share/java/$pkgname/jCatGUI_9kw.jar"
  install -Dm644 resources/logo/128.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
}

# Maintainer: Beej Jorgensen <beej@beej.us>
pkgname=jhelioviewer
pkgver=4.3.2
pkgrel=1
pkgdesc="Visualization software for solar image data"
arch=('x86_64')
url="http://www.jhelioviewer.org/"
license=('MPL')
depends=('java-runtime')
makedepends=()
noextract=()
source=("$pkgname"
  "${pkgname}.desktop"
  'http://swhv.oma.be/download/JHelioviewer_4_3_2_amd64.rpm'
)
md5sums=('173482ed34e21169a138e92de47656c6'
         '4cdedcd67c7371762d4ad17b7ce91a32'
         '55365a0bac62c8ff9de21f8b6acbd9dd')

package() {
  # install files
  cp -r $srcdir/opt $pkgdir

  # install icon
  install -D -m644 $srcdir/opt/JHelioviewer/.install4j/${pkgname}.png $pkgdir/usr/share/pixmaps/${pkgname}.png

  # install /usr/bin binary
  install -D -m755 $srcdir/$pkgname $pkgdir/usr/bin/$pkgname

  # install desktop entry
  install -D -m644 $srcdir/${pkgname}.desktop $pkgdir/usr/share/applications/${pkgname}.desktop
}

# vim:set ts=2 sw=2 et:

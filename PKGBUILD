# Maintainer: Jeroen Rijken <jeroen dot rijken at gmail dot com>
pkgname=archi
pkgver=4.1.0
pkgrel=1
pkgdesc="Free, open source, cross-platform tool and editor to create ArchiMate models."
arch=('x86_64')
url="http://www.archimatetool.com/"
license=('MIT')
depends=('java-runtime>=1.8')
optdepends=('webkitgtk2: hints view support')
provides=('archi')
source=(https://archimatetool.com/downloads/release/Archi-Linux64-$pkgver.tgz $pkgname.desktop)
sha256sums=('85f74cb41238ca4c030b707a1d4a5eac443c07e176051775f3f27a9321daae0d'
            'eb97e9fb2af5b15b710ddace817d08fe73055d27816aaf790a6cd6bf26643714')

package() {
  cd $srcdir
  install -d -m755 $pkgdir/{opt/,/usr/{,share/{pixmaps,applications,licenses/$pkgname,doc/$pkgname}}}
  
  install -m644 $srcdir/Archi/docs/* $pkgdir/usr/share/doc/$pkgname/
  install -m644 $srcdir/Archi/README $pkgdir/usr/share/doc/$pkgname/
  install -m644 $srcdir/Archi/icon.xpm $pkgdir/usr/share/pixmaps/$pkgname.xpm
  install -m644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  
  rm -R $srcdir/Archi/docs
  rm $srcdir/Archi/icon.xpm $srcdir/Archi/README $srcdir/Archi/Archi-Ubuntu.sh
  cp -R $srcdir/Archi/ $pkgdir/opt/$pkgname

  chmod 755 $pkgdir/opt/$pkgname/Archi
}


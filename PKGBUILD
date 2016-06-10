#Maintainer: M0Rf30

pkgname=openbazaar
pkgver=1.1.6
pkgrel=1
pkgdesc="Front-end Electron application for talking with the OpenBazaar daemon"
arch=(any)
url="http://openbazaar.org"
license=('MIT')
depends=(electron037)
makedepends=(npm)
source=(
	"https://github.com/OpenBazaar/OpenBazaar-Client/archive/v$pkgver.tar.gz"
	"$pkgname.sh"
        "$pkgname.desktop"
)
install=$pkgname.install
options=('!strip')
provides=('openbazaar')
conflicts=('openbazaar-git')
_srcfolder=OpenBazaar-Client-$pkgver

build(){
  cd $srcdir/${_srcfolder}
  npm install --production
}

package(){

msg2 "Installing Openbazaar data"
  install -dm755 $pkgdir/opt/
  cp -r $srcdir/${_srcfolder} $pkgdir/opt/openbazaar

msg2 "Installing execution script"
  install -Dm755 $srcdir/$pkgname.sh $pkgdir/usr/bin/$pkgname

  rm -rf $pkgdir/opt/$pkgname/{.git*,.eslint*,.travis*}

msg2 "Installing icons and desktop menu entry"
  install -Dm644 $srcdir/${_srcfolder}/imgs/icon.png "$pkgdir"/usr/share/pixmaps/openbazaar.png
  install -Dm644 $srcdir/$pkgname.desktop "$pkgdir"/usr/share/applications/openbazaar.desktop
}

md5sums=('bd64acf0fa6d7cf5b6d83449ef96ebf3'
         'df533ecfa50dd3287595a83d847ee8da'
         'dbca9273e9fc18a7aa5d1c395508fe60')

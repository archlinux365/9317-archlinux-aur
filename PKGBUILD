# Maintainer: Andrej Radovic <r.andrej at gmail dot com>
# Former maintainer: Jakub Maleszewski <xyz43 at me dot com>
# Contributor: A. Klitzing <andre at incubo dot de>
pkgname=gnome-manual-duplex
pkgver=0.69
pkgrel=1
pkgdesc="Utility allowing manual duplex printing"
arch=('any')
url="http://sourceforge.net/projects/g-manual-duplex/"
license=('GPL')
depends=('python2' 'python2-pycups' 'python2-gobject' 'file' 'transfig' 'netpbm' 'psutils' 'gamin')
makedepends=('gtk2')
source=(http://downloads.sourceforge.net/project/g-manual-duplex/$pkgname-$pkgver.tar.gz )
md5sums=('66e39a581ccf314e5de85fe1efabb4b9')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make || return 1
}

package () {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

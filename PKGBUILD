# Maintainer: jose <jose1711 [at] gmail (dot) com>

pkgname=diodon
arch=('i686' 'x86_64')
pkgver=1.4.0
pkgrel=1
pkgdesc="GTK+ clipboard manager"
license=('GPL')
url="https://launchpad.net/diodon"
depends=('gconf' 'libgee06' 'libpeas' 'libunique3' 'libxtst' 'dconf' 'libappindicator3' 'desktop-file-utils' 'libgee' 'zeitgeist')
makedepends=('vala')
source=("http://launchpad.net/diodon/trunk/${pkgver}/+download/${pkgname}-${pkgver}.tar.gz")
install=$pkgname.install
md5sums=('b36455c2b71fbf78374d2786eaff64fc')

build() {
cd $srcdir/${pkgname}-${pkgver}
python2 ./waf configure --prefix=/usr
python2 ./waf build $MAKEFLAGS
}

package() {
cd $srcdir/${pkgname}-${pkgver}
python2 ./waf install --destdir="$pkgdir/"
cd $pkgdir
mv usr/etc .
}

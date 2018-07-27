# Maintainer: Paul Wilk <paul.wilk@null.net>
pkgname=vision-client
pkgver=1.2.0
pkgrel=1
pkgdesc="Desktop email client for the Exchange OWA. Useful for people 
tired of using regular OWA and/or locked out of IMAP, POP3, 
regular desktop email clients etc."
arch=('i686' 'x86_64')
url="https://github.com/vlku-admin/vision-client"
license=('CC0 1.0')
depends=('xdg-utils')
source=("https://github.com/vlku-admin/vision-client/raw/master/dist/linux/vision.deb")
sha256sums=('4e6991806c4a085bb14b3e92ac32b1ca19d0de93ed03f3cbd00aacc9a021b929')

package() {
  ar xv vision.deb
  cd $srcdir
  tar xvf data.tar.xz
  cp -r opt $pkgdir
  install -vDm644 $srcdir/usr/share/applications/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -vDm644 $srcdir/usr/share/icons/hicolor/0x0/apps/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
}

# Maintainer: kevku <kevku@gmx.com>
pkgname=qesteidutil
pkgver=3.12.2.1206
pkgrel=1
pkgdesc="UI application for managing smart card PIN/PUK codes and certificates"
arch=('x86_64' 'i686')
url="http://www.id.ee/"
license=('LGPL')
depends=('qt5-base' 'ccid' 'hicolor-icon-theme')
makedepends=('cmake' 'qt5-tools' 'qt5-translations')
install=qesteidutil.install
source=("https://installer.id.ee/media/ubuntu/pool/main/q/$pkgname/${pkgname}_$pkgver.orig.tar.xz")
sha256sums=('aa4d1bbfcb491a2ff576b90a245d43f6875d680cf53212b9794d4ae6a90431ec')
validpgpkeys=('43650273CE9516880D7EB581B339B36D592073D4')

build() {
  cd "$srcdir/"
  cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR="lib" -DCMAKE_INSTALL_SYSCONFDIR="/etc"
  make
}

package() {
  cd "$srcdir/"
  make DESTDIR="$pkgdir/" install
}


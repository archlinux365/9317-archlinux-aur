# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: Brad Fanella <bradfanella@archlinux.us>
# Contributor: Wittfella <wittfella@wittfella.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=qtfm
pkgver=6.0.0
pkgrel=1
pkgdesc="A lightweight file manager"
arch=('i686' 'x86_64')
url="https://github.com/rodlie/qtfm/releases"
license=('GPL')
depends=('qt5-base')
source=("https://github.com/rodlie/$pkgname/releases/download/${pkgver//_/-}/$pkgname-${pkgver//_/-}.tar.xz" make_it_build_fixes.patch)
md5sums=('b1e48dc5065f0986b59eef3c4c390b4e'
         '4d2128e6abe88e3f03a2ffc2e4700ee1')

build() {
  cd $pkgname-${pkgver//_/-}
  [[ -d build ]] || mkdir build
  cd build
  qmake CONFIG+=release PREFIX=/usr ..
  make
}

package() {
  cd $pkgname-${pkgver//_/-}/build
  make INSTALL_ROOT="${pkgdir}" install
}

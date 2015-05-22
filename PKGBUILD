# Maintainer: farseerfc <farseerfc@gmail.com> 
# Contributor: nylocx <just18@gmx.de>
# Contributor: Llumex03 <l.lumex03@gmail.com>
# Original uploader in CCR: FranzMari 
# Original uploader in AUR: á¸¶á¸·umex03
# Fixes in AUR by: ogarcia

pkgname=libqtelegram-ae
pkgver=API_18.r0.gfd03011
pkgrel=1
pkgdesc="Telegram library written in Qt based on telegram-cli code"
arch=('x86_64' 'x64')
license=('GPL3')
url=("https://launchpad.net/libqtelegram")
provides=('libqtelegram-ae')
conflicts=('libqtelegram-ae')
depends=('qt5-base' 'qt5-multimedia')
makedepends=('cmake' 'git')
source=("$pkgname"::"git+https://github.com/Aseman-Land/libqtelegram-aseman-edition.git#tag=API_18")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}
 
prepare() {
  cd $pkgname
  sed -i 's#target.path = $$PREFIX/lib/$$LIB_PATH#target.path = $$PREFIX/lib#' libqtelegram-ae.pro
  mkdir -p build
}
 
build() {
  cd $pkgname/build
  qmake-qt5 -r .. PREFIX=/usr 
  make
} 
 
package() {
  cd $pkgname/build
  make INSTALL_ROOT="$pkgdir" install
}

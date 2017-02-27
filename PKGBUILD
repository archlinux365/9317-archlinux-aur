# Maintainer: Justin Gross <jgross.biz@gmail.com>

pkgname=pidgin-mam-git
pkgver=2.11.0.1.r1.g3f338ce
pkgrel=1
pkgdesc="Pidgin with Message Archive Management support"
arch=(i686 x86_64)
url="https://github.com/CkNoSFeRaTU/pidgin"
license=('GPL2')
depends=('libpurple' 'startup-notification' 'gtkspell' 'libxss' 'libsm' 'gst-plugins-base' 'gst-plugins-good' 'hicolor-icon-theme')
optdepends=('aspell: for spelling correction')
makedepends=('git' 'intltool' 'tcl')
conflicts=('pidgin')
provides=('pidgin')
source=("pidgin-mam-git::git+https://github.com/CkNoSFeRaTU/pidgin")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$pkgname"
  autoreconf -f -i
  ./configure --disable-meanwhile --disable-tk --enable-gnutls=yes
  make
}

package() {
  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir/" install
}

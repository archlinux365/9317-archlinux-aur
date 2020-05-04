# Maintainer: Brian Bidulock <bidulock@openss7.org>
pkgdesc="XDG sound themes for the X Desktop Environment"
pkgname=xde-sounds-git
_pkgname=xde-sounds
pkgver=1.0.r2.g802d565
pkgrel=1
arch=('any')
license=('GPL')
url="https://github.com/bbidulock/${_pkgname}"
groups=('xde')
provides=("${_pkgname}=${pkgver%%.r*}-${pkgrel}")
conflicts=("${_pkgname}")
depends=('glib2' 'libcanberra')
makedepends=('git' 'pkgconfig' 'flite' 'flite-voices' 'sox')
source=("$pkgname::git://github.com/bbidulock/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  cd $pkgname
  ./autogen.sh
}

build() {
 cd $pkgname
  ./configure
  make
}

package() {
  make -C ${pkgname} DESTDIR="${pkgdir}" install
}


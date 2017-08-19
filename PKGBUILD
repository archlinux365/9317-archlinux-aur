# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=libtheora-git
pkgver=1.2.0alpha1.r129.gfa5707d
pkgrel=2
pkgdesc="An open video codec developed by the Xiph.org"
arch=('i686' 'x86_64')
url="https://www.theora.org/"
license=('BSD')
depends=('glibc' 'libogg')
makedepends=('git' 'libvorbis')
provides=('libtheora')
conflicts=('libtheora')
options=('staticlibs')
source=("git+https://git.xiph.org/theora.git")
sha256sums=('SKIP')


pkgver() {
  cd "theora"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "theora"

  ./autogen.sh
  ./configure --prefix="/usr" --disable-examples
  make
}

check() {
  cd "theora"

  make check
}

package() {
  cd "theora"

  make DESTDIR="$pkgdir" install
  install -Dm644 "COPYING" "$pkgdir/usr/share/licenses/libtheora/COPYING"
}

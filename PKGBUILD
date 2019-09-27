# Maintainer: jxir <aur@jxir.de>

pkgname=qv-git
pkgver=2.0.r3.g1c245d9
pkgrel=1
pkgdesc="Quick Viewer for 2D data (images, renderings, sensor data, ...)"
arch=('x86_64')
url="https://marlam.de/qv/"
license=('MIT')
depends=('tad' 'qt5-base')
makedepends=('git')
provides=('qv')
conflicts=('qv')
source=('git+https://git.marlam.de/git/qv.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/qv"
  git describe --long --tags | sed 's/qv-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/qv"
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
}

build() {
  cd "$srcdir/qv/build"
  make
}

package() {
  cd "$srcdir/qv/build"
  make DESTDIR="$pkgdir" install
  install -Dm644 ../LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}

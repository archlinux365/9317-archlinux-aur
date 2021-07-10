# Maintainer: Alexander Couzens <lynxis@fe80.eu>
pkgname=libusb3380-git
pkgver=r15.c83d1e93eb3a
pkgrel=2
pkgdesc="USB3380 abstraction layer for libusb"
_gitname=libusb3380
arch=('armv7h' 'i686' 'x86_64')
url="https://github.com/xtrx-sdr/libusb3380"
license=('LGPL')
makedepends=('git' 'cmake')
depends=('libusb')
source=("git+$url")
md5sums=('SKIP')
provides=('libusb3380')

pkgver() {
  cd "$srcdir"/$_gitname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=12 HEAD)"
}

build() {
  mkdir -p "$srcdir"/$_gitname/build
  cd "$srcdir"/$_gitname/build

  cmake .. \
    -DBUILD_SHARED_LIBS=ON \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release

  make
}

package() {
  cd "$srcdir"/$_gitname/build

  make DESTDIR="$pkgdir" install
}


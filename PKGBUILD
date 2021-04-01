# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Sergey Malkin  <adresatt@gmail.com>

pkgname=nemu-git
pkgver=2.6.0.r34.g953e68e
pkgrel=1
pkgdesc="ncurses interface for QEMU"
arch=('i686' 'x86_64')
url="https://github.com/nemuTUI/nemu"
license=('custom:BSD')
depends=('qemu-headless' 'glibc' 'ncurses' 'sqlite' 'udev' 'libusb' 'libarchive')
makedepends=('git')
provides=('nemu')
conflicts=('nemu')
source=("git+$url.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe | tr -d v |sed 's+-+.r+' | tr - .
}

build() {
  cd "${pkgname%-git}"
  [[ -d build ]] || mkdir build
  cd build
  cmake ../
  make
}

package() {
  cd "${pkgname%-git}"/build
  make DESTDIR="$pkgdir/" install
  install -Dm644 ../LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

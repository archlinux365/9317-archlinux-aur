# For ArchLinux by Joel Porquet

pkgname=libiio
pkgver=0.15
pkgrel=1
pkgdesc='Library for interfacing with IIO devices'
arch=(i686 x86_64)
license=(GPL2)
depends=(libxml2 avahi libserialport libaio libusb)
makedepends=(cmake python)
url='https://github.com/analogdevicesinc/libiio'
source=(libiio-$pkgver.zip::https://github.com/analogdevicesinc/libiio/archive/v$pkgver.zip)
sha1sums=('c7c96dfa336e898f0beefb87597a216a4111c2d2')

build() {
  cd libiio-$pkgver
  cmake -DCMAKE_INSTALL_SBINDIR=bin -DCMAKE_INSTALL_LIBDIR=lib -DUDEV_RULES_INSTALL_DIR=/usr/lib/udev/rules.d .
  make
}

package() {
  cd libiio-$pkgver
  make DESTDIR="$pkgdir" PREFIX=/usr install
}

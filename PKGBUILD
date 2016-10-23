# Maintainer:   Razer <razer[AT]neuf[DOT]fr>
pkgname=rf24
pkgver='1.1.7.r8.gc94f877'
pkgver() {
  cd RF24
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
pkgrel=1
pkgdesc='Linux support for RF24 radio modules'
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='http://tmrh20.github.io/RF24/'
license=('MIT')
source=('git://github.com/TMRh20/RF24')
md5sums=('SKIP')

build() {
  cd "$srcdir/RF24"
  ./configure --driver=SPIDEV --prefix="$pkgdir/usr" --ldconfig=''
}

package() {
  cd "$srcdir/RF24"
  make install
}


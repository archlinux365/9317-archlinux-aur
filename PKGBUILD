# Maintainer:  pandada8 <pandada8@gmail.com>
# Contributor: Harry Jeffery <harry|@|exec64|.|co|.|uk>
# Contributor: Alex Jordan <alexander3223098@gmail.com>
pkgname=zerotier-one-latest
pkgver=1.1.2
pkgrel=1
pkgdesc="Creates virtual Ethernet networks of almost unlimited size."
arch=('i686' 'x86_64')
url="https://www.zerotier.com/index.html"
license=('GPL3')
groups=()
depends=("gcc-libs")
makedepends=()
conflicts=("zerotier-one-with-controller" "zerotier-one")
source=("https://github.com/zerotier/ZeroTierOne/archive/$pkgver.tar.gz")
sha1sums=('6869e2ecf16fd8aaeeb0d04027cc7a9ad02a98d6')

build() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  make
}

check() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  make selftest
}

package() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  mkdir -p $pkgdir/var/lib/zerotier-one $pkgdir/usr/bin $pkgdir/usr/lib/systemd/system
  install zerotier-one $pkgdir/var/lib/zerotier-one
  install ext/installfiles/linux/systemd/zerotier-one.service $pkgdir/usr/lib/systemd/system
  cd $pkgdir/usr/bin
  ln -s ../../var/lib/zerotier-one/zerotier-one zerotier-cli
  ln -s ../../var/lib/zerotier-one/zerotier-one zerotier-idtool
}

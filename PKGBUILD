# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=ldns-git
pkgver=1.7.0.r92.g9b8fa9db
pkgrel=1
pkgdesc="C library for DNS programming"
arch=('i686' 'x86_64')
url="https://www.nlnetlabs.nl/projects/ldns/about/"
license=('BSD')
depends=('glibc' 'dnssec-anchors' 'openssl')
optdepends=('libpcap: ldns-dpa tool')
makedepends=('git' 'libpcap')
provides=('ldns')
conflicts=('ldns')
options=('staticlibs')
source=("git+https://git.nlnetlabs.nl/ldns")
sha256sums=('SKIP')


pkgver() {
  cd "ldns"

  git describe --long --tags | sed 's/^release-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "ldns"

  libtoolize --copy --install
  autoreconf -fi
  ./configure \
    --prefix="/usr" \
		--sysconfdir="/etc" \
		--localstatedir="/var" \
		--with-drill \
		--with-examples \
		--with-trust-anchor="/etc/trusted-key.key"
  make
}

package() {
  cd "ldns"

  make DESTDIR="$pkgdir" install
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/ldns/LICENSE"
}

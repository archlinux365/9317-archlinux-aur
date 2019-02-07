# Maintainer: Josef Miegl <josef@miegl.cz>

pkgname=osmo-iuh-git
pkgver=0.4.0.1.g04b5b66
pkgrel=1
pkgdesc="Open Source implenentation of a HNB-GW (HomeNodeB-Gateway)"
url="http://osmocom.org/projects/osmohnbgw"
arch=('i686' 'x86_64' 'aarch64' 'armv7h')
license=(GPL)
depends=('libosmocore' 'libosmo-netif' 'libosmo-sccp' 'libasn1c' 'lksctp-tools')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
backup=('etc/osmocom/osmo-hnbgw.cfg')
source=("git+https://git.osmocom.org/${pkgname%-git}")
sha256sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname%-git}"
  echo $(git describe --always | sed 's/-/./g')
}

build() {
  cd "${srcdir}/${pkgname%-git}"
  autoreconf -i
  ./configure --prefix=/usr --sysconfdir=/etc
  make
}

package() {
  cd "${srcdir}/${pkgname%-git}"
  make DESTDIR=${pkgdir} install
}

# vim:set ts=2 sw=2 et:

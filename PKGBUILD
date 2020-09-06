# Maintainer: hexchain <i at hexchain dot org>

pkgname=mdevctl
pkgver=0.69
pkgrel=1
pkgdesc="A mediated device management utility for Linux"
url="https://github.com/mdevctl/mdevctl"
arch=('any')
license=('LGPL2.1')
depends=('bash')
source=("$pkgname-$pkgver.tar.gz::https://github.com/mdevctl/mdevctl/archive/$pkgver.tar.gz")
sha256sums=('3911cbc06975cf63b6d4a4f376d6399c3df6606c9be6fc35257c2ea552ef791e')
options+=(emptydirs)

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir" SBINDIR="\$(PREFIX)/bin" install
}

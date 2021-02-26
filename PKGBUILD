# Maintainer: JSkier, jskier at gmail dot com jskier.com
# Maintainer: Rocket Aaron, i at rocka dot me
# Created by Paul Richards (paulrichards321(at)gmail(dot)com), http://sourceforge.net/projects/resetmsmice/
pkgname=resetmsmice
pkgver=1.1.3
pkgrel=2
pkgdesc="Application to reset many MS wireless mice models to stop excessive wheel scrolling (only needed if dual booting with Windows)"
arch=('i686' 'x86_64')
url="http://sourceforge.net/projects/resetmsmice/"
license=('GPL')
depends=('libusb')
source=(http://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver.tar.gz
        resetmsmice.service)
sha512sums=('6bd36e31d53be778d9712a69356a1556075292ce45b4bfad835521da8e335ec585e4c9a2405fcabbb9528994fdf934b95ac98459c7431d83b5753ce139646d81'
            'c25a8b04f313efce4e9b70024e5ade312845ea3c599ddc7abc470843fe62de75f0cf12ff3f8506e25d732de4a0f0484f400ede6b2d997c5b28f73588dcc0190d')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr \
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  mv "${pkgdir}/usr/sbin/resetmsmice-enable-boot" "${pkgdir}/usr/bin"
  rm -r "${pkgdir}/usr/sbin"
  install -Dm644 "${srcdir}/resetmsmice.service" "${pkgdir}/usr/lib/systemd/system/resetmsmice.service"
}

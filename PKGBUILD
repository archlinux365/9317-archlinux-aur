# Maintainer: Stijn Seghers <stijnseghers at gmail dot com>

pkgname=bcm4350-firmware
pkgver=0.2
pkgrel=1
pkgdesc="Bluetooth firmware for the Broadcom BCM4350 card"
url='https://wiki.archlinux.org/index.php/Dell_XPS_13_(2016)'
arch=('any')
license=('custom:"Dell End User License Agreement — S Version"')
source=('BCM4350C5_003.006.007.0221.4688.hcd'
        'LICENSE')
md5sums=('1da6f847e82870b875a82c31c4402ae0'
         '995e79f031135e8180272775852cf68e')


package() {
    cd "$srcdir"
    install -Dm644 BCM4350C5_003.006.007.0221.4688.hcd \
        "${pkgdir}/usr/lib/firmware/brcm/BCM-0a5c-6412.hcd"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

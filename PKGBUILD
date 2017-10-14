# Maintainer: Jenya Sovetkin <e.sovetkin@gmail.com>
# Contributors: https://aur.archlinux.org/account/f4bio
pkgname=mkinitcpio-openswap
pkgver=0.1.0
pkgrel=2
pkgdesc="mkinitcpio hook to open swap at boot time"
arch=(any)
license=('unknown')
url="https://aur.archlinux.org/packages/mkinitcpio-openswap/"
depends=(mkinitcpio)
backup=('etc/openswap.conf')
install="usage.install"
source=('openswap.hook'
        'openswap.install'
        'openswap.conf')
sha256sums=('b3ba16919450c229093adfbb758b72e2b31a8cbbc25e42e47693b9d0f4cc8a5b'
            '94dd98a953bab2244215a2b20767cdc9500fc438bed9ec27cae72a73766c6b86'
            '3308f2679bb7c962d98adf2684d25390025d025e3d30bc1e773e3522311ad325')
                          

package() {  
  install -Dm 644 openswap.hook \
     "${pkgdir}/usr/lib/initcpio/hooks/openswap"
  install -Dm 644 openswap.install \
     "${pkgdir}/usr/lib/initcpio/install/openswap"
  install -Dm 644 openswap.conf \
     "${pkgdir}/etc/openswap.conf"
}

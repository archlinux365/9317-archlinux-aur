# Maintainer: Maxim Baz <$pkgname at maximbaz dot com>

pkgname=rebuild-detector
pkgver=4.0.0
pkgrel=2
pkgdesc='Detects which packages need to be rebuilt'
arch=('any')
url="https://github.com/maximbaz/${pkgname}"
license=('MIT')
depends=('parallel' 'pacutils')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/maximbaz/${pkgname}/releases/download/${pkgver}/${pkgname}.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.sig::https://github.com/maximbaz/${pkgname}/releases/download/${pkgver}/${pkgname}.tar.gz.sig")
sha256sums=('2c71e95cf61000bdbc495eaf77bebfbdc87706531e196d06e1436070fb6e9d2c'
            'SKIP')
validpgpkeys=('EB4F9E5A60D32232BB52150C12C87A28FEAC6B20')

package() {
    install -Dm755 -t "${pkgdir}/usr/bin" checkrebuild
    install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
    install -Dm644 -t "${pkgdir}/usr/share/libalpm/hooks" "${pkgname}.hook"
}

# vim:set ts=4 sw=4 et:

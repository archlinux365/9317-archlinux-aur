# Maintainer: Quentin Bourgeois <quentin+archlinux@bourgeois.eu>

pkgname=mooltipass-udev
pkgver=2017021102
pkgrel=6
pkgdesc="Udev rules to connect Mooltipass devices"
arch=('any')
url="https://github.com/bobsaintcool/${pkgname}"
license=('GPL3')

depends=('libusb'
         'udev')

validpgpkeys=('3486CBAC7F116CA71351B0D7F7181B2010660E6F')

source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.asc::${url}/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz.asc")
sha256sums=('428c8284fd9bd52a0e0b38de2b3262158090038051b16210e9ebba2bc0859f8a'
            '13bd3047396dadd7d8472184591b11639b8d87bf720b3d94435c662c2fabb749')

package() {
        cd "${srcdir}/${pkgname}-${pkgver}"

        install -Dm 644 udev/69-mooltipass.rules "${pkgdir}/usr/lib/udev/rules.d/69-mooltipass.rules"
}

# Maintainer: Adel Khial <adel.khial@gmail.com>
pkgname=ttf-nunito-sans
pkgver=1.0
pkgrel=1
pkgdesc="A well balanced sans serif font by Jaques Le Bailly."
arch=(any)
url=https://fonts.google.com/specimen/Nunito+Sans
license=(custom:OFL)
source=("Nunito_Sans.zip::https://fonts.google.com/download?family=Nunito%20Sans")
md5sums=('a1cbe6e37279e894f638d65afed7c776')

package () {
        install -Dm644 -t "${pkgdir}/usr/share/fonts/${pkgname}" "${srcdir}"/*.ttf
        install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}"/OFL.txt
}

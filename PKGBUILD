# Maintainer: Ranadeep B < mail at rnbguy dot at >

_orgname=ovrclk
_pkgname=akash
pkgname=${_pkgname}-bin
pkgver=0.16.3
pkgrel=1
pkgdesc="A secure, transparent, and peer-to-peer cloud computing network"
arch=('x86_64')
url="https://github.com/${_orgname}/${_pkgname}"
license=('Apache')
provides=(${_pkgname})
conflicts=(${_pkgname})
source=("https://raw.githubusercontent.com/${_orgname}/${_pkgname}/v${pkgver}/LICENSE")
source_x86_64=("https://github.com/${_orgname}/${_pkgname}/releases/download/v${pkgver}/${_pkgname}_${pkgver}_linux_amd64.zip")
sha256sums=('f88a0de961dddc3410a201b6174c54190fdd912310df24ea8292c675981a39cd')
sha256sums_x86_64=('4f918929cf3f958068ec1ad608613241964267207bf906bb7dee0bbe2970d2cd')

package() {
    install -Dt "${pkgdir}/usr/bin" "${srcdir}/${_pkgname}_${pkgver}_linux_amd64/${_pkgname}"
    install -m644 -Dt "${pkgdir}/usr/share/licenses/${_pkgname}" LICENSE
}

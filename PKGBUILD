# Maintainer: Alif Rachmawadi <code@subosito.com>

pkgname=snowboard
pkgver=0.6.2
pkgrel=1
pkgdesc="API blueprint parser and renderer"
arch=('x86_64')
url="https://github.com/subosito/snowboard"
license=('MIT')
source=("LICENSE")
source_x86_64=("${url}/releases/download/v${pkgver}/${pkgname}-v${pkgver}.linux-amd64.tar.gz")
sha256sums=("7735b9ba5dcaff4118d2bb06aa2dfa598ee87fe3da1de71a8b74a39c21b91191")
sha256sums_x86_64=("da70f5bd6f3de44d432c59ed558e1c51d6719017f754bbf5507efa2511b3fa8f")

package() {
  install -Dm755 "${srcdir}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

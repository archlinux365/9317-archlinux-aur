# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=shinyscreenshot
_pkgver=0.2.0
pkgname=r-${_pkgname,,}
pkgver=0.2.0
pkgrel=4
pkgdesc="Capture Screenshots of Entire Pages or Parts of Pages in 'Shiny'"
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-base64enc
  r-jsonlite
  r-shiny
  r-uuid
)
optdepends=(
  r-timevis
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('63cef8a89e59dc00b9afe596c7042ef948e71e072ee1622404428e0c18177507')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

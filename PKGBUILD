# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=SCANVIS
_pkgver=1.12.0
pkgname=r-${_pkgname,,}
pkgver=1.12.0
pkgrel=1
pkgdesc='SCANVIS - a tool for SCoring, ANnotating and VISualizing splice junctions'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('custom')
depends=(
  r
  r-iranges
  r-plotrix
  r-rcurl
  r-rtracklayer
)
optdepends=(
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e6a4fbc0855a8caf7f72a7a489c02dada3a9ae7c81c56916fa4d72a769314043')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

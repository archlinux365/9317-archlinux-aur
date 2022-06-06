# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=iSEEu
_pkgver=1.8.0
pkgname=r-${_pkgname,,}
pkgver=1.8.0
pkgrel=1
pkgdesc='iSEE Universe'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-colourpicker
  r-dt
  r-ggplot2
  r-iranges
  r-isee
  r-s4vectors
  r-shiny
  r-shinyace
  r-singlecellexperiment
  r-summarizedexperiment
)
optdepends=(
  r-airway
  r-annotationdbi
  r-biocstyle
  r-covr
  r-edger
  r-go.db
  r-htmltools
  r-igraph
  r-keggrest
  r-knitr
  r-org.hs.eg.db
  r-rmarkdown
  r-rtsne
  r-scater
  r-scran
  r-scrnaseq
  r-testthat
  r-uwot
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1cb6508375de688145696184aeea77582607b17d8cb5113d210fcca64dd713c8')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

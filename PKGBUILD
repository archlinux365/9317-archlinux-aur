# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=microbiomeExplorer
_pkgver=1.6.1
pkgname=r-${_pkgname,,}
pkgver=1.6.1
pkgrel=1
pkgdesc='Microbiome Exploration App'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-biobase
  r-biomformat
  r-broom
  r-car
  r-deseq2
  r-dplyr
  r-dt
  r-forcats
  r-heatmaply
  r-knitr
  r-limma
  r-lubridate
  r-magrittr
  r-matrixstats
  r-metagenomeseq
  r-plotly
  r-purrr
  r-rcolorbrewer
  r-readr
  r-reshape2
  r-rlang
  r-rmarkdown
  r-shiny
  r-shinycssloaders
  r-shinydashboard
  r-shinyjs
  r-shinywidgets
  r-stringr
  r-tibble
  r-tidyr
  r-vegan
)
optdepends=(
  r-testthat
  r-v8
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('8742e3da821fd89703307067b3b961f8843d18ce51e311df78cf40e08a8c8c69')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

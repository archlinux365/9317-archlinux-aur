# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=sangeranalyseR
_pkgver=1.8.0
pkgname=r-${_pkgname,,}
pkgver=1.8.0
pkgrel=1
pkgdesc='sangeranalyseR: a suite of functions for the analysis of Sanger sequence data in R'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-ape
  r-biocstyle
  r-biostrings
  r-data.table
  r-decipher
  r-dt
  r-excelr
  r-ggdendro
  r-gridextra
  r-knitr
  r-logger
  r-openxlsx
  r-phangorn
  r-plotly
  r-reshape2
  r-rmarkdown
  r-sangerseqr
  r-seqinr
  r-shiny
  r-shinycssloaders
  r-shinydashboard
  r-shinyjs
  r-shinywidgets
  r-stringr
  r-zeallot
)
optdepends=(
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('56dd4e003a973c71bcabcac1e49964bfc5eee3d1ae9d82261b8792342ca6e22c')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

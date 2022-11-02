# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ctsGE
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='Clustering of Time Series Gene Expression data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-ccapp
  r-ggplot2
  r-limma
  r-reshape2
  r-shiny
  r-stringr
)
optdepends=(
  r-biocstyle
  r-dplyr
  r-dt
  r-geoquery
  r-knitr
  r-pander
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('c5103c8e9c90cff91942ed6592a567047c799e072212a3d0c98ff0526abf36a3')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

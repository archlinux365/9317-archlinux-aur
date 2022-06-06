# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=scDblFinder
_pkgver=1.10.0
pkgname=r-${_pkgname,,}
pkgver=1.10.0
pkgrel=1
pkgdesc='scDblFinder'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-biocneighbors
  r-biocparallel
  r-biocsingular
  r-bluster
  r-delayedarray
  r-igraph
  r-s4vectors
  r-scater
  r-scran
  r-scuttle
  r-singlecellexperiment
  r-summarizedexperiment
  r-xgboost
  r-rtracklayer
  r-rsamtools
)
optdepends=(
  r-biocstyle
  r-circlize
  r-complexheatmap
  r-dplyr
  r-ggplot2
  r-knitr
  r-mass
  r-mbkmeans
  r-rmarkdown
  r-scrnaseq
  r-testthat
  r-viridislite
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('c0834495a342c6467d64dc899ba5913354ea5d53037c9be95e639950db6e2478')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

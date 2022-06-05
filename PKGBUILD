# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=deco
_pkgver=1.12.0
pkgname=r-${_pkgname,,}
pkgver=1.12.0
pkgrel=1
pkgdesc='Decomposing Heterogeneous Cohorts using Omic Data Profiling'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-ade4
  r-annotationdbi
  r-biobase
  r-biocparallel
  r-biocstyle
  r-gdata
  r-ggplot2
  r-gplots
  r-gridextra
  r-limma
  r-locfit
  r-made4
  r-rcolorbrewer
  r-reshape2
  r-scatterplot3d
  r-sfsmisc
  r-summarizedexperiment
)
optdepends=(
  r-curatedtcgadata
  r-homo.sapiens
  r-knitr
  r-multiassayexperiment
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('15cc63d465fff5a736c5cec66a22fbe8791891de91ca2f974c878d61e9fbc5a2')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

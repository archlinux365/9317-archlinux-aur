# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=SNPhood
_pkgver=1.28.0
pkgname=r-${_pkgname,,}
pkgver=1.28.0
pkgrel=1
pkgdesc='SNPhood: Investigate, quantify and visualise the epigenomic neighbourhood of SNPs using NGS data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-biocgenerics
  r-biocparallel
  r-biostrings
  r-checkmate
  r-data.table
  r-deseq2
  r-genomeinfodb
  r-genomicranges
  r-ggplot2
  r-gridextra
  r-iranges
  r-rcolorbrewer
  r-reshape2
  r-rsamtools
  r-s4vectors
  r-scales
  r-summarizedexperiment
  r-variantannotation
)
optdepends=(
  r-biocstyle
  r-corrplot
  r-knitr
  r-pryr
  r-rmarkdown
  r-snphooddata
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a2253c90fe36c6747bcf7680b8da7b82d3f124290e86adea60e2d274a28dc04e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

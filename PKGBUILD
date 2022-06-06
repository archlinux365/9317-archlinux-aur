# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=strandCheckR
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='Calculate strandness information of a bam file'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-dplyr
  r-genomeinfodb
  r-genomicalignments
  r-genomicranges
  r-ggplot2
  r-gridextra
  r-iranges
  r-magrittr
  r-reshape2
  r-rmarkdown
  r-rsamtools
  r-s4vectors
  r-stringr
  r-txdb.hsapiens.ucsc.hg38.knowngene
)
optdepends=(
  r-biocstyle
  r-knitr
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('eb80bcd23b6bb75432aa72750692905b766a0aad4d98c24f95d1fff4d3b32597')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

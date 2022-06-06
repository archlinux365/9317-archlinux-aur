# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=TFBSTools
_pkgver=1.34.0
pkgname=r-${_pkgname,,}
pkgver=1.34.0
pkgrel=1
pkgdesc='Software Package for Transcription Factor Binding Site (TFBS) Analysis'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-biocparallel
  r-biostrings
  r-bsgenome
  r-catools
  r-cner
  r-dbi
  r-dirichletmultinomial
  r-genomeinfodb
  r-genomicranges
  r-gtools
  r-iranges
  r-rsqlite
  r-rtracklayer
  r-s4vectors
  r-seqlogo
  r-tfmpvalue
  r-xml
  r-xvector
)
optdepends=(
  r-biocstyle
  r-jaspar2014
  r-jaspar2016
  r-jaspar2018
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('3c899efd9c44cb9398ecff7a6fb40fa8fd2dc9b4deaf8fd3684e9ece440ed250')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

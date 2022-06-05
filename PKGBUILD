# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=contiBAIT
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='Improves Early Build Genome Assemblies using Strand-Seq Data'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('BSD')
depends=(
  r
  r-bh
  r-biocgenerics
  r-biocparallel
  r-clue
  r-colorspace
  r-data.table
  r-diagram
  r-dnacopy
  r-exomecopy
  r-genomicalignments
  r-genomicfiles
  r-genomicranges
  r-ggplot2
  r-gplots
  r-gtools
  r-iranges
  r-rcpp
  r-reshape2
  r-rsamtools
  r-rtracklayer
  r-s4vectors
  r-tsp
)
optdepends=(
  r-biocstyle
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('930ab3207c613557376cb07c661520636be4a886fba2454b32eefaf976f357a7')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

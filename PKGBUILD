# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=HiCcompare
_pkgver=1.18.0
pkgname=r-${_pkgname,,}
pkgver=1.18.0
pkgrel=1
pkgdesc='HiCcompare: Joint normalization and comparative analysis of multiple Hi-C datasets'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-biocparallel
  r-data.table
  r-dplyr
  r-genomicranges
  r-ggplot2
  r-gridextra
  r-gtools
  r-interactionset
  r-iranges
  r-pheatmap
  r-qdnaseq
  r-rhdf5
  r-s4vectors
)
optdepends=(
  r-knitr
  r-multihiccompare
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('b9320fa7a9f10832e2ac7ade0245f85ac4c2c26edef2580078888f5e1050ee2d')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

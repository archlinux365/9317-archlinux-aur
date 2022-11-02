# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=PepsNMR
_pkgver=1.16.0
pkgname=r-${_pkgname,,}
pkgver=1.16.0
pkgrel=1
pkgdesc='Pre-process 1H-NMR FID signals'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-ggplot2
  r-gridextra
  r-matrixstats
  r-ptw
  r-reshape2
)
optdepends=(
  r-biocstyle
  r-knitr
  r-markdown
  r-pepsnmrdata
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('85964087e8bc4a349af5ad3b4fabdacc31c3130472f33116c55a7365a34c220a')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

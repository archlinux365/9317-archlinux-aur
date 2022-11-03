# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=microbiome
_pkgver=1.20.0
pkgname=r-${_pkgname,,}
pkgver=1.20.0
pkgrel=1
pkgdesc='Microbiome Analytics'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('BSD')
depends=(
  r
  r-dplyr
  r-ggplot2
  r-phyloseq
  r-reshape2
  r-rtsne
  r-scales
  r-tibble
  r-tidyr
  r-vegan
  r-compositions
)
optdepends=(
  r-biocgenerics
  r-biocstyle
  r-cairo
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1d74ab7d2ed1e786e3989bdd0a9e3c94029d615b0bb03340d6df756f7ece74c8')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

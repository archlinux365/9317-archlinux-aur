# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=sitePath
_pkgver=1.12.0
pkgname=r-${_pkgname,,}
pkgver=1.12.0
pkgrel=1
pkgdesc='Phylogenetic pathway–dependent recognition of fixed substitutions and parallel mutations'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-ape
  r-aplot
  r-ggplot2
  r-ggrepel
  r-ggtree
  r-gridextra
  r-rcolorbrewer
  r-rcpp
  r-seqinr
  r-tidytree
)
optdepends=(
  r-biocstyle
  r-devtools
  r-knitr
  r-magick
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('aefdf7ca8d8cbf2448fef2d54629488ecf42ddd8538909c0df0b7f49ef37af4f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

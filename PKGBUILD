# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=brainflowprobes
_pkgver=1.10.0
pkgname=r-${_pkgname,,}
pkgver=1.10.0
pkgrel=1
pkgdesc='Plots and annotation for choosing BrainFlow target probe sequence'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biostrings
  r-bsgenome.hsapiens.ucsc.hg19
  r-bumphunter
  r-cowplot
  r-derfinder
  r-derfinderplot
  r-genomicranges
  r-genomicstate
  r-ggplot2
  r-rcolorbrewer
)
optdepends=(
  r-biocstyle
  r-covr
  r-knitr
  r-refmanager
  r-rmarkdown
  r-sessioninfo
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('5a86a06cb1ff81cf8342c55dc629a64577766380a7fc6cc02fe12f2422e1df6f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

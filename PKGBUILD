# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=epistack
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc='Heatmaps of Stack Profiles from Epigenetic Signals'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-biocgenerics
  r-genomicranges
  r-iranges
  r-plotrix
  r-s4vectors
  r-viridislite
  r-summarizedexperiment
)
optdepends=(
  r-biocstyle
  r-biomart
  r-covr
  r-enrichedheatmap
  r-knitr
  r-magick
  r-rmarkdown
  r-rtracklayer
  r-testthat
  r-vdiffr
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('fdbefa3d4077c17863995bddd8ecc2de217dbc1233bb6991bef641a02540e31b')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

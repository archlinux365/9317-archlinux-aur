# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=pogos
_pkgver=1.16.0
pkgname=r-${_pkgname,,}
pkgver=1.16.0
pkgrel=1
pkgdesc='PharmacOGenomics Ontology Support'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-ggplot2
  r-httr
  r-ontoproc
  r-rjson
  r-s4vectors
  r-shiny
)
optdepends=(
  r-dt
  r-knitr
  r-ontologyplot
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('45be064d9c6600f6f9a8e03f2dcc4d57fa98330cbe8b25b693eb5de9d5371ffb')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

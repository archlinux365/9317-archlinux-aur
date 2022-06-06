# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ontoProc
_pkgver=1.18.0
pkgname=r-${_pkgname,,}
pkgver=1.18.0
pkgrel=1
pkgdesc='processing of ontologies of anatomy, cell lines, and so on'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-annotationdbi
  r-annotationhub
  r-biobase
  r-biocfilecache
  r-dplyr
  r-dt
  r-graph
  r-igraph
  r-magrittr
  r-ontologyindex
  r-ontologyplot
  r-rgraphviz
  r-s4vectors
  r-shiny
)
optdepends=(
  r-biocstyle
  r-celldex
  r-knitr
  r-org.hs.eg.db
  r-org.mm.eg.db
  r-rmarkdown
  r-singlecellexperiment
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d7c362d1dc5d2137361247f9aa85dbd72493925007d215faa47e7e42a63f8c07')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ensembldb
_pkgver=2.20.1
pkgname=r-${_pkgname,,}
pkgver=2.20.1
pkgrel=1
pkgdesc='Utilities to create and use Ensembl-based annotation databases'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-annotationdbi
  r-annotationfilter
  r-biobase
  r-biocgenerics
  r-biostrings
  r-curl
  r-dbi
  r-genomeinfodb
  r-genomicfeatures
  r-genomicranges
  r-iranges
  r-protgenerics
  r-rsamtools
  r-rsqlite
  r-rtracklayer
  r-s4vectors
)
optdepends=(
  r-annotationhub
  r-biocstyle
  r-bsgenome.hsapiens.ncbi.grch38
  r-ensdb.hsapiens.v86
  r-ggbio
  r-gviz
  r-knitr
  r-magrittr
  r-rmariadb
  r-rmarkdown
  r-shiny
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('9fc77f065b629d3a4e9d11420f12d44ae15b12814c33337e4f76bb67c9d179a0')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

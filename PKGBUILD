# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=SMITE
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='Significance-based Modules Integrating the Transcriptome and Epigenome'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-annotationdbi
  r-biobase
  r-bionet
  r-genelendatabase
  r-genomicranges
  r-ggplot2
  r-goseq
  r-hmisc
  r-igraph
  r-iranges
  r-keggrest
  r-org.hs.eg.db
  r-plyr
  r-reactome.db
  r-s4vectors
  r-scales
)
optdepends=(
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('2bfc90b2b7f6aec354a302f9e2389e1f81ad69b63428d7d9fbaec5ebd5ef984e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

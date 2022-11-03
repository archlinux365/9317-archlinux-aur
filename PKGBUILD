# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=phenoTest
_pkgver=1.46.0
pkgname=r-${_pkgname,,}
pkgver=1.46.0
pkgrel=1
pkgdesc='Tools to test association between gene expression and phenotype in a way that is efficient, structured, fast and scalable. We also provide tools to do GSEA (Gene set enrichment analysis) and copy number variation.'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-annotate
  r-annotationdbi
  r-biobase
  r-biomart
  r-bma
  r-category
  r-ellipse
  r-genefilter
  r-ggplot2
  r-gplots
  r-gseabase
  r-heatplus
  r-hgu133a.db
  r-hmisc
  r-hopach
  r-limma
  r-xtable
)
optdepends=(
  r-go.db
  r-gseabase
  r-org.ce.eg.db
  r-org.dm.eg.db
  r-org.hs.eg.db
  r-org.mm.eg.db
  r-org.rn.eg.db
  r-parallel
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('236093e81df82981913f02057db2ad33ce94e0f1d06a9dbd56493bfab05d8f65')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=GDCRNATools
_pkgver=1.16.6
pkgname=r-${_pkgname,,}
pkgver=1.16.6
pkgrel=1
pkgdesc='GDCRNATools: an R/Bioconductor package for integrative analysis of lncRNA, mRNA, and miRNA data in GDC'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocparallel
  r-biomart
  r-clusterprofiler
  r-deseq2
  r-dose
  r-dt
  r-edger
  r-genomicdatacommons
  r-ggplot2
  r-gplots
  r-jsonlite
  r-limma
  r-org.hs.eg.db
  r-pathview
  r-rjson
  r-shiny
  r-survminer
  r-xml
)
optdepends=(
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('3bab5c9c64817584a410c1916dae760db5311d1b8ae3726e033cbc10ce037c7e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

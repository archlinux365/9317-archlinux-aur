# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DrugVsDisease
_pkgver=2.40.0
pkgname=r-${_pkgname,,}
pkgver=2.40.0
pkgrel=1
pkgdesc='Comparison of disease and drug profiles using Gene set Enrichment Analysis'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-affy
  r-annotate
  r-arrayexpress
  r-biocgenerics
  r-biomart
  r-cmap2data
  r-drugvsdiseasedata
  r-geoquery
  r-hgu133a.db
  r-hgu133a2.db
  r-hgu133plus2.db
  r-limma
  r-qvalue
  r-runit
  r-xtable
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('bca45a7eb469cacaac23a0f0c3bfe833bc97a2e7170c0ac53bac45d618f2b98f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# system requirements: kallisto
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=BgeeCall
_pkgver=1.12.2
pkgname=r-${_pkgname,,}
pkgver=1.12.2
pkgrel=1
pkgdesc='Automatic RNA-Seq present/absent gene expression calls generation'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biomart
  r-biostrings
  r-data.table
  r-dplyr
  r-genomicfeatures
  r-jsonlite
  r-rhdf5
  r-rslurm
  r-rtracklayer
  r-sjmisc
  r-tximport
)
optdepends=(
  r-annotationhub
  r-httr
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('34f25a8568ce68b3f3d22a607b90f3deab3520bb8bd0701665a4d6523cafda50')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

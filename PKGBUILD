# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MEAL
_pkgver=1.26.0
pkgname=r-${_pkgname,,}
pkgver=1.26.0
pkgrel=1
pkgdesc='Perform methylation analysis'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-genomicranges
  r-ggplot2
  r-gviz
  r-iranges
  r-isva
  r-limma
  r-matrixstats
  r-minfi
  r-missmethyl
  r-multidataset
  r-permute
  r-s4vectors
  r-smartsva
  r-summarizedexperiment
  r-vegan
)
optdepends=(
  r-biocstyle
  r-brgedata
  r-illuminahumanmethylation450kanno.ilmn12.hg19
  r-illuminahumanmethylationepicanno.ilm10b2.hg19
  r-knitr
  r-minfidata
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('0eeb962452b9811d0ccb8ccc19662ed6f0ba8f70ab89c61fdb7c0dd985532db4')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

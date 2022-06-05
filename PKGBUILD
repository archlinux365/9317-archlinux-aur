# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=CountClust
_pkgver=1.21.0
pkgname=r-${_pkgname,,}
pkgver=1.21.0
pkgrel=3
pkgdesc='Clustering and Visualizing RNA-Seq Expression Data using Grade of Membership Models'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-cowplot
  r-flexmix
  r-ggplot2
  r-gtools
  r-limma
  r-maptpx
  r-picante
  r-plyr
  r-reshape2
  r-slam
  r-squarem
)
optdepends=(
  r-biobase
  r-biocstyle
  r-devtools
  r-kableextra
  r-knitr
  r-rcolorbrewer
  r-roxygen2
  r-xtable
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('580fce08ae67513398fc6c37b3e8c6341201b928bb23589c90e07379a74cfd9e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

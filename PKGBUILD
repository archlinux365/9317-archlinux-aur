# system requirements: C++11, GNU make
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DropletUtils
_pkgver=1.18.0
pkgname=r-${_pkgname,,}
pkgver=1.18.0
pkgrel=1
pkgdesc='Utilities for Handling Single-Cell Droplet Data'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-beachmat
  r-bh
  r-biocgenerics
  r-biocparallel
  r-delayedarray
  r-delayedmatrixstats
  r-dqrng
  r-edger
  r-genomicranges
  r-hdf5array
  r-iranges
  r-r.utils
  r-rcpp
  r-rhdf5
  r-rhdf5lib
  r-s4vectors
  r-scuttle
  r-singlecellexperiment
  r-summarizedexperiment
  gcc
  make
)
optdepends=(
  r-biocstyle
  r-droplettestfiles
  r-jsonlite
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('512f30bf3eefe901bb02b9e8ee0d2025589e437221da32da27d6cc0a05673908')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

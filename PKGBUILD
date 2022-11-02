# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Travel
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='An utility to create an ALTREP object with a virtual pointer'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-rcpp
  fuse2
  fuse3
  gcc
)
optdepends=(
  r-biocstyle
  r-inline
  r-knitr
  r-parallel
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('eff1e1ba219032d9a62d8ed02566cd12327a95ac432b5a0302c8ff47284c9b1c')

prepare() {
  sed -i "7i #include <cstddef>" "${_pkgname}/src/class_Cache_block.h"
  tar cfz "${_pkgname}.tar.gz" "${_pkgname}"
}

build() {
  #R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
  R CMD INSTALL ${_pkgname}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

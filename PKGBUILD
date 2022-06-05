# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DelayedTensor
_pkgver=1.2.0
pkgname=r-${_pkgname,,}
pkgver=1.2.0
pkgrel=1
pkgdesc='R package for sparse and out-of-core arithmetic and decomposition of Tensor'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocsingular
  r-delayedarray
  r-delayedrandomarray
  r-einsum
  r-hdf5array
  r-irlba
  r-rtensor
)
optdepends=(
  r-biocstyle
  r-dplyr
  r-knitr
  r-magrittr
  r-markdown
  r-reticulate
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a17c0f2808a263e19c8cce46a72b8fdee2ffceea9c2b92507fc15456b28a4cdd')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

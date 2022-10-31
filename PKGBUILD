# system requirements: GNU GSL
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=RcppGSL
_pkgver=0.3.12
pkgname=r-${_pkgname,,}
pkgver=0.3.12
pkgrel=1
pkgdesc="'Rcpp' Integration for 'GNU GSL' Vectors and Matrices"
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-rcpp
  gsl
)
optdepends=(
  r-tinytest
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('9504effd4929101c20de2852c62180ae5e70bb2bbabcce2f5c7c02f641e3b9e2')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

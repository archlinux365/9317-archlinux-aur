# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=LungCancerACvsSCCGEO
_pkgver=1.33.0
pkgname=r-${_pkgname,,}
pkgver=1.33.0
pkgrel=1
pkgdesc='A lung cancer dataset that can be used with maPredictDSC package for developing outcome prediction models from Affymetrix CEL files.'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
)
source=("https://bioconductor.org/packages/release/data/experiment/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d1988b88cf42ca00acd6ab91b9f08e23512170c73a48a3e568e87f9e3348761f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MAIT
_pkgver=1.32.0
pkgname=r-${_pkgname,,}
pkgver=1.32.0
pkgrel=1
pkgdesc='Statistical Analysis of Metabolomic Data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-agricolae
  r-camera
  r-caret
  r-e1071
  r-gplots
  r-pls
  r-plsgenomics
  r-rcpp
  r-xcms
)
optdepends=(
  r-faahko
  r-rgl
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e4e9f291ff807bff8365465acc0c22954ce84c3da59db04a67c42ec4e40ab644')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Autotuner
_pkgver=1.7.0
pkgname=r-${_pkgname,,}
pkgver=1.7.0
pkgrel=2
pkgdesc='Automated parameter selection for untargeted metabolomics data processing'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-assertthat
  r-biobase
  r-entropy
  r-msnbase
  r-mzr
  r-rcolorbrewer
  r-scales
)
optdepends=(
  r-covr
  r-devtools
  r-knitr
  r-mtbls2
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1435fc2ffe16942d5dc2642f645c63d2c56ad28434441c49424077bb8c7e074c')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

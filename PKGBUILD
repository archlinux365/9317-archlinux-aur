# Maintainer: Hu Butui <hot123tea123@gmail.com>

_pkgname=effectsize
_pkgver=0.8.2
pkgname=r-${_pkgname,,}
pkgver=0.8.2
pkgrel=1
pkgdesc='Indices of Effect Size and Standardized Parameters'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-bayestestr
  r-insight
  r-parameters
  r-performance
)
optdepends=(
  r-afex
  r-bayesfactor
  r-boot
  r-brms
  r-car
  r-correlation
  r-covr
  r-dplyr
  r-emmeans
  r-gamm4
  r-ggplot2
  r-knitr
  r-lavaan
  r-lm.beta
  r-lme4
  r-lmertest
  r-mass
  r-mediation
  r-mgcv
  r-modelbased
  r-mumin
  r-performance
  r-pscl
  r-rmarkdown
  r-rms
  r-rstanarm
  r-rstantools
  r-see
  r-spelling
  r-testthat
  r-tidymodels
  r-tidyr
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('6ce2b2abb16cf918fd9429e54d6688388ef9b9e543a051da38ad9236efde73c5')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

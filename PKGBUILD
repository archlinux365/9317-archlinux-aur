# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=benchmarkmeData
_pkgver=1.0.4
pkgname=r-${_pkgname,,}
pkgver=1.0.4
pkgrel=4
pkgdesc="Data Set for the 'benchmarkme' Package"
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-dplyr
  r-tibble
)
optdepends=(
  r-benchmarkme
  r-covr
  r-dt
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('6e0768db1c783d2fa84d5214f3d8024dc9c69c7cc4d108059fa652fcd4949bd8')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

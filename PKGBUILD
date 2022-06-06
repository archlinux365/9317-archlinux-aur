# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=qualV
_pkgver=0.3-4
pkgname=r-${_pkgname,,}
pkgver=0.3.4
pkgrel=4
pkgdesc='Qualitative Validation Methods'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('ab10da9f4b330364951ea000aaa35f2b4a7ca0945586615869a80428d4fe7266')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

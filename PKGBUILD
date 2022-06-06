# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=registry
_pkgver=0.5-1
pkgname=r-${_pkgname,,}
pkgver=0.5.1
pkgrel=4
pkgdesc='Infrastructure for R Package Registries'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('dfea36edb0a703ec57e111016789b47a1ba21d9c8ff30672555c81327a3372cc')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

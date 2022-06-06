# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=pvclust
_pkgver=2.2-0
pkgname=r-${_pkgname,,}
pkgver=2.2.0
pkgrel=4
pkgdesc='Hierarchical Clustering with P-Values via Multiscale Bootstrap Resampling'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
optdepends=(
  r-mass
  r-parallel
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('7892853bacd413b5a921006429641ad308a344ca171b3081c15e4c522a8b0201')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

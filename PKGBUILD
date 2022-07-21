# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=numDeriv
_pkgver=2016.8-1.1
pkgname=r-${_pkgname,,}
pkgver=2016.8.1.1
pkgrel=4
pkgdesc='Accurate Numerical Derivatives'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d8c4d19ff9aeb31b0c628bd4a16378e51c1c9a3813b525469a31fe89af00b345')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>
# Contributor: Robert Greener <me@r0bert.dev>
# Contributor: Hyacinthe Cartiaux <hyacinthe.cartiaux@free.fr>
_pkgname=ggpmisc
_pkgver=0.5.1
pkgname=r-${_pkgname,,}
pkgver=0.5.1
pkgrel=1
pkgdesc="Miscellaneous Extensions to 'ggplot2'"
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-dplyr
  r-generics
  r-ggplot2
  r-ggpp
  r-lmodel2
  r-lubridate
  r-plyr
  r-polynom
  r-quantreg
  r-rlang
  r-scales
  r-splus2r
  r-tibble
  r-confintr
)
optdepends=(
  r-broom
  r-broom.mixed
  r-gginnards
  r-ggrepel
  r-knitr
  r-nlme
  r-rmarkdown
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('11679dd3dcf84ccc3bab4cacc8498c9ec4826a0401841ff8786397168d2d08a0')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

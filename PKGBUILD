# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=survminer
_pkgver=0.4.9
pkgname=r-${_pkgname,,}
pkgver=0.4.9
pkgrel=3
pkgdesc="Drawing Survival Curves using 'ggplot2'"
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-broom
  r-dplyr
  r-ggplot2
  r-ggpubr
  r-ggtext
  r-gridextra
  r-magrittr
  r-maxstat
  r-purrr
  r-rlang
  r-scales
  r-survmisc
  r-tibble
  r-tidyr
)
optdepends=(
  r-cmprsk
  r-flexsurv
  r-knitr
  r-markdown
  r-rmarkdown
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('df1e597fd90d4dade9f1ddfd393790d4cc682bed6463ab7f6edcc9d53a07d02f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

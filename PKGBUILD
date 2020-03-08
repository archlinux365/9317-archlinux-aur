# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: frichtlm <frichtlm@gmail.com>

_cranname=tidyr
_cranver=1.0.2
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Tidy Messy Data"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=('r>=3.1' 'r-dplyr>=0.8.2' 'r-ellipsis>=0.1.0' r-glue r-magrittr r-purrr r-rcpp r-rlang r-stringi 'r-tibble>=2.1.1' 'r-tidyselect>=0.2.5' 'r-vctrs>=0.2.0' r-lifecycle)
makedepends=(gcc)
optdepends=(r-covr r-jsonlite r-knitr r-repurrrsive r-rmarkdown r-readr r-testthat)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('9118722418f48877650f6dcf9e160606')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Matt Frichtl <frichtlm@gmail.com>
# Contributor: Alex Branham <branham@utexas.edu>

_cranname=dbplyr
_cranver=2.0.0
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A 'dplyr' Back End for Databases"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=('r>=3.1' 'r-assertthat>=0.2.0' 'r-dbi>=1.0.0' 'r-dplyr>=0.8.0' 'r-glue>=1.2.0' r-lifecycle r-magrittr 'r-purrr>=0.2.5' 'r-r6>=2.2.2' 'r-rlang>=0.2.0' 'r-tibble>=1.4.2' 'r-tidyselect>=0.2.4' 'r-blob>=1.2.0' r-withr)
optdepends=(r-bit64 r-covr r-knitr r-lahman r-nycflights13 r-odbc r-rmariadb r-rmarkdown r-rpostgres r-rsqlite r-testthat)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('ecd71936ecfefbdda0fad24e52653ac9c0913e01126e467c92c8ba9de37b4069')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

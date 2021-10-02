# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: frichtlm <frichtlm@gmail.com>
# Contributor: wagnerflo <florian@wagner-flo.net>

_cranname=tibble
_cranver=3.1.5
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Simple Data Frames"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=('r>=3.1.0' 'r-ellipsis>=0.3.2' 'r-fansi>=0.4.0' 'r-lifecycle>=1.0.0' r-magrittr 'r-pillar>=1.6.2' r-pkgconfig 'r-rlang>=0.4.3' 'r-vctrs>=0.3.8')
optdepends=(r-bench r-bit64 r-blob r-cli r-covr r-crayon r-diagrammer r-dplyr r-evaluate r-formattable r-ggplot2 r-hms r-htmltools r-import r-knitr r-lubridate r-mockr r-nycflights13 r-purrr r-rmarkdown r-testthat r-tidyr r-withr)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('da6387ba683a67cd7fc2a111f6b62468e480a8078bc1867d433a40c5460edbe7')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

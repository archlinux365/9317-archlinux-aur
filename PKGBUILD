# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=cpp11
_cranver=0.2.5
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A C++11 Interface for R's C Interface"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=(r)
optdepends=(r-bench r-brio r-callr r-cli r-covr r-decor r-desc r-ggplot2 r-glue r-knitr r-lobstr r-mockery r-progress r-rmarkdown r-scales r-testthat r-tibble r-vctrs r-withr)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('6fef9306c0c3043252c987e77c99ef679b2ea46dffafae318dbeb38ad21a2e20')

build() {
  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}


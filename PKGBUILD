# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: frichtlm <frichtlm@gmail.com>

_cranname=dplyr
_cranver=1.0.6
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A Grammar of Data Manipulation"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=('r>=3.3.0' r-ellipsis r-generics 'r-glue>=1.3.2' 'r-lifecycle>=1.0.0' 'r-magrittr>=1.5' r-r6 'r-rlang>=0.4.10' 'r-tibble>=2.1.3' 'r-tidyselect>=1.1.0' 'r-vctrs>=0.3.5' 'r-pillar>=1.5.1')
optdepends=(r-bench r-broom r-callr r-covr r-dbi r-dbplyr r-knitr r-lahman r-lobstr r-microbenchmark r-nycflights13 r-purrr r-rmarkdown r-rmysql r-rpostgresql r-rsqlite r-testthat r-withr)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('088c381a19595b202d5508003168c302fb6d893c9e7164e17ddb71616162fa07')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

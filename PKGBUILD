# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=car
_cranver=3.0-10
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Companion to Applied Regression"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL2 GPL3)
depends=('r>=3.5.0' 'r-cardata>=3.0.0' r-abind 'r-pbkrtest>=0.4.4' r-quantreg r-maptools r-rio r-lme4)
optdepends=(r-alr4 r-boot r-coxme r-knitr r-leaps r-lmtest r-matrixmodels r-rgl r-sandwich r-sparsem r-survey)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('1ce316d2fee9b47c951d25d096be732489a3c9f6fc9e612a1eca2e50fb5925f1')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

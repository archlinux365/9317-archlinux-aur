# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MLInterfaces
_pkgver=1.76.0
pkgname=r-${_pkgname,,}
pkgver=1.76.0
pkgrel=1
pkgdesc='Uniform interfaces to R machine learning procedures for data in Bioconductor containers'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-annotate
  r-biobase
  r-biocgenerics
  r-fpc
  r-gbm
  r-gdata
  r-genefilter
  r-ggvis
  r-hwriter
  r-magrittr
  r-mlbench
  r-pls
  r-rcolorbrewer
  r-rcpp
  r-sfsmisc
  r-shiny
  r-threejs
)
optdepends=(
  r-ada
  r-all
  r-caret
  r-class
  r-e1071
  r-golubesets
  r-gpls
  r-hgu95av2.db
  r-hu6800.db
  r-ipred
  r-keggorthology
  r-kernlab
  r-klar
  r-lattice
  r-mboost
  r-nnet
  r-pamr
  r-parallel
  r-party
  r-randomforest
  r-som
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('453f7b0aa2a91f5e3815b9ae37fe3e0dff1dfa19a3840f089bee46d9670a2d9d')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

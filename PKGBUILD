# system requirements: GNU make
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=HDF5Array
_pkgver=1.26.0
pkgname=r-${_pkgname,,}
pkgver=1.26.0
pkgrel=1
pkgdesc='HDF5 backend for DelayedArray objects'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocgenerics
  r-delayedarray
  r-iranges
  r-rhdf5
  r-rhdf5filters
  r-rhdf5lib
  r-s4vectors
  make
)
optdepends=(
  r-biocparallel
  r-experimenthub
  r-genomicfeatures
  r-genomicranges
  r-h5vcdata
  r-runit
  r-singlecellexperiment
  r-summarizedexperiment
  r-tenxbraindata
  r-zellkonverter
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d0c47ddf50deae248f93d97c154e52ab2d3068ef4520c18d8c360a8735ad45f8')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

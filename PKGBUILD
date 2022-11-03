# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=CAEN
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Category encoding method for selecting feature genes for the classification of single-cell RNA-seq'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-poiclaclu
  r-summarizedexperiment
)
optdepends=(
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('541cc783a70729cd9fc12c652df77e587282992f97846a57a26294d5e6d6ed13')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

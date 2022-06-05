# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=breakpointR
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='Find breakpoints in Strand-seq data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('custom')
depends=(
  r
  r-biocgenerics
  r-breakpointrdata
  r-cowplot
  r-doparallel
  r-foreach
  r-genomeinfodb
  r-genomicalignments
  r-genomicranges
  r-ggplot2
  r-gtools
  r-iranges
  r-rsamtools
  r-s4vectors
)
optdepends=(
  r-biocstyle
  r-knitr
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d440dfe489191c0268d4e38ff28d84a3ee1f36def85cc8312f582683d1a4a857')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

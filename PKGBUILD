# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MMUPHin
_pkgver=1.10.1
pkgname=r-${_pkgname,,}
pkgver=1.10.1
pkgrel=1
pkgdesc='Meta-analysis Methods with Uniform Pipeline for Heterogeneity in Microbiome Studies'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-cowplot
  r-dplyr
  r-fpc
  r-ggplot2
  r-igraph
  r-maaslin2
  r-metafor
  r-tidyr
)
optdepends=(
  r-biocstyle
  r-curatedmetagenomicdata
  r-genefilter
  r-knitr
  r-magrittr
  r-phyloseq
  r-rmarkdown
  r-testthat
  r-vegan
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e5e853a4b141e02b582063c1db290084aaae6f03f2d1c94bbfe75c7fea45be0b')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

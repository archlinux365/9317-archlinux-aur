# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=CNVfilteR
_pkgver=1.10.1
pkgname=r-${_pkgname,,}
pkgver=1.10.1
pkgrel=1
pkgdesc='Identifies false positives of CNV calling tools by using SNV calls'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-assertthat
  r-biostrings
  r-copynumberplots
  r-genomeinfodb
  r-genomicranges
  r-iranges
  r-karyoploter
  r-pracma
  r-regioner
  r-rsamtools
  r-summarizedexperiment
  r-variantannotation
)
optdepends=(
  r-bsgenome.hsapiens.ucsc.hg19
  r-bsgenome.hsapiens.ucsc.hg19.masked
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('31a02e5a3838ca63cd1cc5fc199995f316af4e28aa13a9b9a650821f97fe6fe9')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

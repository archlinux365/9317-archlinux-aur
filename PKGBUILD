# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=qpcrNorm
_pkgver=1.56.0
pkgname=r-${_pkgname,,}
pkgver=1.56.0
pkgrel=1
pkgdesc='Data-driven normalization strategies for high-throughput qPCR data.'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-affy
  r-biobase
  r-limma
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('5021a796d4ea8c8589435944240e97c2fa52d2b5dca303a365feff168c4ea82a')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

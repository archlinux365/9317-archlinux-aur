# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=frmaTools
_pkgver=1.50.0
pkgname=r-${_pkgname,,}
pkgver=1.50.0
pkgrel=1
pkgdesc='Frozen RMA Tools'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-affy
  r-biobase
  r-dbi
  r-preprocesscore
)
optdepends=(
  r-affyplm
  r-frma
  r-frmaexampledata
  r-hgu133acdf
  r-hgu133afrmavecs
  r-hgu133aprobe
  r-hgu133atagcdf
  r-hgu133atagprobe
  r-hgu133plus2cdf
  r-hgu133plus2probe
  r-oligo
  r-pd.huex.1.0.st.v2
  r-pd.hugene.1.0.st.v1
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('851c2f1903f51dd40c5bae24e3ffa0df9270d3764285dc7d0e32e9c72249df48')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

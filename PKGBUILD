# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=HELP
_pkgver=1.54.0
pkgname=r-${_pkgname,,}
pkgver=1.54.0
pkgrel=1
pkgdesc='Tools for HELP data analysis'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('41affa68235628cf5c0244d97734d6f1e4dd1c927adf0c9e89ba82d4c62063ea')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:

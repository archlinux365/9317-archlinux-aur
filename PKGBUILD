# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=reshape
_pkgver=0.8.9
pkgname=r-${_pkgname,,}
pkgver=0.8.9
pkgrel=3
pkgdesc='Flexibly Reshape Data'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-plyr
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('791178b3b5f30c166ebf5910a5ab1c67b54e7023b10b6c2e2ddd1cc02a1e4048')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

# system requirements: A C++17 compiler is required, and on macOScompilation for version 11.14 is required. Optionally cmake(only when TileDB source build selected), git (only when TileDBsource build selected); on x86_64 and M1 platforms pre-builtTileDB Embedded libraries are available at GitHub and are usedif no TileDB installation is detected, and no other option tobuild or download was specified by the user.
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=tiledb
_pkgver=0.16.0
pkgname=r-${_pkgname,,}
pkgver=0.16.0
pkgrel=1
pkgdesc='Universal Storage Engine for Sparse and Dense Multidimensional Arrays'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-nanotime
  r-rcpp
)
optdepends=(
  r-bit64
  r-curl
  r-data.table
  r-knitr
  r-matrix
  r-minidown
  r-nycflights13
  r-palmerpenguins
  r-rmarkdown
  r-tibble
  r-tinytest
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d7b8859f47445aa48c0bb3b84764f0b0c729f529eb163f7d914884d5f5664580')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:

# Maintainer: peippo <christoph+aur@christophfink.com>
# Contributor: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Jooa <aur at (name) dot xyz>

_cranname=raster
_cranver=3.6-3
pkgname=r-${_cranname,,}
pkgdesc="Geographic Data Analysis and Modeling"
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL3)
pkgver=${_cranver//[:-]/.}
pkgrel=1

arch=(i686 x86_64)
depends=(
    "r-rcpp"
    "r-sp>=1.4.5"
    "r-terra>=1.6.16"
    "r>=3.5.0"
)
optdepends=(
    "r-exactextractr"
    "r-fields"
    "r-gstat"
    "r-igraph"
    "r-mass"
    "r-ncdf4"
    "r-rastervis"
    "r-sf"
    "r-tinytest"
)

source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
b2sums=("61328c56cb03123b07086e03347e9e5d2e576a7bbdb73930f44f055d07a22644082c19f88a6430e9642acd3f068af7c6c8e4d6a37e0116fd18ea924dfb43d39f")

build() {
    R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l "${srcdir}"
}

package() {
    install -dm0755 "${pkgdir}/usr/lib/R/library"
    cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"

    if [[ -f "${_cranname}/LICENSE" ]]; then
        install -Dm0644 "${_cranname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    fi
}

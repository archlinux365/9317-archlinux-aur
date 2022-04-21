# Maintainer: Pekka Ristola <pekkarr [at] protonmail [dot] com>
# Contributor: Alex Branham <branham@utexas.edu>

_cranname=geometry
_cranver=0.4.6
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Mesh Generation and Surface Tessellation"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL3)
depends=(
    qhull
    r-magic
    r-rcpp
    r-lpsolve
    r-linprog
)
makedepends=(r-rcppprogress)
checkdepends=(r-testthat)
optdepends=(
    r-spelling
    r-testthat
    r-rgl
    r-r.matlab
    r-tripack
)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('910465a8c8043faca73bcc7c81c9249b9938677ee6649468003b438a6503f5d8')

prepare() {
  cd "${_cranname}/src"

  # Build against system qhull
  rm *_r.c *_r.h qhull_ra.h
  echo -e 'PKG_LIBS = -lqhull_r\nPKG_CPPFLAGS = -I/usr/include/libqhull_r' >> Makevars

  # Skip test that fails with system qhull
  cd ../tests/testthat
  sed -i '/"convhulln throws an error with duplicated points"/a\ \ skip("Using system qhull")' \
      test-convhulln.R
}

build() {
  mkdir -p build
  R CMD INSTALL "${_cranname}" -l "${srcdir}/build"
}

check() {
  cd "${_cranname}/tests"
  R_LIBS="${srcdir}/build" NOT_CRAN=true Rscript --vanilla testthat.R
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "build/${_cranname}" "${pkgdir}/usr/lib/R/library"
}

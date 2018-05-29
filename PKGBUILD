# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=inline
_cranver=0.3.15
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-inline
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Dynamically define R functions & S4 methods with inlined C, C++ or Fortran code"
arch=('any')
url="https://cran.r-project.org/web/packages/${_cranname}/index.html"
license=('LGPL')
depends=('r' 'gcc-fortran' )



source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('8f0de494120ecd628fa7a2e6d4af98cb')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}


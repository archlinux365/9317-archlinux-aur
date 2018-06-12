# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=XML
_cranver=3.98-1.11
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-xml
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Tools for Parsing and Generating XML Within R and S-Plus"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('BSD_2_clause + file LICENSE')
depends=('r' 'libxml2')

optdepends=('r-bitops' 'r-rcurl')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('6c67f5730ada3456372520773a920b8e')
replaces=('r-cran-xml')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}


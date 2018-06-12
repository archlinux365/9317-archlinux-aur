# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=devtools
_cranver=1.13.5
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-devtools
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Tools to Make Developing R Packages Easier"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL')
depends=('r' 'r-httr>=0.4' 'r-memoise>=1.0.0' 'r-whisker' 'r-digest' 'r-rstudioapi>=0.2.0' 'r-jsonlite' 'r-git2r>=0.11.0' 'r-withr')

optdepends=('r-curl' 'r-crayon' 'r-testthat' 'r-biocinstaller' 'r-rcpp' 'r-rmarkdown' 'r-knitr' 'r-hunspell' 'r-lintr' 'r-bitops' 'r-roxygen2' 'r-evaluate' 'r-rversions' 'r-covr' 'r-gmailr')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('d090af5b6f5d990f6d422e09348caafa')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}


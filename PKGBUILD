#Maintainer: Orphan
#generated by: fordprefect <fordprefect@dukun.de>
_cranname=bitops
_cranver=1.0-6
pkgname=r-cran-$_cranname
pkgver=1.0_6
pkgrel=2
pkgdesc="R functions for bitwise operations"
url="http://cran.r-project.org/web/packages/${_cranname}/index.html"
arch=('x86_64' 'i686')
license=('GPL3')
depends=('r')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('fba16485a51b1ccd354abde5816b6bdd')
 
package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}

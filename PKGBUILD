# Maintainer: generated by script at https://github.com/zasdfgbnm/aurcran

_pkgname=git2r
_pkgnamelower=git2r
_repo='http://cran.stat.ucla.edu/'
_cran="https://cran.r-project.org/web/packages/$_pkgname/index.html"
pkgname=r-$_pkgnamelower
pkgver=0.15.0
pkgrel=1
pkgdesc='provides access to git repositories'
arch=(any)
url="https://github.com/ropensci/git2r"
license=('GPL2')
depends=('r>=3.0.2')
makedepends=('curl' 'grep' 'python-html2text')

pkgver() {
    curl "$_cran" 2>/dev/null|html2text|grep -oP '(?<=Version:).*'|grep -o '[0-9\.]*'
}

build() {
    Rscript -e "install.packages(\"$_pkgname\", lib=\"$srcdir\", repos=\"$_repo\")"
}

package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_pkgname" "$pkgdir/usr/lib/R/library"
}
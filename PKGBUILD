# Maintainer: generated by script at https://github.com/zasdfgbnm/aurcran

_pkgname=knitr
_pkgnamelower=knitr
_repo='http://cran.stat.ucla.edu/'
_cran="https://cran.r-project.org/web/packages/$_pkgname/index.html"
pkgname=r-$_pkgnamelower
pkgver=1.13
pkgrel=1
pkgdesc='a general-purpose package for dynamic report generation in r'
arch=(any)
url="http://yihui.name/knitr/"
license=('GPL')
depends=('r>3.0.2' 'r-evaluate>=0.8' 'r-digest' 'r-formatr' 'r-highr' 'r-markdown' 'r-stringr>=0.6' 'r-yaml>=2.1.5')
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
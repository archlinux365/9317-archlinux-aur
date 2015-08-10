# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>

pkgname=latex-pgfplots
pkgname_=pgfplots
pkgver=1.12.1
pkgrel=1
pkgdesc='Allows drawing normal and/or logarithmic plots directly in TeX'
arch=(any)
url=http://sourceforge.net/projects/pgfplots/
license=(GPL)
install=pgfplots.install
depends=(tetex)
conflicts=(texlive-pictures)
source=("http://downloads.sourceforge.net/project/$pkgname_/$pkgname_/$pkgver/${pkgname_}_${pkgver}.tds.zip")
md5sums=('854a2e96c52d704e9b00f61afcfc2fee')

package() {
    dest=${pkgdir}/usr/share/texmf-dist/tex/latex/$pkgname_
    install -d $dest

    cp -r doc scripts $dest
    cp -r tex/generic/$pkgname_/* $dest
    cp -r tex/latex/$pkgname_/*.sty $dest
    cp -r tex/latex/$pkgname_/libs/* $dest/libs
}

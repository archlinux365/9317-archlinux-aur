# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

_extname=languagetool
pkgname=openoffice-extension-${_extname}
pkgver=3.0
pkgrel=1
pkgdesc="An Open Source proof­reading soft­ware for English, French, German, Polish, and more than 20 other languages (Apache OpenOffice extension)"
arch=("any")
url="https://languagetool.org"
license=("LGPL2.1")
groups=("openoffice-extensions")
depends=("openoffice" "java-environment")
makedepends=("maven")
source=("https://github.com/languagetool-org/languagetool/archive/v${pkgver}.tar.gz")
md5sums=('1fef322d0571d999d6f92dd5f7d3ce1b')

build() {
    cd "${srcdir}/${_extname}-${pkgver}/"

    mvn --projects languagetool-office-extension --also-make package -DskipTests
}

package() {
    cd "${srcdir}/${_extname}-${pkgver}/${_extname}-office-extension/target/"

    _destdir="${pkgdir}/opt/openoffice4/share/extensions/${_extname}"

    install -dm755 "${_destdir}"
    unzip -q "LanguageTool-${pkgver}.zip" -d "${_destdir}"
    chmod -R g-w,o-w "${_destdir}"
}

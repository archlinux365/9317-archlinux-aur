# Maintainer: Yardena Cohen <yardenack at gmail dot com>

# check for new commits:
#   https://github.com/gorhill/uBlock/commits/master

gitname=pdf.js
pkgname=chromium-pdfjs-git
pkgver=2.0.550.52.g3b07147d9
pkgrel=1
pkgdesc="PDF viewer in Javascript, packaged as a Chromium extension"
arch=('any')
url="https://github.com/mozilla/${gitname}"
license=('GPL3')
makedepends=(git npm gulp)
source=("git+${url}.git")
sha512sums=('SKIP')

pkgver() {
    cd "${srcdir}/${gitname}"
    local ver="$(git describe --tags | sed 's|-|\.|g')"
    printf "%s" "${ver//-/.}"
}
build() {
    cd "${srcdir}/${gitname}"
    npm install
    gulp chromium
}
package() {
   mkdir -p "${pkgdir}/usr/share/${pkgname}"
   cp -dr --no-preserve=ownership "${srcdir}/${gitname}/build/chromium" "${pkgdir}/usr/share/${pkgname}"
}

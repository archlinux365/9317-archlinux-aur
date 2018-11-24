# Maintainer: Yardena Cohen <yardenack at gmail dot com>

# check for new commits:
#   https://github.com/gorhill/uBlock/commits/master

gitname=uBlock
pkgname=chromium-ublock-origin-git
pkgver=1.17.3rc2.1.g13f2b6b8
pkgrel=1
pkgdesc="An efficient blocker for Chromium"
arch=('any')
url="https://github.com/gorhill/${gitname}"
license=('GPL3')
makedepends=(git zip python)
source=(
    "git+${url}.git"
    "git+https://github.com/uBlockOrigin/uAssets.git"
)
sha512sums=('SKIP' 'SKIP')

pkgver() {
    cd "${srcdir}/${gitname}"
    local ver="$(git describe --tags | sed 's|-|\.|g')"
    printf "%s" "${ver//-/.}"
}
build() {
    cd "${srcdir}/${gitname}"
    ./tools/make-chromium.sh
}
package() {
   mkdir -p "${pkgdir}/usr/share/${pkgname}"
   cp -dr --no-preserve=ownership "${srcdir}/${gitname}/dist/build/uBlock0.chromium"/* "${pkgdir}/usr/share/${pkgname}/"
}

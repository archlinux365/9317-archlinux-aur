# Maintainer: Johannes Wienke <languitar@semipol.de>

pkgname=drawio-desktop-bin
pkgver=16.1.2
pkgrel=1
pkgdesc="Diagram drawing application built on web technology"
arch=('x86_64')
url="https://github.com/jgraph/drawio-desktop"
license=('Apache')
depends=(
    "gtk3"
    "libxss"
    "nss"
)
provides=('drawio-desktop')
conflicts=('drawio-desktop')
optdepends=()
makedepends=()
source=("${pkgname}-${pkgver}.deb::https://github.com/jgraph/drawio-desktop/releases/download/v${pkgver}/drawio-amd64-${pkgver}.deb")
sha256sums=('8c45c9e9d0a4533d16085a7206a5bbf99d94bbfa65ea6c9a86d0aad17111f8f5')

prepare() {
    cd "${srcdir}"
    /usr/bin/ar p "${pkgname}-${pkgver}.deb" data.tar.xz | bsdtar xf -
}

package() {
    cd "${srcdir}"
    cp -R opt "${pkgdir}/opt"
    cp -R usr "${pkgdir}/usr"
    chmod 4755 "${pkgdir}/opt/drawio/chrome-sandbox"
    mkdir -p "${pkgdir}/usr/bin"
    ln -sf "/opt/drawio/drawio" "${pkgdir}/usr/bin/draw.io"
    ln -sf "/opt/drawio/drawio" "${pkgdir}/usr/bin/drawio"
}

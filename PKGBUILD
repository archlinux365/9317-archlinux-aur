#Maintainer: Dylan Delgado <dylan1496@live.com>

pkgname=browservice
pkgver=0.9.5.0
pkgrel=1
pkgdesc='Browse the modern web on historical browsers'
url='https://github.com/ttalvitie/browservice'
license=('MIT')
arch=('x86_64')
options=(!strip)
depends=('wget' 'cmake' 'poco' 'pango' 'libjpeg-turbo' 'libxcb' 'libx11' 'python' 'xorg-server-xvfb' 'xorg-xauth' 'at-spi2-atk' 'alsa-lib' 'nss' 'libcups' 'libxcursor' 'libxss' 'libxcomposite' 'libxkbcommon' 'ttf-ms-fonts' 'gtkglext' 'fuse2' 'fuse3')
source=("https://github.com/ttalvitie/browservice/releases/download/v${pkgver}/browservice-v${pkgver}-x86_64.AppImage")
sha256sums=('683788c3dc50d524fa672dabde69f86fc9d265549f315a649739279cc9ece1fe')

package() {
cd "${srcdir}"
install -Dm755 browservice-v${pkgver}-x86_64.AppImage "${pkgdir}/usr/bin/browservice"
echo "Be sure to run browservice --install-verdana for optimal GUI performance."
}

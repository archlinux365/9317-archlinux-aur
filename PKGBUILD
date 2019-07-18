# Maintainer: Astro Benzene <universebenzene at sina dot com>

pkgname=wps-office-fonts
pkgver=1.0
pkgrel=1
pkgdesc="The wps-office-fonts package contains Founder Chinese fonts"
arch=(any)
url="http://wps-community.org/"
license=(custom)
depends=('fontconfig' 'xdg-font-utils')
source=("http://kdl.cc.ksosoft.com/wps-community/download/fonts/${pkgname}_${pkgver}_all.deb")
sha256sums=('497481e27a2fbb7899c9b030f978372e17467ba332c958c2fd9d1a76ec4e40df')

prepare() {
    tar -Jxf data.tar.xz
}

package() {
    cd "${srcdir}/usr/share/fonts/${pkgname%-fonts}"

    install -Dm644 -t "${pkgdir}/usr/share/fonts/${pkgname%-fonts}" *.TTF
}

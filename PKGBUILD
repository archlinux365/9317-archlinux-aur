#Maintainer: Plague-doctor <github10 <<at>> cryptolab <<dot>> net >

PN=Cyberfox
pkgname=cyberfox
pkgver=43.0
pkgrel=1
pkgdesc="Fast and privacy oriented fork of Mozilla Firefox"
arch=('x86_64')
url="https://8pecxstudios.com/"
license=('GPL')
depends=('gtk2' 'gtk3' 'libxt' 'dbus-glib' 'alsa-lib' 'hicolor-icon-theme' 'nss>=3.14.1' )
source=("${pkgname}.desktop"
        "http://downloads.sourceforge.net/project/cyberfox/Zipped%20Format/${PN}-$pkgver.en-US.linux-${arch}.tar.bz2")
md5sums=('9bfb5aaced348dd7db8c2c62cbc2150d'
         '8fd08b62aed171ea092f2b28bc6f64cd')

package() {
    install -d "$pkgdir"/{usr/bin,opt}
    mv "${PN}" "${pkgdir}/opt/${pkgname}"
    ln -s "/opt/${pkgname}/${PN}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm644 "${pkgdir}/opt/${pkgname}/browser/icons/mozicon128.png" \
                   "${pkgdir}/usr/share/pixmaps/${pkgname}-icon.png"
}

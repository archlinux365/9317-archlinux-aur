# Maintainer: Posi<posi1981@gmail.com>
pkgname=betterbird-bin
_pkgname=betterbird
pkgver=102.4.0
_build=bb21
pkgrel=1
pkgdesc="EN-US // Betterbird is a fine-tuned version of Mozilla Thunderbird, Thunderbird on steroids, if you will."
arch=('x86_64')
url="https://www.betterbird.eu/index.html"
license=('MPL2')
depends=('dbus-glib')
provides=("betterbird=${pkgver}")
conflicts=()
source=(
#    "https://www.betterbird.eu/downloads/get.php?os=linux&lang=en-US&version=release"
    "https://www.betterbird.eu/downloads/LinuxArchive/${_pkgname}-${pkgver//_/-}-${_build}.en-US.linux-x86_64.tar.bz2"
    "betterbird.desktop"
)

package() {
    install -d "${pkgdir}/opt"
    install -d "${pkgdir}/usr/bin"
    install -d "${pkgdir}/usr/share/applications"

    cp -r "${srcdir}/${_pkgname}/" "${pkgdir}/opt/${_pkgname}"
    install -m644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
    ln -s /opt/$_pkgname/betterbird "$pkgdir"/usr/bin/$_pkgname

    #icons
    for i in 16 22 24 32 48 64 128 256; do
        install -d "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/
        ln -s /opt/$_pkgname/chrome/icons/default/default$i.png \
            "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/$_pkgname.png
    done
}
sha256sums=('10b093e5c7cc94deacc6f4a0ecdf5d9d05eb3fa03ced32b44132bc4a5e5779c4'
            '45149cc69f8f2088c67513f2da612bb47510057b0fefbe59c92357513ecbc560')

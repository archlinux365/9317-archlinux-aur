# Maintainer: Yigit Sever <yigit at yigitsever dot com>
# Contributor: maniacata <maniaciachao at gmail dot com>
# Contributor: Marcin Wieczorek <marcin@marcin.co>
# Contributor: Martin Thierer <thierer@web.de>
# Contributor: Amy Wilson <awils_1[at]xsmail[dot]com>
# Contributor: Simon Doppler <dopsi[at]dopsi[dot]ch>
# Contributor: Agustin Borgna <hello[at]aborgna.com.ar>
# Contributor: Marcel Korpel <marcel[dot]korpel[at]gmail>
# Contributor: Renan Birck <renan.ee.ufsm at gmail.com>

pkgname=logisim-evolution
pkgver=3.6.1
pkgrel=1
pkgdesc='An educational tool for designing and simulating digital logic circuits (build from source)'
provides=('logisim-evolution')
conflicts=('logisim-evolution-git' 'logisim-evolution-bin')
arch=('any')
url="https://github.com/reds-heig/logisim-evolution"
license=('GPL3')
depends=('java-runtime>=9' 'hicolor-icon-theme')
makedepends=('java-environment>=9')

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/reds-heig/logisim-evolution/archive/v${pkgver}.tar.gz"
        "${pkgname}.sh")
sha256sums=('181694b68578bf0ecc9e6498e9246e49e60e926b4b047094419baf2f4bb721fb'
            'd5975cc0025905ab8a8a451ce4362ba876bed88008d3a5b2c0a7f664a85da1ba')

install=$pkgname.install

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./gradlew shadowJar
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    install -Dm644 "build/libs/logisim-evolution-${pkgver}-all.jar" \
                   "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
    install -Dm644 "support/Flatpak/com.github.reds.LogisimEvolution.xml" \
                   "${pkgdir}/usr/share/mime/packages/${pkgname}.xml"
    install -Dm644 "support/Flatpak/com.github.reds.LogisimEvolution.desktop" \
                   "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    for SIZE in 16 32 48 128 256; do
        install -Dm644 \
            "src/main/resources/resources/logisim/img/logisim-icon-${SIZE}.png" \
            "${pkgdir}/usr/share/icons/hicolor/${SIZE}x${SIZE}/apps/${pkgname}.png"
    done

    install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

    sed -e 's|Exec=.*|Exec=/usr/bin/logisim-evolution|' \
        -e 's|com.github.reds.LogisimEvolution|logisim-evolution|' \
        -i "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

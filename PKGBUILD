# Maintainer: Dawson Dias <thexerothermicsclerodermoid@gmail.com>

pkgname=flaresolverr-bin
_pkgname=flaresolverr
__pkgname=FlareSolverr
pkgver=2.0.1
pkgrel=1
pkgdesc='A proxy server to bypass Cloudflare protection'
arch=('x86_64')
url='https://github.com/FlareSolverr/FlareSolverr'
license=('MIT')
depends=('libxcursor' 'libxcomposite' 'libxdamage' 'libxi' 'libxtst' 'atk' 'at-spi2-atk' 'libcups' 'libxss' 'libxrandr' 'libdrm' 'mesa' 'alsa-lib' 'pango' 'gtk3' )
provides=('flaresolverr')
options=('!strip')
source=("https://github.com/$__pkgname/$__pkgname/releases/download/v$pkgver/$_pkgname-v$pkgver-linux-x64.zip"
        "flaresolverr.sysusers"
        "flaresolverr.tmpfiles")
sha512sums=('0311ec0b5d96353602c68f78032dcc8a509e358587c18a96bc32ed0c3cda57b1a5237c3170bba7b58133328b1aeddc79c011a00ba1109cf35643e41dc38d8124'
            '0423d10d964a187e5a153140597e7cee3a6112bf6569dfcda7848bfbce4e5660534db3bdbe4a4de9a63fbf0ecc2b874937afd94495691f76176243d2ac4b080d'
            '32d51968f2f704c06eff119c6a7fd2f4f731cad2665aa1db245660709b376d9e974b59239ef4e33efd817775678fefde6ac48c3ed2c6b4b6921a06a06007a255')

package() {
    cd "${pkgdir}"

    install -dm755 "usr/bin"
    install -dm755 "opt/${_pkgname}"

    install -Dm644 "${srcdir}/${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    rm "${srcdir}/${_pkgname}/LICENSE"

    install -Dm644 "${srcdir}/${_pkgname}/flaresolverr.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
    rm "${srcdir}/${_pkgname}/flaresolverr.service"

    cp -a "${srcdir}/${_pkgname}/"* "${pkgdir}/opt/${_pkgname}"

    chown -R flaresolverr:flaresolverr "${pkgdir}/opt/${_pkgname}"

    ln -s "/opt/${_pkgname}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"

    install -Dm644 "${srcdir}/flaresolverr.sysusers" "${pkgdir}/usr/lib/sysusers.d/${_pkgname}.conf"
    install -Dm644 "${srcdir}/flaresolverr.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${_pkgname}.conf"
}

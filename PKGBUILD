# Maintainer: Gilrain <gilrain+libre.arch A_T castelmo DOT_ re>

pkgname="asf"
pkgver="2.1.3.1"
pkgrel=1
pkgdesc="Steam cards farmer."
arch=('any')
url="https://github.com/JustArchi/ArchiSteamFarm"
license=('Apache')
depends=('mono')
changelog=changelog
backup=('opt/asf/config/ASF.json')
install=${pkgname}.install
source=("https://github.com/JustArchi/ArchiSteamFarm/releases/download/${pkgver}/ASF.zip"
        "${pkgname}.sh"
        "${pkgname}-config.sh"
        "${pkgname}.service")
sha256sums=('43db7c2729551fcb7f546a473f6fd90ab7ca296f641f55334b240f3c39109f16'
            'a5d0324c029efb1f99264e787fea26ad53953b4df59bf642bca1ffabad4027f5'
            '63b8d4718e8cc61016ef415ff418e6180102b077315f5ce77bfcab9c03433565'
            'afeee8eb3f1bafa1b0502ce6be43e5119ab73fdc228a49990c9087462c5464af')

package() {
    install -d -m 755 "${pkgdir}/opt/${pkgname}"
    cp -dpr --no-preserve=ownership *.exe config "${pkgdir}/opt/${pkgname}"

    install -D -m755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
    install -D -m755 "${srcdir}/${pkgname}-config.sh" "${pkgdir}/usr/bin/${pkgname}-config"
    install -D -m644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"

    # disable auto-updates and version checks
    sed -i 's/"AutoUpdates": true,/"AutoUpdates": false,/g' ${pkgdir}/opt/asf/config/ASF.json
    sed -i 's/"UpdateChannel": 1,/"UpdateChannel": 0,/g' ${pkgdir}/opt/asf/config/ASF.json
}

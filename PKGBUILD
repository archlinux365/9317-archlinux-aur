# Maintainer: sukanka <su975853527 at gmail dot com>

pkgname=iauto
pkgver=3.5.4
pkgrel=1
pkgdesc="Flowchart diagrams drawer"
arch=('x86_64')
url="http://www.iautodraw.com"
license=('unknown')
depends=(electron13)
makedepends=(p7zip gendesk)
source=("${pkgname}-${pkgver}.exe::https://www.iautodraw.com/static/version/IAuto%20Setup%20${pkgver}(win%2064).exe")
sha512sums=('aabf532512ac839046e55881332d0752cf2afbef0d325b590e06985d6d9ad8efea98f233690f9a9ee64746c395b3da38c7d9204602fa2fcff468d48e765c8069')

    prepare() {
    cd $srcdir
    7z e ${pkgname}-${pkgver}.exe -aoa
    7z x app-64.7z resources/   -aoa
    
#     mv resources/app.asar ${pkgname}.asar
    
    # it will not run without this, don't know why
    asar extract resources/app.asar build/
    asar pack build ${pkgname}.asar
}

package() {
    cd $srcdir/
    for res in {256x256,512-512} 
    do
        install -Dm644 build/dist/electron/static/image/icons/${res}.png \
        ${pkgdir}/usr/share/icons/hicolor/${res:0:3}x${res:0:3}/apps/${pkgname}.png
    done
    
    gendesk -f --pkgname "$pkgname" --pkgdesc "IAuto(IA) 流程可视化" --icon "${pkgname}" --categories "Utility;" --name "${pkgname}" --exec "${pkgname}"
    
    install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
    
    mkdir -p ${pkgdir}/usr/share/${pkgname}
    mv ${pkgname}.asar ${pkgdir}/usr/share/${pkgname}/
    
    # link executable
    mkdir -p ${pkgdir}/usr/bin/
    echo """#!/usr/bin/bash
electron13 /usr/share/${pkgname}/${pkgname}.asar
"""> ${pkgdir}/usr/bin/${pkgname}
    chmod a+x ${pkgdir}/usr/bin/${pkgname}

}
# vim: ts=2 sw=2 et:

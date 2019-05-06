# Maintainer: Paolo Viotti <skypixel@gmail.com>

pkgname=edumips64
pkgver=1.2.5
pkgrel=2
pkgdesc="Cross-platform educational MIPS64 CPU simulator"
arch=('any')
url="https://www.edumips.org"
license=('GPL')
depends=('java-runtime' 'javahelp2')
source=(https://github.com/lupino3/$pkgname/releases/download/v$pkgver/$pkgname-$pkgver-nodeps.jar
        $pkgname.desktop
        $pkgname.png
        $pkgname)
sha256sums=('a9638308d2b8e784d26656ac0dbf9d0756aad03693c13458a78adbf6f218dea4'
            '95ac7ee775fc01c9868fcba81b89c11bd104531c4d48316721e8a2ff9ef29922'
            '25d07c621bd61d1153e1ebf21a2d111a46ec1d74f8c8887ddade423cadbd47d4'
            '264dd0122d4ca1242a6c4cbb106ab3df0f745ddcb0bd63c1e4eb9ae5732b909d')

package() {
    cd "${srcdir}"
    install -Dm644 "${srcdir}/$pkgname-$pkgver-nodeps.jar" "${pkgdir}/usr/share/$pkgname/$pkgname.jar"
    install -Dm755 "${srcdir}/$pkgname" "${pkgdir}/usr/bin/$pkgname"

    # icon and .desktop file    
    install -Dm644 "${srcdir}/$pkgname.desktop" "${pkgdir}/usr/share/applications/$pkgname.desktop"
    install -Dm644 "${srcdir}/$pkgname.png" "${pkgdir}/usr/share/pixmaps/$pkgname.png"
}

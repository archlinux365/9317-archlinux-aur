# Maintainer: Christophe Robin <crobin@nekoo.com>
# CVS for PKGBUILD is available at https://github.com/christopherobin/pkgbuilds/tree/master/minecraft
pkgname=minecraft
pkgver=latest
pkgrel=29
pkgdesc="An open-world game whose gameplay revolves around breaking and placing blocks"
arch=(any)
license=('custom')
url="http://www.minecraft.net/"
depends=('java-runtime>=8' 'xorg-xrandr' 'ttf-font' 'libxtst')
noextract=('minecraft.jar')
source=(minecraft http://s3.amazonaws.com/Minecraft.Download/launcher/Minecraft.jar
         minecraft.desktop minecraft.png minecraft.install LICENSE)
md5sums=('34440b7ad94c02762b9cbf78c7a1e23e'
         '85273e24404cc6865805f951487b8a1e'
         'ecb1bd9b6e6305987b6fb5832ab0b468'
         'dfecf76f9db4497399f4b7c171150c89'
         'acb5828c7b9136f66c4aa6fe44950e0f'
         '6e1dc1629eb95fd813ebe1bf632d6f2d')
install='minecraft.install'

package() {
    cd "$srcdir"

    install -D -m755 "${srcdir}/minecraft"         "${pkgdir}/usr/bin/minecraft"
    install -D -m644 "${srcdir}/Minecraft.jar"     "${pkgdir}/usr/share/minecraft/Minecraft.jar"

    # Desktop launcher with icon
    install -D -m644 "${srcdir}/minecraft.desktop" "${pkgdir}/usr/share/applications/minecraft.desktop"
    install -D -m644 "${srcdir}/minecraft.png"     "${pkgdir}/usr/share/pixmaps/minecraft.png"

    # License
    install -D -m644 "${srcdir}/LICENSE"           "${pkgdir}/usr/share/licenses/minecraft/LICENSE"
}

# vim:set ts=4 sw=4 et:

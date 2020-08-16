# Maintainer: Rowisi < nomail <at> private <dot> com >

pkgname=hmcl-bin
pkgver=3.3.175
pkgrel=2
pkgdesc="A Minecraft Launcher which is multi-functional, cross-platform and popular."
arch=('any')
url="https://github.com/huanghongxun/HMCL"
license=('GPL3')
depends=('java8-openjfx')
provides=('hmcl')
conflicts=('hmcl')
source=("hmcl.desktop"
        "hmcl-launch-script"
        "craft_table.png"
        "${pkgname}-${pkgver}-${pkgrel}.jar::https://ci.huangyuhui.net/job/HMCL/lastSuccessfulBuild/artifact/HMCL/build/libs/HMCL-${pkgver}.jar")
sha1sums=('613a2483883028a52b369c27c1468fc8d31e2d5e'
          'ff8a9141b115ea7788111ce28cc462c8fd46c471'
          '635509ef81b82837fcd1f7d4b24a7d44241559c2'
          '8a5ad45429fec62b755331efcacf7c3879f2bc6f')

noextract=("${pkgname}-${pkgver}-${pkgrel}.jar")

package() {
  install -Dm755 "hmcl-launch-script" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "hmcl.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${pkgname}-${pkgver}-${pkgrel}.jar" "${pkgdir}/usr/share/java/${pkgname}/${pkgname}.jar"
  install -Dm644 "craft_table.png" "${pkgdir}/usr/share/icons/hicolor/48x48/apps/${pkgname}.png"
}

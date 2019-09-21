# Maintainer: Dmytro Meleshko <dmytro.meleshko@gmail.com>
pkgname=mindustry
pkgver=94
pkgrel=1
pkgdesc="A sandbox tower defense game written in Java"
arch=("any")
url="https://github.com/Anuken/Mindustry"
license=("GPL3")
depends=("java-runtime=8")
source=("${pkgname}-${pkgver}.jar::https://github.com/Anuken/Mindustry/releases/download/v${pkgver}/Mindustry.jar"
        "${pkgname}.desktop"
        "${pkgname}.png"
        "${pkgname}.sh")
md5sums=('ca86232057b5d037e68902b75e3f6cc8'
         'ca844794a491a7978d89ad966c28b85f'
         '2b7f48f1045810ce9892b337a00bb021'
         '76db8cba637b9345928a1327f5eb48af')
noextract=("${pkgname}-${pkgver}.jar")

package() {
  install -Dm755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm755 "${pkgname}-${pkgver}.jar" "${pkgdir}/usr/share/java/${pkgname}/Mindustry.jar"
}

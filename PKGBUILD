# Maintainer: t-ask <t-ask-aur at cixera.com>
# Co-maintainer: lehthanis <lehthanis@gmail.com>
# Co-maintainer: Rain_Shinotsu <Rain_Shinotsu@protonmail.com>
# Contributor: Oscar Morante <spacepluk@gmail.com>
# Contributor: Dragoon Aethis <dragoon@dragonic.eu>

pkgname=substance-player
pkgver=12.1.0
_build=5722
pkgrel=1
pkgdesc="PBR material preview, visualization and tweaking software."
arch=('x86_64')
url='hhttps://www.substance3d.com/'
license=('custom')
depends=('fontconfig' 'gcc-libs-multilib' 'glu' 'hicolor-icon-theme' 'libtiff4')
options=('!strip')
source=("https://download.substance3d.com/substance-player/11.x/Substance_Player-${pkgver}-${_build}-linux-x64-standard.rpm")

sha256sums=('d4bf31b9ae163183012d9d4f4d793b904df22ee1b34c9ccf30c7cd8cc850b888')

validpgpkeys=()

package() {
  mkdir -p "${pkgdir}/opt/Adobe"

  install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}/opt/Allegorithmic/Substance_Player/resources/adobe-Substance_Player.desktop"
  install -Dm644 "${srcdir}/opt/Allegorithmic/Substance_Player/resources/adobe-x.adobe.substance3d.designer.xml" "${pkgdir}/usr/share/mime/packages/adobe-x.adobe.substance.player.xml"
  install -Dm644 -t "${pkgdir}/usr/share/icons" "${srcdir}/opt/Allegorithmic/Substance_Player/resources/icons/player-256x256.png"

  mv "${pkgdir}/usr/share/icons/player-256x256.png" "${pkgdir}/usr/share/icons/allegorithmic-Substance_Player.png"
  mv "${srcdir}/opt/Allegorithmic" "${pkgdir}/opt/"
}

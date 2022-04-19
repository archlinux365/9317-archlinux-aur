# Maintainer: Richard Hillmann <richie at project0 dot de>
pkgname=awsvpnclient
pkgver=3.0.0
pkgrel=3
pkgdesc="AWS VPN Client"
arch=('x86_64')
license=('custom')
url='https://aws.amazon.com/vpn/'
source=(
  "$pkgname-$pkgver.deb::https://d20adtppz83p9s.cloudfront.net/GTK/${pkgver}/awsvpnclient_amd64.deb"
  'awsvpnclient.desktop.patch'
  'awsvpnclient.runtimeconfig.json.patch'
)
sha512sums=('acbe9a5fd0a04b18effc35993d4809b451e717eb507ff31a5f79355463d80b488e3fbd149ad781396bc3e5182346302932d69e105e6341b60ce167f8c90044ef'
            '0c32ba0b81ac1123dd6123ee2f4b7573957eab76ae40708e2acfd28b15c9b1717b63450d40bddf449e088b0cf202faac466bd4d7bd79cf2a032735190b625c20'
            '1d45e50de14b9e10b6463692df63bfb4cbedfed952022c95f05bde46ece37ac1a433b76e49f255f38b1bd67c0f0f13d2d8c963051a144553c63149e6041d6603')
depends=('xdg-utils' 'lsof')
makedepends=('xz')
options=('!strip' 'staticlibs')
install='awsvpnclient.install'

package(){
  tar -xf "${srcdir}/data.tar.xz" -C "${pkgdir}"

  # Apply patch to fix desktop file for KDE
  patch -s "${pkgdir}/usr/share/applications/awsvpnclient.desktop" "${srcdir}/awsvpnclient.desktop.patch"

  # Apply patch for broken ICU detection, no localisation
  patch -s "${pkgdir}/opt/awsvpnclient/AWS VPN Client.runtimeconfig.json" "${srcdir}/awsvpnclient.runtimeconfig.json.patch"
  patch -s "${pkgdir}/opt/awsvpnclient/Service/ACVC.GTK.Service.runtimeconfig.json" "${srcdir}/awsvpnclient.runtimeconfig.json.patch"
  # Workaround for missing compatibility of the SQL library with arch linux:
  # Intentionally break the metrics agent,
  # it will be unable to laod the dynamic lib and wont start but continue with error message
  chmod 000 "${pkgdir}/opt/awsvpnclient/SQLite.Interop.dll"

  # Permission fix
  find "${pkgdir}" -type d -exec chmod 755 {} +

  # License
  install -Dm644 "${pkgdir}/opt/awsvpnclient/Resources/LINUX-LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${pkgdir}/usr/share/doc/awsvpnclient/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/copyright"
}

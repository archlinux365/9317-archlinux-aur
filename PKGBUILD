# Maintainer: "Von Random" <von@vdrandom.org>

pkgname=tamtam
pkgver=1.1.13
pkgrel=1
pkgdesc='TamTam messenger for linux'
arch=('x86_64')
url='https://desktop.tamtam.chat/latest/'
license=('custom')
depends=('alsa-lib' 'gconf' 'gtk2' 'libsecret' 'libxss' 'libxtst' 'nss')
source=("${pkgname}-${pkgver}.deb::https://desktop.tamtam.chat/v${pkgver}/TamTam-amd64.deb")
sha256sums=('f1f0d74f6b238c45b2761e41617b1daac9e35c548d94f3d97c204371ffe16ff7')
package() {
  cd "${srcdir}"
  tar -xJC "${pkgdir}" -f data.tar.xz
  mkdir "${pkgdir}/usr/bin"
  ln -s "/opt/TamTam/tamtam-app" "${pkgdir}/usr/bin/tamtam"
}

# Maintainer: Yigit Sever <yigit at yigitsever dot com>
# Contributor: Naglis Jonaitis <naglis@mailbox.org>

pkgname=thorium-bin
pkgver=1.8.0
pkgrel=1
pkgdesc="A cross platform desktop reading app, based on the Readium Desktop toolkit"
arch=('x86_64')
license=('BSD3')
url="https://github.com/edrlab/thorium-reader"
depends=('libnotify' 'nss' 'libxss' 'xdg-utils' 'libappindicator-gtk3' 'libsecret')
_filename=EDRLab.ThoriumReader_${pkgver}_amd64.deb
options=('!strip')
source=(
  "${pkgname}.tar.gz::${url}/releases/download/v${pkgver}/${_filename}"
  ${url}/raw/v${pkgver}/LICENSE
)
sha512sums=('ee623b979f32df4777da7648339dbdb9c5d89bbd3075ccf58aa160374d9da1fd9c393ecd41160bf3f5aa5f67e23bc4b24d282a0a7bbec4257977621113f40bf1'
            'acb9c8cdd1225dd5e7874b5380cc597adf9cf32dfcebccfd18d13f36f525b56d9319734da28de5ec44a983197f91f2e80231211197b7201e4efe115972aae96a')

package() {
  tar xJf ${srcdir}/data.tar.xz -C ${pkgdir}/

  # Symlink
  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/Thorium/thorium" "${pkgdir}/usr/bin/thorium"

  # Install license
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Fix "no icon" issue (see also https://github.com/edrlab/thorium-reader/issues/1241)
  mv ${pkgdir}/usr/share/icons/hicolor/0x0 ${pkgdir}/usr/share/icons/hicolor/1024x1024
  install -Dm 644 "${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/thorium.png" "${pkgdir}/usr/share/pixmaps/thorium.png"
}

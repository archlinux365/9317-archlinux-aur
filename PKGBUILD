# Maintainer: Connor McFarlane <cm at semtex dot net>

pkgname=flexoptix
pkgver=5.11.0
pkgrel=5
pkgdesc='Flexoptix Flexbox transceiver programmer'
arch=('any')
url='https://www.flexoptix.net/en/flexoptix-app'
license=('custom')
depends=('hidapi')
makedepends=('asar')
install=flexoptix.install
_appimgname="FLEXOPTIX%20App.${pkgver}.AppImage"
source=("https://flexbox.reconfigure.me/download/electron/linux/x64/${_appimgname}"
        'https://www.flexoptix.net/skin/udev_rules/99-tprogrammer.rules'
        'disable-autoupdate.patch')
sha256sums=('363e92e776f8c3ce2aa6990607b94ca4984997189f683e1a70faf2b99c58edc3'
            '3997b9755e74c6af7da252266e8ec94313e345dee11b204857016fb51f5c2157'
            'b26dfbfd855bccb06d75cdb101c3ff378d58f9277ac35c283323144febba542e')

prepare() {
  _appdir="${srcdir}/squashfs-root"
  
  # extract appimage
  chmod +x "${srcdir}/${_appimgname}"
  "${srcdir}/${_appimgname}" --appimage-extract >/dev/null

  # use system libs
  rm -rf "${_appdir}/usr/lib"

  # upstream updates cause the update checker to fail so
  # we need to patch it out

  asar extract "${_appdir}/resources/app.asar" app-asar
  patch --forward -p0 --input="${srcdir}/disable-autoupdate.patch"
  asar pack app-asar "${_appdir}/resources/app.asar"
}

package() {
  _appdir="${srcdir}/squashfs-root"
  
  install -d "${pkgdir}/opt/flexoptix"
  install -d "${pkgdir}/usr/local/bin"
  
  # install desktop entries
  install -Dm644 "${_appdir}/flexoptix-app.desktop" "${pkgdir}/usr/share/applications/flexoptix-app.desktop"
  install -Dm644 "${_appdir}/flexoptix-app.png" "${pkgdir}/usr/share/applications/flexoptix-app.png"
  install -Dm644 "${_appdir}/usr/share/icons/hicolor/0x0/apps/flexoptix-app.png" "${pkgdir}/usr/share/icons/hicolor/0x0/apps/flexoptix-app.png"

  # clean up unused bits
  rm -rf "${_appdir}/usr" "${_appdir}/flexoptix-app.desktop" "{_appdir}/flexoptix-app.png"

  # copy application
  cp -rT "${_appdir}" "${pkgdir}/opt/flexoptix"
  chmod -R 755 "${pkgdir}/opt/flexoptix"

  # install USB udev rules
  install -D "${srcdir}/99-tprogrammer.rules" "${pkgdir}/etc/udev/rules.d/99-flexoptix.rules"

  ln -s "/opt/flexoptix/flexoptix-app" "${pkgdir}/usr/local/bin/flexoptix"
}


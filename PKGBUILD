# Maintainer(s):	remspoor <remspoor AT linuxmail DOT org>
#			Jake <ja.ke@posteo.de>

pkgname=next
pkgver=1.457
pkgrel=1
pkgdesc="CGM rc Heli Flight Simulator"
arch=('i686' 'x86_64')
url="http://www.rc-aerobatics.eu/index_e.html"
license=('custom')
optdepends=(	'joyutils: jscal, jstest, and jsattach utilities for the Linux joystick driver')

source=(	'http://www.cgm-online.com/secure_rc-heli-simulator/cgm-rc-heli-simulator-linux-x86-64bit.zip'
		'next.desktop'
		'next.sh'
		'next.LICENSE')

sha256sums=(	'a23935baa8eccb47be5d4278b0e14d20a3cc545cf4d2835ada088d23de42c973'
		'31972ec9835d29109e490a54b49865dd69084c5552344cfe2fec9b534a5fa8a2'
		'167bf2f656980495a5de69cc6fb0eb1063ddf065d021525cb73cf4e10425c2d8'
		'1c180e06f0c2cd380c10581b5c760c2e6fc94bd0d97790e16b85e8135d6f071c')

prepare() {
  # rename the original directory to something sane and remove an OSX directory
  mv "Linux x86+64bit" "${pkgname}"
  rm -r "__MACOSX"

  cd "${srcdir}/${pkgname}"

  # Remove unneeded architecture/platform dependent files
  msg2 "Removing unneeded files..."
  find . -name '.DS_Store' -exec rm {} \;

  if [ "${CARCH}" == 'i686' ]; then
    rm -r ./neXt_Data/Mono/x86_64
    rm -r ./neXt_Data/Plugins/x86_64
    rm ./neXt.x86_64
  fi
  if [ "${CARCH}" == "x86_64" ]; then
    rm -r ./neXt_Data/Mono/x86
    rm -r ./neXt_Data/Plugins/x86
    rm ./neXt.x86
  fi
}

package() {
  # Install files to ${pkgdir}
  install -dm755 "${pkgdir}/opt/${pkgname}"

  msg2 "Copying files to package directory..."
  cp -dr --no-preserve=ownership "${srcdir}/${pkgname}" "${pkgdir}/opt/"

  msg2 "Installing icon file..."
  install -Dm644 "${srcdir}/${pkgname}/neXt_Data/Resources/UnityPlayer.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  msg2 "Installing ${pkgname}.desktop file..."
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  msg2 "Installing start script..."
  install -Dm775 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

  msg2 "Installing LICENSE file..."
  install -Dm644 ${pkgname}.LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

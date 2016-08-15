# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: TDY <tdy@archlinux.info>

pkgname=foxitreader
epoch=1
pkgver=1.1.1.0602
_pkgrev=205262
pkgrel=2
pkgdesc="A fast, secure and complete PDF viewer"
arch=('i686' 'x86_64')
url="http://www.foxitsoftware.com/Secure_PDF_Reader/"
license=('custom:EULA')
makedepends=('qt-installer-framework' 'qt5-tools' 'p7zip')
depends=('desktop-file-utils' 'qt5-declarative')
source=("https://www.foxitsoftware.com/products/pdf-reader/eula.html"
        "${pkgname}.patch")
source_i686=("http://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/linux/1.x/${pkgver%.*.*}/en_us/FoxitReader${pkgver}_Server_x86_enu_Setup.run.tar.gz")
source_x86_64=("http://cdn01.foxitsoftware.com/pub/foxit/reader/desktop/linux/1.x/${pkgver%.*.*}/en_us/FoxitReader${pkgver}_Server_x64_enu_Setup.run.tar.gz")
sha256sums=('738fc621a727e0429b9c50580b3c166776797f925f2819037d1414dad0b95f6a'
            '2111205034f47ba57e1fa328e3f190f9f33c8680927cc9a0492ca98cff0107b3')
sha256sums_i686=('355d5cdf82fe4b970bd90d0da94013a28d62527f4476692b8c5edf2e1c66e4c3')
sha256sums_x86_64=('64c3c222f9fde04b373b17676182f5ec45d86872f2ed506d3ae8debf6d0a83e8')

build() {
  # Clean installer dir
  if [ -d "${pkgname}-installer" ]
  then
    rm -rf "${pkgname}-installer"
  fi
  # Decompress .run installer
  if [ "${CARCH}" = 'x86_64' ]
  then
    _file_run="FoxitReader.enu.setup.${pkgver}(r${_pkgrev}).x64.run"
  else
    _file_run="FoxitReader.enu.setup.${pkgver}(r${_pkgrev}).x86.run"
  fi
  devtool --dump "${pkgname}-installer" "${_file_run}"
}

package() {
  cd "${pkgname}-installer/metadata/Install Foxit Reader"
  # Decompress files
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}"
  for file in *.7z
  do
    7z x -o"${pkgdir}/usr/lib/${pkgname}" ${file} > /dev/null
  done
  # Apply final patches
  cd "${pkgdir}"
  patch -p1 -i "${srcdir}/${pkgname}.patch"
  # Remove useless files
  cd "${pkgdir}/usr/lib/${pkgname}"
  rm "lib/.directory" "Activation" "Activation.desktop" "Activation.sh" \
     "countinstalltion" "countinstalltion.sh" \
     "installUpdate" "ldlibrarypath.sh" \
     "maintenancetool.sh" "Uninstall.desktop" \
     "Update.desktop" "updater" "updater.sh" \
     "manual/en_us/FoxitReader1.0_QuickGuide_Linux.pdf" \
     "manual/en_us/FoxitReader1.0_QuickGuide_OSX.pdf" \
     "manual/en_us/FoxitReader1.1_QuickGuide_OSX.pdf"
  # Install icon and desktop files
  install -m 755 -d "${pkgdir}/usr/share/pixmaps"
  install -m 644 "images/FoxitReader.png" \
    "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -m 755 -d "${pkgdir}/usr/share/applications"
  install -m 755 "FoxitReader.desktop" \
    "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  # Install license file
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "${srcdir}/eula.html"
  # Install launcher script
  cd "${pkgdir}"
  install -m 755 -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/FoxitReader.sh" "${pkgdir}/usr/bin/${pkgname}"
}


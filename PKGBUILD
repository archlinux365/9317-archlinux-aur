# Maintainer: Mark Coolen
# Contributor: Dan Serban

pkgname=ostorybook
_pkgname=oStorybook
pkgver=5.04.00
pkgrel=1
pkgdesc="Open Source Novel Writing Software for Novelists, Authors and Creative Writers"
arch=(any)
url="http://ostorybook.tuxfamily.org"
license=(GPL)
depends=(java-runtime-headless=8)
source=("http://download.tuxfamily.org/ostorybook/${pkgver}/oStorybook-${pkgver}-linux.bin")
sha256sums=('982635a670a04e8c8de95e1cf2b8ec5907b5cd0af6d47a8b5f3f03210a63b2a1')
options=('!strip')

package()
{
 
  chmod +x "${_pkgname}"-"${pkgver}"-linux.bin
  mkdir -p "${pkgdir}"/usr/share/"${_pkgname}"
  ./"${_pkgname}"-"${pkgver}"-linux.bin --noexec --keep --target "${pkgdir}"/usr/share/"${_pkgname}"
  mkdir -p "${pkgdir}"/usr/bin
  USRBINFILE="${pkgdir}"/usr/bin/"${_pkgname}"
  echo '#!/bin/bash' > "${USRBINFILE}"
  echo "cd /usr/share/${_pkgname}" >> "${USRBINFILE}"
  echo "/usr/lib/jvm/java-8-openjdk/jre/bin/java -Xmx256m -splash:splash.png -jar ${_pkgname}.jar" >> "${USRBINFILE}"
  chmod +x "${USRBINFILE}"
  mkdir -p "${pkgdir}"/usr/share/applications
  DESKTOPFILE="${pkgdir}"/usr/share/applications/"${_pkgname}".desktop
  echo "[Desktop Entry]" > "${DESKTOPFILE}"
  echo "Name=${_pkgname}" >> "${DESKTOPFILE}"
  echo "Comment=Open Source Novel Writing Software for Novelists, Authors and Creative Writers" >> "${DESKTOPFILE}"
  echo "Exec=${_pkgname}" >> "${DESKTOPFILE}"
  echo "Terminal=false" >> "${DESKTOPFILE}"
  echo "Type=Application" >> "${DESKTOPFILE}"
  echo "Icon=/usr/share/${_pkgname}/${_pkgname}-icon.png" >> "${DESKTOPFILE}"
  echo "Categories=Office;" >> "${DESKTOPFILE}"
}


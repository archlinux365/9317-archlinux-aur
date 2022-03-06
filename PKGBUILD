# Maintainer: yjun <jerrysteve1101 at gmail dot com>

pkgname=lceda-bin
_pkgname=${pkgname%-bin}
pkgver=6.4.32
pkgrel=1
pkgdesc="免费、强大、易用的在线电路设计软件"
arch=('x86_64')
url="https://lceda.cn/page/download"
license=('custom')
depends=('gtk3' 'nss' 'libxss')
makedepends=('unzip')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}-${pkgver}.zip::https://image.lceda.cn/files/${_pkgname}-linux-x64-${pkgver}.zip"
        "LICENSE")
sha256sums=('f9a6d75ad09616bdba22c535a82c2298aff5870c5e43861fad4db7312dc29c94'
            '686f681d913d7f943bb5aac66cc902f2eb251e7a20fda43412c048d6134b3592')

package() {
  
  install -dm755 ${pkgdir}/opt/${_pkgname}
  unzip lceda-linux-x64.zip -d ${pkgdir}/opt/${_pkgname}
  
  # icon
  local _icon
  for _icon in 16 32 48 64 128 256;
  do
    install -Dm644 ${pkgdir}/opt/${_pkgname}/icon/${_icon}x${_icon}/${_pkgname}.png \
                   ${pkgdir}/usr/share/icons/hicolor/${_icon}x${_icon}/apps/${_pkgname}.png
  done
  rm -rf ${pkgdir}/opt/${_pkgname}/icon

  # desktop entry
  install -Dm644 ${pkgdir}/opt/${_pkgname}/LCEDA.dkt \
                 ${pkgdir}/usr/share/applications/${_pkgname}.desktop

  sed -i 's|/lceda-linux-x64/icon/128x128/lceda.png|lceda|g' \
                                  ${pkgdir}/usr/share/applications/${_pkgname}.desktop
  sed -i 's|/lceda-linux-x64/||g' ${pkgdir}/usr/share/applications/${_pkgname}.desktop
  rm -rf ${pkgdir}/opt/${_pkgname}/LCEDA.dkt

  # soft link
  install -dm755 ${pkgdir}/usr/bin
  ln -s /opt/${_pkgname}/${_pkgname} ${pkgdir}/usr/bin/${_pkgname}
  chmod 755 ${pkgdir}/opt/${_pkgname}/${_pkgname}

  # LICENSE
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

# vim: set sw=2 ts=2 et:

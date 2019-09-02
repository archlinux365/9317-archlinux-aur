# Maintainer: Muflone http://www.muflone.com/contacts/english/

pkgname=4kyoutubetomp3
pkgver=3.8.0.3032
pkgrel=1
pkgdesc="Extract audio from YouTube, Vimeo, Facebook and other online video hosting services."
arch=('x86_64')
url="http://www.4kdownload.com/products/product-youtubetomp3"
license=('custom:eula')
depends=('qt5-script' 'qt5-declarative' 'portaudio' 'ffmpeg' 'openssl-1.0')
makedepends=('chrpath')
source=("${pkgname}_${pkgver}_amd64.tar.bz2"::"https://dl.4kdownload.com/app/${pkgname}_${pkgver%.*}_amd64.tar.bz2"
        "${pkgname}.desktop"
        "${pkgname}.png"
        "fix_symlink_path.patch")
sha256sums=('4a54552bcd72c38069e50f334014e562639ce07b52338355746e89cbf6ab28d8'
            '386dfa4085efcd9403c4387c7be4dd0f9762c726555b5ebd0126dcd225bcf828'
            'b25f830bb1fe559ea9f0b35cc9eb8ab75e2e40d09b8755f937451f5ddeeec2fd'
            'a1316af1c5f93b90cc9791ffb222c1ecec21fa9267bae2f65666e39ed6a960a4')

prepare() {
  cd "${pkgname}"
  # Remove insecure RPATH
  chrpath --delete "${pkgname}-bin"
  # Fix symlink path
  patch -p1 -i "${srcdir}/fix_symlink_path.patch"
}

package() {
  # Install desktop file
  install -m 755 -d "${pkgdir}/usr/share/applications"
  install -m 755 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  # Install icon file
  install -m 755 -d "${pkgdir}/usr/share/pixmaps"
  install -m 644 -t "${pkgdir}/usr/share/pixmaps" "${pkgname}.png"
  # Install files
  cd "${pkgname}"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "${pkgname}-bin"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/audio"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/audio" audio/*
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/translation"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/translation" translation/*
  # Temporarily ship bundled QT5 libraries as system libraries are unsupported
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "${pkgname}.sh"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Concurrent.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Core.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5DBus.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Gui.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Network.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Qml.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Widgets.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5XcbQpa.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Xml.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5XmlPatterns.so.5"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/platforms"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/platforms" platforms/*
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/xcbglintegrations"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/xcbglintegrations" xcbglintegrations/*
  # Install launcher file
  install -m 755 -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
  # Install license file
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "doc/eula"
}

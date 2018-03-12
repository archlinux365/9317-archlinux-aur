# Maintainer: Alexey Stukalov <astukalov@gmail.com>
# Contributor: Muflone http://www.muflone.com/contacts/english/
pkgname=smartgit
pkgver=17.1.5
pkgrel=1
pkgdesc='Git client with Hg and SVN support.'
arch=('any')
url="http://www.syntevo.com/smartgit"
license=('custom')
depends=('java-runtime>=8' 'desktop-file-utils' 'git' 'gtk2')
optdepends=('mercurial: hg repositories support')
replaces=('smartgithg')

# package version as it appears in the name of tar.gz archive file
_pkgver=${pkgver//\./_}
# folder within tar.gz archive
_pkgfolder=${pkgname}
source=("https://www.syntevo.com/downloads/${pkgname}/${pkgname}-linux-${_pkgver}.tar.gz"
        "${pkgname}.desktop")
sha256sums=('9c4dbfefa61e1ce57d65bc4b9114b80965a6e0d719c157480183083704f27eed'
            'bb5665e9c93640b311dbe8b633da65e3c72a712a3dc9655c3274a3542a688a32')

package() {
    # Install licenses
    install -d -m 755 "${pkgdir}/usr/share/licenses/${pkgname}"
    mv "${_pkgfolder}/licenses"/* "${pkgdir}/usr/share/licenses/${pkgname}"
    mv "${_pkgfolder}/license.html" "${pkgdir}/usr/share/licenses/${pkgname}"
    rmdir "${_pkgfolder}/licenses"
    # Install application files
    install -d -m 755 "${pkgdir}/opt"
    mv "${_pkgfolder}" "${pkgdir}/opt/${pkgname}"
    # Install desktop file
    install -D -m 644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    # Install icon files
    install -d -m 755 "${pkgdir}/usr/share/icons/hicolor"
    cd "${pkgdir}/usr/share/icons/hicolor"
    for _size in 32 48 64 128 256
    do
        install -d "${_size}x${_size}/apps"
        ln -s "/opt/${pkgname}/bin/smartgit-${_size}.png" "${_size}x${_size}/apps/${pkgname}.png"
    done
    # Add symlink to /usr/bin
    chmod 755 "${pkgdir}/opt/${pkgname}/bin/smartgit.sh"
    install -d -m 755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/bin/smartgit.sh" "${pkgdir}/usr/bin/${pkgname}"
}

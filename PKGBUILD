# Maintainer: Xuanwo <xuanwo@archlinuxcn.org>

pkgname=obsidian
_appimagver=0.10.8
_appimage="${pkgname}-${_appimagver}.AppImage"
pkgver=${_appimagver//-/_}
pkgrel=1
pkgdesc="Obsidian is a powerful knowledge base that works on top of a local folder of plain text Markdown files"
provides=("obsidian")
conflicts=("obsidian-appimage")
arch=('x86_64')
url="https://obsidian.md/"
license=('custom:Commercial')
depends=('zlib' 'hicolor-icon-theme' 'fuse')
options=(!strip)
source=("${_appimage}::https://github.com/obsidianmd/obsidian-releases/releases/download/v${pkgver}/Obsidian-${pkgver}.AppImage")
noextract=("${_appimage}")
sha256sums=('9413aac93336772a65bc905a11db400abdc6d52690605d501f57858574ccb7e1')

prepare() {
    # Enable execution of AppImage
    chmod +x "${_appimage}"
    # Extract AppImage into squashfs-root folder
    ./"${_appimage}" --appimage-extract
    # Set permissions for squashfs-root folder
    chmod -R 0755 squashfs-root
}

package() {
    # Go to source directory
    cd "$srcdir"

    # Create directories for installation
    install -dm0755 "${pkgdir}"/usr/bin
    install -dm0755 "${pkgdir}"/opt
    install -dm0755 "${pkgdir}"/usr/share/icons
    # Install icons
    cp -r squashfs-root/usr/share/icons/hicolor "${pkgdir}"/usr/share/icons/
    # Modify .desktop file to run executable instead of AppImage
    sed -i -E "s|Exec=AppRun|Exec=/usr/bin/${pkgname}|" squashfs-root/${pkgname}.desktop
    # Install desktop file
    install -Dm644 squashfs-root/${pkgname}.desktop -t "${pkgdir}"/usr/share/applications/
    # Move package contents to opt
    mv squashfs-root "${pkgdir}"/opt/${pkgname}
    # Symlink /usr/bin executable to opt
    ln -s /opt/${pkgname}/${pkgname} "${pkgdir}"/usr/bin/${pkgname}
}


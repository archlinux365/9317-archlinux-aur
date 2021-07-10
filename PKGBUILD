# Maintainer: Kainoa Kanter <kainoa@t1c.dev>
# Based off of: https://daveparrish.net/posts/2019-11-16-Better-AppImage-PKGBUILD-template.html

_pkgname="via"

pkgname="${_pkgname}-appimage"
pkgver=1.3.1
pkgrel=1
pkgdesc="Your keyboard's best friend."
arch=('x86_64')
url="https://caniusevia.com/"
license=('Proprietary')
depends=('libnotify' 'libappindicator-gtk3' 'fuse2' 'fuse3' 'fuse-common' 'libsecret')
_appimage="via-${pkgver}-linux.AppImage"
source_x86_64=("${_appimage}::https://github.com/the-via/releases/releases/download/v${pkgver}/via-${pkgver}-linux.AppImage/")
noextract=("${_appimage}")
sha256sums_x86_64=('d2cd73d280a265149fedb24161ec7c575523596c4d30898ad6b5875e09b3f34a')
options+=('!strip')

prepare() {
    chmod +x "${_appimage}"
    ./"${_appimage}" --appimage-extract
}

build() {
    # Adjust .desktop so it will work outside of AppImage container
    sed -i -E "s|Exec=AppRun|Exec=env DESKTOPINTEGRATION=false /usr/bin/${_pkgname}|"\
        "squashfs-root/${_pkgname}.desktop"
    # Fix permissions; .AppImage permissions are 700 for all directories
    chmod -R a-x+rX squashfs-root/usr
}

package() {
    # AppImage
    install -Dm755 "${srcdir}/${_appimage}" "${pkgdir}/opt/${pkgname}/${pkgname}.AppImage"
    # Desktop file
    install -Dm644 "${srcdir}/squashfs-root/${_pkgname}.desktop"\
            "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

    # Icon images
    install -dm755 "${pkgdir}/usr/share/"
    cp -a "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

    # Symlink executable
    install -dm755 "${pkgdir}/usr/bin"
    ln -s "/opt/${pkgname}/${pkgname}.AppImage" "${pkgdir}/usr/bin/${_pkgname}"
}

# Maintainer: zoorat <zoorat [at] protonmail [dot] com>

_pkgname="betterdiscord-installer"
pkgname="$_pkgname-bin"
pkgver=1.1.1
pkgrel=2

pkgdesc="A simple standalone program which automates the installation, removal and maintenance of BetterDiscord."
arch=('x86_64')
url="https://github.com/BetterDiscord/Installer"
# url="https://betterdiscord.app/"
license=('MIT')

depends=("nss" "gtk3" "libxss")
provides=("betterdiscord" "$_pkgname")
conflicts=("betterdiscord" "$_pkgname")
replaces=("betterdiscord" "$_pkgname")
# options=(debug !strip emptydirs zipman)
options=(strip emptydirs zipman)
# install="$pkgname.install"

source=("${pkgname}-${pkgver}.${CARCH}.AppImage::https://github.com/BetterDiscord/Installer/releases/download/v${pkgver}/BetterDiscord-Linux.AppImage"
	"LICENSE::https://raw.githubusercontent.com/BetterDiscord/Installer/main/LICENSE"
	"file://usr--SLASH--bin--SLASH--betterdiscord-installer")
noextract=("${pkgname}-${pkgver}.${CARCH}.AppImage")
b2sums=('c194f60370a02c40b9513aea01c9faf5a9066215b9d624169ba294084434e2bb60f176a9c2b4c6c2f59413e37c63ef7dfbeedfe416ccacb9ffee5ebdec054989'
	'9efca07a8806137067825ffa7e285950d4bbd1ed3c5a252af83d9408d51fc6530f9be7e1a467e28e73374b9057f52646fff419545a9d2fa466412ee2043ac56d'
	'b31d61be03a20c315a0fbcf2b2a75da5fe442d7de7951a9c75c31e34ed0c91c9f15b585bc82fa9634e913c774b3f932cf3d476b981eacfb8707f6db7503494c7')

prepare() {
	# making .AppImage file executable
	chmod -v +x "${pkgname}-${pkgver}.${CARCH}.AppImage"

	# extract .AppImage file
	"./${pkgname}-${pkgver}.${CARCH}.AppImage" --appimage-extract
}

build() {
	# modifying .desktop file
	sed -i -E "s|Exec=AppRun|Exec=/usr/bin/${_pkgname}|" "squashfs-root/${_pkgname}.desktop"
}

package() {
	# Copy app files
	install -vdm 755 "${pkgdir}/opt/${pkgname}"
	cp -va squashfs-root/* "${pkgdir}/opt/${pkgname}"

	# Fix permissions
	for d in locales resources; do
		chmod -v 755 "${pkgdir}/opt/${pkgname}/$d"
		find "${pkgdir}/opt/${pkgname}/$d" -type d -exec chmod -v 755 {} +
	done

	# Link entry point
	install -vdm 755 "${pkgdir}/usr/bin"
	cp -v "usr--SLASH--bin--SLASH--betterdiscord-installer" "${pkgdir}/usr/bin/${_pkgname}"

	# Copy icons files
	install -vdm 755 "${pkgdir}/usr/share/icons"
	find squashfs-root/usr/share/icons -type d -exec chmod -v 755 {} +
	cp -va squashfs-root/usr/share/icons/* "${pkgdir}/usr/share/icons"

	# Copy desktop file
	install -vDm 644 "squashfs-root/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

	# Install LICENSE file
	install -vDm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

	# Remove unused files
	rm -vrf "${pkgdir}/opt/${pkgname}"/{usr,swiftshader,AppRun,${_pkgname}.{desktop,png}}
	rm -vrf "${pkgdir}/opt/${pkgname}"/{libGLESv2.so,libEGL.so,libvk_swiftshader.so,libvulkan.so}
	rm -vrf "${pkgdir}/opt/${pkgname}"/LICENSE*
}

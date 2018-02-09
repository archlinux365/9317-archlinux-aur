# Maintainer: unstartdev <guo.yongan@outlook.com>
pkgname=electron-ssr-appimage
pkgver=v0.2.0beta4
pkgrel=4
epoch=
pkgdesc="Install electron-ssr from appimage"
arch=('x86_64')
url="https://github.com/erguotou520/electron-ssr"
license=('MIT')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=("electron-ssr-0.2.0-beta-3"
	  "electron-ssr-source")
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/erguotou520/electron-ssr/releases/download/v0.2.0-beta-4/electron-ssr-0.2.0-beta-4-x86_64.AppImage"
	"desktop.tar.gz"
	"icons.tar.gz")
noextract=("electron-ssr-0.2.0-beta-4-x86_64.AppImage")
md5sums=('7345e662db86db012f49c03d450c0d65'
         '84f39007ef78543f8cd2f29b253afa42'
         '679cf82afcc498d1db4dba5aed8bd0a0')
validpgpkeys=()

package() {
	install -Dc electron-ssr-*-*-*-*.AppImage $pkgdir/opt/electron-ssr.AppImage
	install -Dc ./electron-ssr.desktop $pkgdir/usr/share/applications/electron-ssr.desktop
	install -Dc icons/hicolor/128x128/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/128x128/apps/electron-ssr.png
	install -Dc icons/hicolor/16x16/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/128x128/apps/electron-ssr.png
	install -Dc icons/hicolor/24x24/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/24x24/apps/electron-ssr.png
	install -Dc icons/hicolor/256x256/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/256x256/apps/electron-ssr.png
	install -Dc icons/hicolor/32x32/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/32x32/apps/electron-ssr.png
	install -Dc icons/hicolor/48x48/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/48x48/apps/electron-ssr.png
	install -Dc icons/hicolor/64x64/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/64x64/apps/electron-ssr.png
	install -Dc icons/hicolor/96x96/apps/electron-ssr.png $pkgdir/usr/share/icons/hicolor/96x96/apps/electron-ssr.png
}

# Maintainer: The3DmaN <the3dman dot appdev at protonmail dot com>

pkgname=idokremote-git
pkgver=1.1
pkgrel=1
pkgdesc="Remote for Kodi"
arch=("any")
url="https://gitlab.com/The3DmaN/${pkgname%-git}"
license=("GPL3")
depends=("git" "qt5-svg" "qt5-base" "qt5-webengine" "qt5-webview" "qt5-wayland" "qt5-quickcontrols")
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://gitlab.com/The3DmaN/${pkgname%-git}.git")
md5sums=("SKIP")

build()
{
cd "$srcdir/${pkgname%-git}"
# and make qt gui
  qmake-qt5 USE_QRCODE=1 USE_UPNP=1
  make

}

pkgver()
{
  cd "${pkgname%-git}"
  printf "1.1.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package()
{
  cd "$srcdir/${pkgname%-git}"
  install -Dm644 Idok.desktop "$pkgdir"/usr/share/applications/Idok.desktop
  install -Dm644 images/Idok.svg "$pkgdir"/usr/share/icons/hicolor/scalable/apps/Idok.svg
  
  install -Dm755 IdokRemote "$pkgdir"/usr/bin/IdokRemote

}

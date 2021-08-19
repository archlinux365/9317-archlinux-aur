# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>
pkgname=vulkan-caps-viewer-x11-bin
pkgver=3.02
pkgrel=1
pkgdesc="Vulkan Hardware Capability Viewer"
arch=('x86_64')
url="http://vulkan.gpuinfo.org/"
license=('GPL2')
provides=("${pkgname%-*-*}")
conflicts=("${pkgname%-*-*}")
replaces=("${pkgname%-*-*}-bin")
options=('!strip')
source=("https://vulkan.gpuinfo.org/downloads/vulkancapsviewer_${pkgver}_linux64.AppImage")
sha256sums=('90ed7c0851607c2b39daf5b0982d54314e67ccb95a5028a61fc05ab51f6057a8')

prepare() {
  chmod +x *.AppImage
  ./*.AppImage --appimage-extract
}

package() {
  install -Dm755 "vulkancapsviewer_${pkgver}_linux64.AppImage" \
    "$pkgdir"/usr/bin/vulkanCapsViewer

  cd "$srcdir/squashfs-root"
  install -Dm644 usr/share/applications/vulkanCapsViewer.desktop -t \
    "$pkgdir/usr/share/applications"
  install -Dm644 usr/share/icons/hicolor/256x256/apps/vulkanCapsViewer.png -t \
    "$pkgdir/usr/share/icons/hicolor/256x256/apps"
}

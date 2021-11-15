# Maintainer: Klaus Alexander Seistrup <klaus@seistrup.dk>
# -*- mode: sh -*-

pkgname=minbrowser-bin
pkgver=1.22.1
pkgrel=1
pkgdesc='A fast, minimal browser that protects your privacy'
arch=('x86_64')
url='https://minbrowser.org/'
license=('Apache')
# Help needed with the depends
depends=(
  'cairo'
  'dbus'
  'glib2'
  'gtk3'
  'nss'
  'pango'
)
optdepends=(
  'libgnome-keyring'
  'pulseaudio'
)
provides=('minbrowser')
conflicts=('minbrowser')
source=("https://github.com/minbrowser/min/releases/download/v${pkgver}/min_${pkgver}_amd64.deb")
md5sums=(
  'b5b99292b7e9873b96c0e25a7b56a18d'
)
sha1sums=(
  'bf5f7350641e8a8c9583632524dc86a34433743f'
)
sha256sums=(
  'b33369e642010a010755dd22b9d3ad6951e18d4362e10fa2f07bc88cf219276e'
)
sha512sums=(
  '5f63b6be91378cf8e41bf6599b919c6331a8b1498c55c0d1749182940dcb20666cb499ee5907d2ce2fb17c0d8b65310f7891475947e6a128c0c240e5571a22c3'
)
b2sums=(
  'c35d420af5d74770c08302c4adec04e843a3b4724a7ca1b6f70e41b90546e049fd5f363c6825e71eb1bb02fa05c14591cedc6ea8926e49ccbe3476212197d165'
)

package() {
  tar xf data.tar.xz -C "$pkgdir"
}

post_install() {
  gtk-update-icon-cache -q -t -f usr/share/icons/hicolor
  update-desktop-database -q
}

post_upgrade() {
  post_install
}

post_remove() {
  gtk-update-icon-cache -q -t -f usr/share/icons/hicolor
  update-desktop-database -q
}

# eof

# Maintainer: Térence Clastres <t dot clastres at gmail dot com>

pkgname=libva-vdpau-driver-vp9-git
pkgver=r50.60e296c
pkgrel=1
pkgdesc="VDPAU backend for VA API. (Version with VP9 codec support)"
arch=('x86_64')
url='https://github.com/xtknight/vdpau-va-driver-vp9'
license=('GPL')
depends=('libva'
         'libvdpau>=1.3'
         'libgl'
         )
makedepends=('mesa'
             'xorgproto'
             )
replaces=('vdpau-video')
provides=('libva-vdpau-driver')
conflicts=('libva-vdpau-driver')
source=("$pkgname::git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"

  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$pkgname"

  ./autogen.sh --prefix=/usr
  make
}

package() {
  cd "$pkgname"

  make DESTDIR="$pkgdir" install
}


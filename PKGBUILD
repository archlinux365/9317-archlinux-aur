# Maintainer: Tmplt <tmplt@dragons.rocks>
pkgname=katriawm
pkgver=17.10
pkgrel=2
pkgdesc="A non-reparenting, dynamic window manager for X11 with decorations"
arch=("i686" "x86_64")
url="https://github.com/vain/${pkgname}"
license=("MIT")
makedepends=("git" "pkg-config")
depends=("libx11" "libxft" "libxrandr")
source=("https://github.com/vain/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=("b2ab81a39292159accbc8d49f5afb4de8a670bb36e278e2162e2eb44ce57275e")

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  if [[ -f "${SRCDEST}/${pkgname}/config.h" ]]; then
      msg "Using custom config.h"
      cp -f "${SRCDEST}/${pkgname}/config.h" src/core/config.h
  fi
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/src"
  make PREFIX=/usr
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/src"
  make DESTDIR=${pkgdir} PREFIX=/usr MANPREFIX=/usr/share/man install
  install -Dm644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 ../README "${pkgdir}/usr/share/doc/${pkgname}/README"
}

# Maintainer: loh.tar <loh.tar at googlemail dot com>
pkgname="wpa-cute"
pkgver="0.8.3"
pkgrel="1"
pkgdesc="A graphical wpa_supplicant front end"
arch=("x86_64")
url="https://github.com/loh-tar/$pkgname"
license=("BSD")
depends=("qt5-base" "qt5-svg" "wpa_supplicant")
install="$pkgname.install"
source=("$pkgname-$pkgver.tar.gz::https://github.com/loh-tar/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('3cb74285e2c6dc15733b1f194d63f67a')

build() {
  cd "$pkgname-$pkgver/src"
  qmake-qt5
  make
}

package() {
  cd "$pkgname-$pkgver/src"
  install -Dm755 "wpa-cute" "${pkgdir}/usr/bin/wpa-cute"
  install -Dm644 "icons/wpa_gui.svg" "${pkgdir}/usr/share/pixmaps/wpa-cute.svg"
  install -Dm644 "wpa-cute.desktop" "${pkgdir}/usr/share/applications/wpa-cute.desktop"
  install -Dm644 "../doc/wpa-cute.8" "${pkgdir}/usr/share/man/man8/wpa-cute.8"
  install -Dm644 "../COPYING" "${pkgdir}/usr/share/licenses/$pkgname/COPYING"
}

# Maintainer: Ivan 'ivabus' Bushchik ivabus@ivabus.dev -> https://github.com/ivabus

pkgname=plainartwork
pkgver=0.4
pkgrel=2
pkgdesc="plainDE icons, flags, etc."
arch=(x86_64 i686 pentium4 arm armv6h armv7h aarch64)
url="https://plainde.org"
license=(GPL3)
makedepends=(git)
source=("git+https://github.com/plainDE/plainArtwork.git")
sha256sums=('SKIP')

package() {
  mkdir -p $pkgdir/usr/share
  cp -r $srcdir/plainArtwork/flags $pkgdir/usr/share/
}

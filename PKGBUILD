# Maintainer:  grimi <grimi at poczta dot fm>
# Maintainer:  speps <speps at aur dot archlinux dot org>
# Contributor: john_schaf <john_schaf@hotmail.fr>

pkgname=xmp
pkgver=4.0.11
pkgrel=1
pkgdesc="The Extended Module Player is a portable command-line module player that supports over 90 module formats (Amiga, Atari, ..)"
arch=(i686 x86_64)
url="http://xmp.sourceforge.net/"
license=('GPL')
depends=('libxmp' 'libpulse')
backup=('etc/xmp/xmp.conf' 'etc/xmp/modules.conf')
source=("http://downloads.sourceforge.net/sourceforge/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=('baf6115d7febfca382b0144bd3017982')


build() {
  cd $pkgname-$pkgver
  ./configure --prefix=/usr
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir/" install
}


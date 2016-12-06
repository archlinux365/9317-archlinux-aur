# Maintainer: Michael Straube <straubem@gmx.de>
# Contributor: archtux <antonio.arias99999@gmail.com>

pkgname=sdlhana
pkgver=0.34
pkgrel=3
pkgdesc="SDL-based Hanafuda game"
arch=('i686' 'x86_64')
url="http://sdlhana.nongnu.org"
license=('GPL')
depends=('sdl' 'gcc-libs')
source=("https://nongnu.uib.no/$pkgname/$pkgname-$pkgver.tar.bz2"
        "sdlhana.desktop")
sha256sums=('13dfdf4170c971930b2028bff35b4725f55ae5e1aebc93b94c7582e9fb97d511'
            '88fb4117196500c4284f3717c0b748857e57ebe93ab8884a2a4a3bd4ac047fed')

build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr
  make
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir" install

  install -Dm644 ../sdlhana.desktop "$pkgdir"/usr/share/applications/sdlhana.desktop
  install -Dm644 src/sdlhana.xpm "$pkgdir"/usr/share/pixmaps/sdlhana.xpm
}

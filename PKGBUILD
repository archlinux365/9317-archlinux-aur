# Maintainer: Franck STAUFFER <franck.stauffer@monaco.mc>
# Contributor: BenObiWan <benobiwan @t gmail dot com>

pkgname=zelda-xd2
pkgver=1.1.1
pkgrel=1
epoch=
pkgdesc='Free and opensource, amateur Zelda game with humoristic characters.'
arch=('any')
url='https://www.solarus-games.org/'
license=('GPL3' 'custom')
depends=('solarus>=1.6.0')
makedepends=('cmake' 'zip')
changelog="$pkgname.changelog"
source=("https://gitlab.com/solarus-games/zelda-xd2-mercuris-chess/-/archive/v$pkgver/zelda-xd2-mercuris-chess-v$pkgver.tar.gz"
        "$pkgname.desktop")
b2sums=('d7d84d9d5b5b5a77f539a9b09e84f307cedae85b7a8342806954eae99f32a414ab75beb1d3b7761f29641f6356fe4b83ca7d65554ce5f80fbf3702d8c9f1d6d6'
        'b0a713910884fa4e075f0c14a80b80ec32e614e361bf3bde31dab8a6ed8e277599aec51408c50320afc33544940a8d0d9d03793ddef7fdf7a683aaa3b3cb9c7f')

build() {
  cd "zelda-xd2-mercuris-chess-v$pkgver" 
  cmake -DCMAKE_INSTALL_PREFIX="/usr" .
  make
}

package() {
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

  cd "zelda-xd2-mercuris-chess-v$pkgver" 
  make DESTDIR="$pkgdir/" install
  install -Dm644 license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


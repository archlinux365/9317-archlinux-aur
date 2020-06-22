# Maintainer: Nils Kvist  <robstenklippa@gmail.com>
# Contributor: Nils Kvist <robstenklippa@gmail.com>

pkgname=ssrt
pkgver=2020.06.22.25
pkgrel=1
pkgdesc='simplescreenreocrder - now even simpler'
arch=('any')
url='https://github.com/budlabs/ssrt'
license=('BSD')
groups=()
depends=('bash>=4.0.0')
makedepends=()
optdepends=('xorg-xrandr: get screen geometry'
            'simplescreenrecorder: recording'
            'slop: set recording geometry')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$url/archive/$pkgver.tar.gz")
noextract=()
sha256sums=('e2326f908b46e5d3d3700303701879f2f295392c3e9a9d4311e21c87f0dc92df')

package() {
  ls
  cd "$pkgname-$pkgver"

  make DESTDIR="$pkgdir/" PREFIX=/usr install

  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
  install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname" README.md
}

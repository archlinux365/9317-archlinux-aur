# Maintainer: Nils Kvist  <robstenklippa@gmail.com>
# Contributor: Nils Kvist <robstenklippa@gmail.com>

pkgname=typiskt
pkgver=2020.07.04.5
pkgrel=1
pkgdesc='touchtype training in the terminal'
arch=('any')
url='https://github.com/budlabs/typiskt'
license=('BSD')
groups=()
depends=('bash' 'bc' 'gawk' 'ncurses')
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$url/archive/$pkgver/${pkgname}-$pkgver.tar.gz")
noextract=()
sha256sums=('697823b16eb7713d865c18b5f2f0af4ed8414762d8be13a64ec344112a234a3d')

package() {
  ls
  cd "$pkgname-$pkgver"

  make DESTDIR="$pkgdir/" PREFIX=/usr install

  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
  install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname" README.md
}

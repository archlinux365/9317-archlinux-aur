# Maintainer: Unix Sheikh <unixsheikh at protonmail dot com>

pkgname=salahtime-go
pkgver=1.0.3
pkgrel=1
url="https://codeberg.org/unixsheikh/salahtime-go"
pkgdesc="A small command line application written in Go that displays the Islamic prayer times for Europe/Copenhagen"
arch=('any')
license=('The Unlicense')
depends=(
  'pacman>=5.1'
  'sudo'
  'git'
)
makedepends=(
  'go'
)

source=("https://codeberg.org/unixsheikh/salahtime-go/archive/v1.0.3.zip")
md5sums=('ab6ebd237206ab5479a569c8edc319a9')

build() {
  cd $pkgname-$pkgver
  go build \
    -gcflags "all=-trimpath=$PWD" \
    -asmflags "all=-trimpath=$PWD" \
    -ldflags "-extldflags $LDFLAGS" \
    -o $pkgname .
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 $pkgname "$pkgdir"/usr/bin/$pkgname
}

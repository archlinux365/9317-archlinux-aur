# Maintainer: Clement Tsang (xoronth) <cjhtsang@uwaterloo.ca>

pkgname=bottom
pkgver=0.4.5
pkgrel=0
pkgdesc="A cross-platform graphical process/system monitor with a customizable interface and a multitude of features."
provides=('bottom')
conflicts=('bottom-bin')
makedepends=('cargo')
arch=('x86_64')
url="https://github.com/ClementTsang/bottom"
source=("$pkgname-$pkgver.tar.gz::https://github.com/ClementTsang/bottom/releases/download/$pkgver/bottom_required_files.tar.gz")
license=('MIT')
sha512sums=('1d1585e036b45ade3c9093408b6dd935000a359214cebd9e49eace4b9983ba7a1ab39afd142d5889a8488635cd2794e10358e7b147e5f214196bd3c1fa62207e')

build() {
    cargo build --release --locked
}

package() {
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
    cd "./target/release"
    install -Dm755 btm "$pkgdir/usr/bin/btm"
}
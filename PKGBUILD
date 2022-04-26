# Maintainer: Stephen E. Baker <baker.stephen.e@gmail.com>

pkgname=pacpreview
pkgver=0.2.2
pkgrel=2
makedepends=('rust' 'cargo')
optdepends=('fzf: use as a search tool')
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
pkgdesc="Pacman package info viewer, intended for use with fzf --preview"
license=('GPL3')
url='https://github.com/TheCycoONE/pacpreview'
source=("$pkgname-$pkgver.tar.gz::https://github.com/TheCycoONE/$pkgname/archive/$pkgver.tar.gz")
md5sums=('c960dc0a22d16ecb9dc4674167769ad5')

build() {
    cd "$pkgname-$pkgver"

    RUSTUP_TOOLCHAIN=stable cargo build --release --locked --target-dir=target
}

check() {
    cd "$pkgname-$pkgver"

    RUSTUP_TOOLCHAIN=stable cargo test --release --locked --target-dir=target
}

package() {
    cd "$pkgname-$pkgver"

    install -Dm 755 target/release/${pkgname} -t "${pkgdir}/usr/bin"
}

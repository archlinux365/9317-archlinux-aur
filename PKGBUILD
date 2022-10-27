# Maintainer: Tor Berge torberge@outlook.com



pkgname=speki
pkgver=0.2.19
pkgrel=0
pkgdesc="Flashcard app for your terminal"
url="https://github.com/TBS1996/speki"
license=("GPL-2.0-only")
arch=("x86_64")
provides=("speki")
conflicts=("speki")
makedepends=(cargo)
source=("$pkgname-$pkgver.tar.gz::https://static.crates.io/crates/$pkgname/$pkgname-$pkgver.crate")
sha256sums=('e6e83c07261783caa4add8283ef19869e5e8f32ab5e29e52e60f85289f6aecea')




prepare() {
	cd "$srcdir/$pkgname-$pkgver"
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release

}

check() {
	cd "$pkgname-$pkgver"
    export RUSTUP_TOOLCHAIN=stable
    cargo test --frozen --release
}

package() {
	cd "$pkgname-$pkgver"
	ls
    install -Dm755 "target/release/speki" -t "$pkgdir/usr/bin"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

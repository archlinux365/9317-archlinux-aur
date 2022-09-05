# Maintainer: Anas Elgarhy <anas.elgarhy.dev@gmail.com>
pkgname=ports-sniffer
pkgver=0.1.0
pkgrel=0
epoch=
pkgdesc="A simple port sniffer(scanner) implementation with 🦀"
arch=(x86_64)
url="https://github.com/anas-elgarhy/ports-sniffer"
license=('MIT')
groups=()
depends=()
makedepends=(cargo)
checkdepends=()
optdepends=()
provides=(ports-sniffer)
conflicts=()
replaces=(ports-sniffer)
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://static.crates.io/crates/$pkgname/$pkgname-$pkgver.crate")
noextract=()

prepare() {
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --all-features
}

check() {
	export RUSTUP_TOOLCHAIN=stable
  cargo test --frozen --all-features
}

package() {
  sudo install -Dm0755 -t "/usr/bin/" "target/release/$pkgname"
}
sha256sums=('d24b8248dadb79dbb9f5a0d100cb9e19d813b74a34c7e8a4cb9b0115b4f82412')

# Maintainer: Marco Rubin <marco.rubin@protonmail.com>

pkgname=uefi-run
pkgver=0.4.0
pkgrel=2
pkgdesc="Directly run UEFI applications in QEMU"
arch=('x86_64')
url=https://github.com/Richard-W/uefi-run
license=('MIT')
depends=(qemu edk2-ovmf)
makedepends=(rust)
source=("$url/archive/v$pkgver.tar.gz")
md5sums=('SKIP')

build() {
	cd "$pkgname-$pkgver"
	cargo build
}

check() {
	cd "$pkgname-$pkgver"
	cargo check
}

package() {
	cd "$pkgname-$pkgver"
	cargo install --no-track --path . --root "${pkgdir}/usr" --bin uefi-run
}

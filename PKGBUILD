# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=cicero-git
pkgver=0.1.3.r0.g8521d4f
pkgrel=2
pkgdesc="Unicode tool with a terminal user interface (git)"
arch=('x86_64')
url="https://github.com/eyeplum/cicero-tui"
license=('GPL3')
makedepends=('rust' 'git' 'fontconfig')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}-tui"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname%-git}-tui"
  cargo build --release --locked
}

check() {
  cd "${pkgname%-git}-tui"
  cargo test --release --locked
}

package() {
  cd "${pkgname%-git}-tui"
  install -Dm 755 "target/release/${pkgname%-git}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}

# Maintainer: orhun <orhunparmaksiz@gmail.com>
# Contributor: Tony Lambiris <tony@libpcap.net>
# https://github.com/orhun/pkgbuilds

pkgname=hx-git
_pkgname=hex
pkgver=0.3.2.r0.g2e34704
pkgrel=1
pkgdesc="Futuristic take on hexdump (git)"
arch=('x86_64')
url="https://github.com/sitkevij/hex"
license=('MIT')
makedepends=('cargo' 'git')
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_pkgname"
  cargo build --release --locked --all-features
}

check() {
  cd "$_pkgname"
  cargo test --release --locked
}

package() {
  cd "$_pkgname"
  install -Dm 755 "target/release/${pkgname%-git}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$_pkgname"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$_pkgname"
}

# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
pkgname=zola
pkgver=0.6.0
pkgrel=1
pkgdesc="An opinionated static site generator"
arch=('x86_64')
url="https://github.com/getzola/zola"
makedepends=(cargo cmake)
license=('MIT')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/getzola/zola/archive/v${pkgver}.tar.gz")
sha256sums=('647f31300f4e468374dfb325b59a08cb31c4ed855b2e5b677131464ae3ee9925')

build() {
  cd zola-$pkgver
  cargo build --release --locked
}

check() {
  cd zola-$pkgver
  cargo test --release --locked
}

package() {
  cd zola-$pkgver
  install -Dm755 target/release/zola "$pkgdir"/usr/bin/zola
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:

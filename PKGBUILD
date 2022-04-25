# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>

pkgname=gleam-git
pkgver=0.21.0.r0.g9aad6ec2
pkgrel=1
pkgdesc="A statically typed language for the Erlang VM"
arch=('x86_64')
license=('Apache')
url='https://github.com/gleam-lang/gleam'
makedepends=('rust')
depends=('erlang-nox')
provides=('gleam')
conflicts=('gleam')
options=(strip !docs !libtool !staticlibs)
source=('gleam::git+https://github.com/gleam-lang/gleam.git')
sha256sums=('SKIP')

pkgver() {
  cd "gleam"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "gleam"

  cargo build --release
}

check() {
  cd "gleam"

  cargo test
}

package() {
  cd "gleam"

  install -Dm0755 -t "${pkgdir}/usr/bin" \
    target/release/gleam

  install -Dm0644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

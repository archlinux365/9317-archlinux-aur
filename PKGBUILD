# Maintainer: Jason Nader <jason.nader@protonmail.com>

pkgname=autotiling-rs-git
_pkgname=autotiling-rs
pkgver=0.1.0.r3.g1a0579a
pkgrel=1
pkgdesc='Automatically alternates container layouts between horizontal and vertical'
arch=('x86_64')
url='https://github.com/ammgws/autotiling-rs'
makedepends=('git' 'rust')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+$url")
md5sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  echo $(grep '^version =' Cargo.toml|head -n1|cut -d\" -f2).r$(git rev-list --count HEAD).g$(git describe --always)
}

build() {
  cd "$_pkgname"
  cargo build --release
}

package() {
  cd "$_pkgname"
  install -Dm755 "target/release/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
}


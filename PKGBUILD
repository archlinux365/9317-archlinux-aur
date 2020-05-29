# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=sane-fmt
pkgver=0.2.30
source=(sane-fmt-0.2.30.tar.gz::https://github.com/KSXGitHub/sane-fmt/archive/0.2.30.tar.gz https://raw.githubusercontent.com/KSXGitHub/sane-fmt/master/LICENSE.md)
sha1sums=(SKIP SKIP)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Opinionated code formatter for TypeScript and JavaScript'
pkgrel=0
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/sane-fmt'
makedepends=(cargo)

build() {
  cd "$srcdir"/sane-fmt-"$pkgver"
  cargo build --release --locked
}

package() {
  cd "$srcdir"/sane-fmt-"$pkgver"
  install -Dm755 target/release/sane-fmt "$pkgdir"/usr/bin/sane-fmt
  install -Dm644 LICENSE.md "$pkgdir"/usr/share/"$pkgname"/LICENSE.md
}


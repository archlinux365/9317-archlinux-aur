# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=('pop-launcher' 'pop-shell-plugin-system76-power')
pkgbase=pop-launcher
pkgver=1.2.1
pkgrel=1
arch=('x86_64' 'aarch64')
url="https://github.com/pop-os/launcher"
license=('MPL2')
depends=('fd' 'libqalculate' 'sh')
makedepends=('cargo' 'just')
changelog="$pkgname-changelog"
source=("$pkgbase-$pkgver.tar.gz::$url/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('00f6386851a770d988eab58b367a592a7df3b69c17c99f9daea2bd40a1f69d5a')

prepare() {
  cd "launcher-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  cargo fetch --target "$CARCH-unknown-linux-gnu"

  just vendor

  sed -i 's|{{bin_path}}|/usr/bin/pop-launcher|g' justfile
}

build() {
  cd "launcher-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  just vendor=1
}

package_pop-launcher() {
  pkgdesc="Modular IPC-based desktop launcher service"
  optdepends=('pop-shell-plugin-system76-power')

  cd "launcher-$pkgver"
  install -Dm755 "target/release/$pkgname-bin" "$pkgdir/usr/bin/$pkgname"

  just rootdir="$pkgdir" install_plugins install_scripts

  rm -rf "$pkgdir/usr/lib/$pkgbase/scripts/system76-power"
}

package_pop-shell-plugin-system76-power() {
  pkgdesc="System76 Power scripts for the launcher"
  depends=('gnome-shell-extension-pop-shell' 'system76-power')
  conflicts=('pop-launcher-system76-power')
  replaces=('pop-launcher-system76-power')

  cd "launcher-$pkgver"
  install -d "$pkgdir/usr/lib/$pkgbase/scripts"
  cp -r scripts/system76-power "$pkgdir/usr/lib/$pkgbase/scripts"
}

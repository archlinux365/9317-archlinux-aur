# Maintainer: timvisee <3a4fb3964f@sinenomine.email>
# Maintainer: orhun <orhunparmaksiz@gmail.com>
#
# Based on template. Changes made here will be overwritten each release.
# See: https://gitlab.com/timvisee/prs/-/tree/master/pkg/aur/prs

pkgname=prs
pkgver=0.2.15
pkgrel=1
pkgdesc="Secure, fast & convenient password manager CLI using GPG and git to sync"
arch=('any')
url="https://gitlab.com/timvisee/prs"
license=('GPL3')
depends=('gpgme' 'dbus' 'libxcb' 'libxkbcommon' 'skim' 'tomb')
makedepends=('rust' 'python')
source=("$pkgname-$pkgver.tar.gz::$url/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha512sums=('cb52c3d57d08c17886c3ecbfc32c5ae474176605e7619bc1a0d074ca9716dd7342489e246040e3c9f6f35a0352520183d307478a089ae20b7c4f414a8c80535b')
_prs_cli_features=alias,clipboard,notify,backend-gpgme,select-skim-bin,tomb

build() {
  cd "$pkgname-v$pkgver"
  cargo build --package prs-cli --no-default-features --features $_prs_cli_features --release --locked
}

check() {
  cd "$pkgname-v$pkgver"
  cargo test --package prs-cli --no-default-features --features $_prs_cli_features --release --locked
}

package() {
  cd "$pkgname-v$pkgver"
  install -Dm 755 "target/release/$pkgname" -t "$pkgdir/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}

# Maintainer: Conrad Hoffmann <ch@bitfehler.net>
pkgname=vsync
pkgver=0.1.0
pkgrel=1
pkgdesc="IMAP to maildir synchronization tool"
arch=('x86_64')
url="https://git.sr.ht/~bitfehler/vomit-sync"
license=('GPL3')
depends=('gcc-libs')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::https://git.sr.ht/~bitfehler/vomit-sync/archive/v$pkgver.tar.gz")
sha512sums=('99bf22cbea0f786b1c054f9bd8227e90e8efd0fc3f756a109321b53b24be512ef86668d41ca66c2e4039a4c1e226d984a8d6cd138071eb60921e87573aa6c10a')

build() {
  cd "vomit-sync-v$pkgver"

  cargo build --release --locked -p vsync
}

package() {
  cd "vomit-sync-v$pkgver"

  install -Dm755 "target/release/vsync" "$pkgdir/usr/bin/vsync"

  install -Dm644 "cli/README.md" "$pkgdir/usr/share/doc/${pkgname}/README.md"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

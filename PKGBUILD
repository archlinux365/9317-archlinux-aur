# Maintainer: Andy Bao <contact at andybao dot me>
pkgname=onetun
pkgdesc="Access your WireGuard network from any device, without root access or having to install WireGuard locally."
pkgver=0.3.3
pkgrel=1
arch=('x86_64' 'i686' 'pentium4' 'aarch64' 'armv7h' 'armv6h')
url="https://github.com/aramperes/onetun"
license=('MIT')
makedepends=('cargo')
source=(
    "$url/archive/v$pkgver.tar.gz"
    "$pkgname@.service"
    "$pkgname.target"
    "example.conf"
)
sha256sums=(
    '139b99686b72b2ebd5176e88484d531e2ad688e6906f1530f71ad409a47a4496'
    'SKIP'
    'SKIP'
    'SKIP'
)

build() {
    cd "$pkgname-$pkgver"
    cargo build --release --locked --target-dir=target
}

package() {
    install -Dm644 "$pkgname@.service" -t "$pkgdir/usr/lib/systemd/system/"
    install -Dm644 "$pkgname.target" -t "$pkgdir/usr/lib/systemd/system/"
    install -Dm755 "example.conf" -t "$pkgdir/usr/share/$pkgname/"

    cd "$pkgname-$pkgver"
    install -dm0700 "$pkgdir/etc/$pkgname/"
    install -Dm755 "target/release/onetun" "$pkgdir/usr/bin/onetun"
}

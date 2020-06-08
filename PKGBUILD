# Maintainer: Sosthène Guédon <sosthene.gued@gmail.com>
pkgname=peertube-viewer-rs
pkgver=1.4.1
pkgrel=1
pkgdesc="Peertube command line viewer inspired by youtube-viewer"
arch=('any')
url="https://gitlab.com/SostheneGuedon/peertube-viewer-rs" 
license=('MIT')
depends=('openssl')
makedepends=(
  'rust'
)

source=("https://gitlab.com/SostheneGuedon/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
md5sums=('9d589afba09504bd43bc90890702b10f')

build() {
    cd $pkgname-v$pkgver
    cargo b --release --locked
}

package() {
    cd $pkgname-v$pkgver
    install -Dm755 target/release/peertube-viewer-rs $pkgdir/usr/bin/peertube-viewer-rs
    install -Dm755 completions/peertube-viewer-rs.bash $pkgdir/etc/bash_completion.d/peertube-viewer-rs.bash

    install -Dm755 peertube-viewer-rs.1 $pkgdir/usr/share/man/man1/peertube-viewer-rs.1
    gzip $pkgdir/usr/share/man/man1/peertube-viewer-rs.1
}

# Maintainer: Filipe Nascimento <flipee at tuta dot io>
# Contributor: Christoph W <c w e g e n e r at gmail dot com>

pkgname=usql
pkgver=0.12.11
pkgrel=1
pkgdesc='A universal command-line interface for SQL databases'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/xo/usql"
license=('MIT')
depends=('icu')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f95dacc957acc4cfdf8ae5cfe48ff06fd045ac3ec9b05890b926fb419b412510')

build() {
    cd $pkgname-$pkgver

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"

    TAGS="most sqlite_app_armor sqlite_fts5 sqlite_introspect sqlite_json1
          sqlite_stat4 sqlite_userauth sqlite_vtable sqlite_icu no_adodb"

    go build \
        -tags="$TAGS" \
        -trimpath \
        -buildmode=pie \
        -mod=readonly \
        -modcacherw \
        -ldflags="-linkmode=external
                  -X github.com/xo/usql/text.CommandName=$pkgname
                  -X github.com/xo/usql/text.CommandVersion=$pkgver" \
        -o $pkgname
}

package() {
    cd $pkgname-$pkgver
    install -Dm755 $pkgname -t "$pkgdir/usr/bin"
    install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}

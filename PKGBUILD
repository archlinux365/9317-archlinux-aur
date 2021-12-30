# Maintainer: Christian Muehlhaeuser <muesli at gmail dot com>

pkgname=gitty
pkgver=0.6.0
pkgrel=1
pkgdesc="A smart little CLI helper for git projects"
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/muesli/${pkgname}"
license=('MIT')
makedepends=('git' 'go')
source=("${url}/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('589ae5d663cfc4fd44be5e90ac1f3bedf29a8bb228172e713ae99417be4751cc')

build() {
    local commit
    local extraflags
    commit=$(zcat ${pkgname}-${pkgver}.tar.gz | git get-tar-commit-id)
    extraflags="-X main.Version=${pkgver} -X main.CommitSHA=${commit}"

    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"

    cd "$pkgname-$pkgver"
    go build \
        -trimpath \
        -buildmode=pie \
        -mod=readonly \
        -modcacherw \
        -ldflags "${extraflags} -extldflags \"${LDFLAGS}\"" \
        -o "$pkgname" .
}

package() {
    cd "$pkgname-$pkgver"

    install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=4 sw=4 et:

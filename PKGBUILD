# Maintainer: Luis Martinez <luis dot martinez at tuta dot io>

pkgname=timetrace
pkgver=0.11.0
pkgrel=1
pkgdesc="A simple time-tracking CLI tool"
arch=('x86_64')
url="https://github.com/dominikbraun/timetrace"
license=('Apache')
depends=('glibc')
makedepends=('go')
install="$pkgname.install"
changelog=CHANGELOG.md
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('d6035369a22184cee5eb2c7f17a8662f331598782a14d4656dce5afa28a3ef22')

build() {
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  cd "$pkgname-$pkgver"
  go build -o "$pkgname"
}

check() {
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dvm 755 "$pkgname" -t "$pkgdir/usr/bin/"
  install -Dvm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dvm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}

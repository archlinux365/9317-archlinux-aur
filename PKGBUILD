# Maintainer: Kasimir Wansing <kasimir at wansing dot org>
pkgname=ulist
pkgver=0.10.4
pkgrel=1
pkgdesc="A mailing list service that keeps it simple."
arch=('x86_64')
url="https://github.com/wansing/$pkgname"
license=('GPL')
makedepends=('go')
optdepends=('sqlite')
source=("$url/archive/v$pkgver.tar.gz")
validpgpkeys=('F433936B030F7FB97F4084E4C7C21DFFE932EF9D')
sha256sums=('de87168a2f82130fe6a56280daa78b48a0b89a971142d999e4f6fa8026e67195')

prepare(){
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go generate
  go generate github.com/wansing/ulist/internal/listdb/
  go build -o build -ldflags "-X main.GitCommit=$pkgver"
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
}

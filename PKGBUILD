# Maintainer: Amin Vakil <info AT aminvakil DOT com>

pkgname=dockle
pkgver=0.4.5
pkgrel=1
pkgdesc="Container Image Linter for Security, Helping build the Best-Practice Docker Image"
arch=('any')
url="https://github.com/goodwithtech/dockle"
license=('Apache')
makedepends=('go' 'git' 'btrfs-progs')
source=("${pkgname}-${pkgver}-${pkgrel}.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('c030e4c4121beebf0182fb59a38cae7962fd8121e3e49adb17882541d8bed3aa')

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
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o build ./cmd/${pkgname}
}

test() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
}

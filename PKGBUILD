# Maintainer: Luis Pérez <luis.perez@protonmail.com>
pkgname=doggo
pkgver=0.3.6
pkgrel=1
pkgdesc='Command-line DNS Client for Humans.'
arch=('x86_64')
url="https://github.com/mr-karan/doggo"
license=('GPL')
makedepends=('go')
source=("${url}/archive//v${pkgver}.tar.gz")
conflicts=('doggo-git')
sha256sums=('ae381cd46426110c381e8c83cfc8e8696042b15e301c4877345c5ded8c3889d7')

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
  BUILD_DATE=$(date '+%Y-%m-%d %H:%M:%S')
  go build -o build/$pkgname -ldflags="-X 'main.buildVersion=${pkgver}' -X 'main.buildDate=${BUILD_DATE}'" ./cmd/doggo/cli/
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
}

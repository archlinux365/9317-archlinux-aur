# Maintainer: w0rty <mawo97 at gmail.com>
# Contributor: Mark Wagie <mark dot wagie at tutanota dot com>

pkgname=bit
pkgver=0.9.11
pkgrel=1
pkgdesc='A modern Git CLI'
arch=('x86_64')
url="https://github.com/chriswalz/bit"
license=('Apache')
makedepends=('go')
depends=('git')
conflicts=('bit-git')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
install=$pkgname.install
sha256sums=('a6d7f31d92007725b18f6203c7b9c8f9eaaa49e22f807ad683473d7388350681')

prepare() {
  export GOPATH="$srcdir/gopath"
  go clean -modcache
}

build() {
  cd "$pkgname-$pkgver"
  export GO111MODULE=on
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GO_LDFLAGS="-linkmode=external -extldflags \"${LDFLAGS}\" -s -w -X main.version=v${pkgver}"
  go build -v -buildmode=pie -trimpath -ldflags="${GO_LDFLAGS}" -mod=readonly -modcacherw .
  go build -v -buildmode=pie -trimpath -ldflags="${GO_LDFLAGS}" -mod=readonly -modcacherw -o bitcomplete/bitcomplete
 
  # Clean mod cache for makepkg -C
  go clean -modcache
}
 
package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "$pkgname" bitcomplete/bitcomplete -t "$pkgdir/usr/bin"
}

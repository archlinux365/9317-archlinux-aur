# Maintainer: Axel Lehmann <lehmann at cs dot uni-freiburg do de>
pkgname=gantry
pkgver=v0.2.0
pkgrel=1
pkgdesc='Pipeline management tool using containers as its building blocks'
arch=('x86_64')
url="https://github.com/ad-freiburg/gantry"
license=('APACHE')
depends=('docker')
makedepends=('go-pie' 'git')
optdepends=('wharfer: wrapper around docker')
provides=("${pkgname}")
conflicts=("${pkgname}-git")
source=("${pkgname}::git+${url}#tag=$pkgver")
md5sums=('SKIP')

build() {
  cd "$pkgname"
  go build \
    -gcflags "all=-trimpath=$PWD" \
    -asmflags "all=-trimpath=$PWD" \
    -ldflags "-X github.com/ad-freiburg/gantry.Version=$(git describe --always --long --dirty) -extldflags $LDFLAGS" \
    -o $pkgname cmd/gantry/gantry.go
}

package() {
  cd "$pkgname"
  install -Dm755 $pkgname "$pkgdir"/usr/bin/${pkgname}
}

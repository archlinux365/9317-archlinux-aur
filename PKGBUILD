# Maintainer: David Birks <david@birks.dev>

pkgname=kapp
pkgdesc='A simple deployment tool focused on the concept of a Kubernetes application'
pkgver=0.25.0
pkgrel=1
arch=('x86_64')
license=('Apache')
url='https://github.com/k14s/kapp'
depends=('kubectl')
makedepends=('go')
conflicts=('kapp-git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/k14s/kapp/archive/v$pkgver.tar.gz")
sha256sums=('3844bd05fc97c1ff83e3afb752ea70b967e12bbc6d53e13b89ccb9a7d11e7380')

prepare() {
  # Make fake gopath
  mkdir -p gopath/src/github.com/k14s
  ln -rTsf $pkgname-$pkgver gopath/src/github.com/k14s/kapp
}

build() {
  # Trim PWD from binary
  export GOFLAGS="-gcflags=all=-trimpath=${PWD} -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=-zrelro -ldflags=-extldflags=-znow"

  export GOPATH="$srcdir"/gopath
  cd gopath/src/github.com/k14s/kapp
  go build -o kapp ./cmd/kapp/...
}

package() {
  install -Dm 755 "$srcdir/$pkgname-$pkgver/$pkgname" "$pkgdir/usr/bin/$pkgname"
}

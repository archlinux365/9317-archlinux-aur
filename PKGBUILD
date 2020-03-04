# Maintainer: Adrian Petrescu <adrian@apetre.sc>

pkgname=cf-tool
pkgver=1.0.0
pkgrel=1
pkgdesc="A command-line tool for Codeforces contests"
arch=('x86_64')
url="https://github.com/xalanq/cf-tool"
license=('MIT')
depends=('glibc')
makedepends=('go-pie' 'git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/xalanq/cf-tool/archive/v$pkgver.tar.gz")
sha512sums=('5800f79c391d82a8cfd1649c1833d1e1d89f4113beefc6bbbd97e8c4bff48add427b4038d9113cb287d5549c61609e10ee4c06c6e3d3d38ad2b8eea59a903bb3')

prepare() {
  cd $pkgname-$pkgver

  mkdir -p .gopath/src/github.com/xalanq
  ln -sf "$PWD" .gopath/src/github.com/xalanq/cf-tool
  export GOPATH="$PWD/.gopath"

  go get github.com/xalanq/cf-tool
}

build() {
  cd $pkgname-$pkgver/.gopath/src/github.com/xalanq/cf-tool

  go build -o cf -trimpath -ldflags "-s -w" cf.go
}

package() {
  cd $pkgname-$pkgver

  install -Dm755 cf "$pkgdir"/usr/bin/cf
}

# Maintainer: David Birks <david@tellus.space>

pkgname=kubeseal
pkgver=0.9.0
pkgrel=1
pkgdesc="A tool for one-way encrypted secrets in Kubernetes"
arch=(x86_64)
url="https://github.com/bitnami-labs/sealed-secrets"
license=('Apache')
makedepends=('go')
conflicts=('kubeseal-bin')
source=("$pkgname-$pkgver.tar.gz::https://github.com/bitnami-labs/sealed-secrets/archive/v$pkgver.tar.gz")
sha512sums=('dc6220853d2c32cad9695b16f0a534fa3c34f524363c13722253a0d5466865b0f9a7100fdbb69e4c6e6cd00af83b4c086c35703214abbef7a93e76819ea1429c')

build() {
  # Trim path from binary
  export GOFLAGS="-gcflags=all=-trimpath=${PWD} -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=-zrelro -ldflags=-extldflags=-znow"

  cd sealed-secrets-$pkgver
  go build --ldflags "-X main.VERSION=$pkgver" ./cmd/kubeseal
}

package() {
  install -Dm 755 "$srcdir/sealed-secrets-$pkgver/$pkgname" "$pkgdir/usr/bin/$pkgname"
}

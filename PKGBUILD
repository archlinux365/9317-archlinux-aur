# Maintainer: Stefan Tatschner <stefan@rumpelsepp.org>

pkgname=dendrite
pkgver=0.3.0
pkgrel=1
pkgdesc="A second-generation Matrix homeserver written in Go"
arch=('x86_64')
url='https://github.com/matrix-org/dendrite'
license=('Apache')
makedepends=('go')
source=("https://github.com/matrix-org/dendrite/archive/v$pkgver/dendrite-v$pkgver.tar.gz"
        "dendrite.service")
sha256sums=('12b87aebb5021b0ebaba3b8ee3d33e9c124affff050b72708a2661442908b7ea'
            '5957e293152b982aacb2fbb7f29e889f7d174dd6a718b28ee69a1b1d368ff125')

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build ./cmd/dendrite-monolith-server
  go build ./cmd/generate-config
  go build ./cmd/generate-keys
}

check() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go test ./cmd/dendrite-monolith-server
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 ./dendrite-monolith-server "$pkgdir/usr/bin/${pkgname}"
  install -Dm755 ./generate-config          "$pkgdir/usr/bin/${pkgname}-generate-config"
  install -Dm755 ./generate-keys            "$pkgdir/usr/bin/${pkgname}-generate-keys"
  install -Dm755 "$srcdir/dendrite.service" "$pkgdir/usr/lib/systemd/system/${pkgname}.service"
}

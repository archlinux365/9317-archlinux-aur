# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=immortal
pkgver=0.24.3
pkgrel=1
pkgdesc="A *nix cross-platform (OS agnostic) supervisor"
arch=('x86_64')
url='https://immortal.run'
license=('BSD')
depends=('glibc')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/immortal/immortal/archive/${pkgver}.tar.gz")
sha256sums=('e31d5afb9028fb5047b5a2cc5f96c844f6480d600643a12075550f497e65f5cb')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p build/
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/cmd/immortal"
  cd "${srcdir}/${pkgname}-${pkgver}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go build -o build ./...
  gzip --force man/immortal.8
  gzip --force man/immortalctl.8
  gzip --force man/immortaldir.8
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 build/immortal -t "${pkgdir}/usr/bin/"
  install -Dm755 build/immortalctl -t "${pkgdir}/usr/bin/"
  install -Dm755 build/immortaldir -t "${pkgdir}/usr/bin/"
  install -Dm644 man/immortal.8.gz -t "${pkgdir}/usr/share/man/man8"
  install -Dm644 man/immortalctl.8.gz -t "${pkgdir}/usr/share/man/man8"
  install -Dm644 man/immortaldir.8.gz -t "${pkgdir}/usr/share/man/man8"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  mkdir -p "${pkgdir}/usr/share/doc/immortal/"
  cp -aR example "${pkgdir}/usr/share/doc/immortal/"
}
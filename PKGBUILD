# Maintainer: Caesim404 <caesim404 at gmail dot com>

pkgname="hola-proxy"
pkgver=1.3.0
pkgrel=1
pkgdesc="Standalone Hola proxy client"
arch=(x86_64)
url="https://github.com/Snawoot/hola-proxy"
license=(MIT)
makedepends=(go)
source=("https://github.com/Snawoot/hola-proxy/archive/v${pkgver}.tar.gz")
sha256sums=('7eae6a4e21c978721f84692afe09e791e2ad6b4398a8870d989daa89e459080f')

prepare() {
    cd "${pkgname}-${pkgver}"
    mkdir -p build
}

build() {
    cd "${pkgname}-${pkgver}"
    
    export GOPATH="$srcdir/gopath"
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
    
    go build -o build .
}

package() {
    cd "${pkgname}-${pkgver}"
    
    install -Dm755 "build/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

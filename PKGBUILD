# Maintainer: Sematre <sematre at gmx dot de>
pkgname=piknik
pkgver=0.10.1
pkgrel=1
pkgdesc="Copy/paste anything over the network."
arch=('any')
url="https://github.com/jedisct1/${pkgname}"
license=('ISC')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
md5sums=('964ae408ff8b0e254695205f9d978f61')

build() {
  cd "${pkgname}-${pkgver}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm 755 "${pkgname}" -t "$pkgdir/usr/bin"
  install -Dm 644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"
}

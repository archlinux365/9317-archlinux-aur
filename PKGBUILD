# Maintainer: Hao Long <aur@esd.cc>

pkgname=ksubdomain
pkgver=0.5.1
pkgrel=1
pkgdesc="无状态子域名爆破工具"
arch=("x86_64" "i686")
url="https://github.com/knownsec/ksubdomain"
license=("MIT")
depends=("libpcap")
makedepends=("go")
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('61e664c8027dc2e25eaaef6850a90092734df951e3974c7beca14ddb0f284641')

build() {
  cd ${pkgname}-${pkgver}/cmd
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o ../${pkgname} .
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
}


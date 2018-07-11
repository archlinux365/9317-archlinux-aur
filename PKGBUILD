# Maintainer: Shalygin Konstantin <k0ste@k0ste.ru>
# Contributor: Shalygin Konstantin <k0ste@k0ste.ru>

pkgname='nginx-vts-exporter'
pkgver='0.10.3'
pkgrel='1'
pkgdesc='Simple server that scrapes Nginx vts stats and exports them via HTTP for Prometheus consumption'
arch=('x86_64' 'i686')
url="https://github.com/hnlq715/${pkgname}"
license=('MIT')
makedepends=('go')
source=("${url}/archive/v${pkgver}.tar.gz"
        "${pkgname}.service")
sha256sums=('a07e0a6170ac490f96a8e505795dcbfa0233976cf1efd36057014cff49622d95'
            '7838c08b3299d2d6d5bb0b6c281f1fcee8f9dc254bfb5e1a8d59699e52495f06')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export GOPATH="${srcdir}/gopath"
  export GOBIN="${GOPATH}/bin"
  mkdir -p "${GOPATH}/src/github.com/hnlq715"
  ln -snf "${srcdir}/${pkgname}-${pkgver}" "${GOPATH}/src/github.com/hnlq715/${pkgname}"
}

build() {
  export GOPATH="${srcdir}/gopath"
  cd "${GOPATH}/src/github.com/hnlq715/${pkgname}"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}

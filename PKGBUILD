# Maintainer: Josh Ellithorpe <quest at mac dot com>

pkgname=visago
pkgver=0.3.1
pkgrel=0
pkgdesc="Visual AI Aggregator."
arch=('i686' 'x86_64')
url="http://github.com/zquestz/visago"
license=('MIT')
makedepends=('go' 'git')
options=('!strip' '!emptydirs')
provides=("s=${pkgver}")
source=("https://github.com/zquestz/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('f94539f9699f1e811b7dd819ef67dd17e2429bae48d122d75bb3d6100dc784cd')
_gourl="github.com/zquestz/${pkgname}"

build() {
  cd "${pkgname}-${pkgver}"
  export GOPATH="${srcdir}"
  export GOBIN="${srcdir}/bin"
  go get -v ${_gourl}
}

package() {
  install -Dm 775 "${srcdir}/bin/${pkgname}" \
    "${pkgdir}/usr/bin/${pkgname}"
  install -Dm 644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

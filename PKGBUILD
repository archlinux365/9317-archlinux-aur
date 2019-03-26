# Maintainer: Noel Kuntze <noel.kuntze at thermi dot consulting>
# Contributor: Mikael Eriksson <mikael_eriksson@miffe.org>
# Contributor: Stephan Eisvogel <eisvogel at embinet dot de

pkgname=pdfcpu
_gourl=github.com/hhrutter/pdfcpu
pkgver=0.1.22
pkgrel=1
pkgdesc="A PDF processor written in Go"
arch=(i686 x86_64 armv7h)
url="https://github.com/hhrutter/pdfcpu"
license=('Apache')
makedepends=(go)

source=(pdfcpu-$pkgver.tar.gz::https://$_gourl/archive/v$pkgver.tar.gz)

sha256sums=('452860b423d930d9c751cdcd765381370cdb87e55133a3495bd74bdd36ecb62d')

prepare() {
    export GOPATH="${srcdir}/build"
    mkdir -p "${GOPATH}/src/github.com/hhrutter/"
    mv "${srcdir}/${pkgname}-${pkgver}" "${GOPATH}/src/$_gourl"
    go get -v $_gourl/cmd/${pkgname}
}

build() {
    export GOPATH="${srcdir}/build"
    cd "${GOPATH}/src/$_gourl/cmd/${pkgname}"
    go build -pkgdir "${pkgdir}"
}

package() {
    # copy binary
    install -Dm0755 "${srcdir}/build/bin/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"

    # copy README.md and other documentation
    install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" "${srcdir}/build/src/$_gourl/README.md"
    # copy the license
    install -Dm644  "${srcdir}/build/src/${_gourl}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}

# Maintainer: Fabian Köhler <fabian.koehler@protonmail.ch>
# Contributor: Fabian Köhler <fabian.koehler@protonmail.ch>

pkgname=dsnet
_pkgname=${pkgname}
pkgver=0.5
pkgrel=3
pkgdesc="Simple command to manage a centralised wireguard VPN."
arch=(any)
url="https://github.com/naggie/dsnet"
license=(MIT)
makedepends=("go" "git")
depends=("glibc")
provides=(${_pkgname})
conflicts=(${_pkgname})
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz" "systemd.patch")
sha256sums=('4f68df3df59ea6ae251ad0b3c491b4ac1f95a6035fc516a04aa2bae5a3451d64'
            'c6df08c39903daf29dc03cda1b0723690ec40c85b75b8f5f9a736ba1189002cd')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    patch --forward --strip=1 --input="${srcdir}/systemd.patch"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    go build \
        -gcflags "all=-trimpath=${PWD}" \
        -asmflags "all=-trimpath=${PWD}" \
        -ldflags "-linkmode external -extldflags ${LDFLAGS}" \
        -buildmode=pie \
        -o dsnet \
        ./cmd/dsnet.go
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    install -Dm755 "dsnet" "${pkgdir}/usr/bin/dsnet"
    install -Dm644 "LICENSE.md" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 "etc/dsnet.service" "${pkgdir}/usr/lib/systemd/system/dsnet.service"
}

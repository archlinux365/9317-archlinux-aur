# Maintainer: Musee "lae" Ullah <lae(at)lae(dot)is>

pkgname=drpcli
pkgver=4.1.2
pkgrel=1
pkgdesc="Command-line client for Digital Rebar Provision, an API-driven DHCP/PXE/TFTP provisioning system."
arch=('x86_64')
url="https://github.com/digitalrebar/provision"
license=('Apache')
provides=('drpcli')
optdepends=('jq: for parsing and syntax colouring JSON responses'
            'bash-completion: tab completion')
makedepends=('go')
source=("https://github.com/digitalrebar/provision/archive/v${pkgver}.tar.gz")
sha256sums=('baa867a14abd20f328bea7c476b8d4c8fd9232df116bf6f5a0eccf13dd8c9a06')

build() {
    _ver=(${pkgver//\./ })
    export CGO_ENABLED=0
    export GO111MODULE=on
    export VERFLAGS="-s -w \
        -X github.com/digitalrebar/provision/v4.RSMajorVersion=${_ver[0]} \
        -X github.com/digitalrebar/provision/v4.RSMinorVersion=${_ver[1]} \
        -X github.com/digitalrebar/provision/v4.RSPatchVersion=${_ver[2]} \
        -X github.com/digitalrebar/provision/v4.RSExtra=-${pkgrel} \
        -X github.com/digitalrebar/provision/v4.BuildStamp=$(date -u '+%Y-%m-%d_%I:%M:%S%p')"
    cd "${srcdir}/provision-${pkgver}/cmds/drpcli"
    go build -ldflags "${VERFLAGS}" -o "${srcdir}/drpcli"
    "${srcdir}/drpcli" autocomplete "${srcdir}/drpcli.definitions"
}

package() {
    install -Dm755 "${srcdir}/drpcli" "${pkgdir}/usr/bin/drpcli"
    install -Dm644 "${srcdir}/drpcli.definitions" "${pkgdir}/usr/share/bash-completion/completions/drpcli"
}

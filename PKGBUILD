# Maintainer: Hork <aliyuchang33@outlook.com>
# Contributer: ArielAxionL <i at axionl dot me>
# Contributor: DuckSoft <realducksoft@gmail.com>
pkgname=qv2ray-dev-git
pkgver=1.99.4.r47514d2
pkgrel=1
pkgdesc="Qt cross platform v2ray GUI client (Dev branch build release)"
arch=('x86_64')
url="https://github.com/lhy0403/Qv2ray"
license=('GPL3')
depends=('hicolor-icon-theme' 'grpc' 'qt5-charts')
makedepends=('git' 'make' 'qt5-tools' 'protobuf' 'which' 'gcc' 'qt5-declarative')
optdepends=('v2ray' 'v2ray-domain-list-community' 'v2ray-geoip')
provides=('qv2ray')
conflicts=('qv2ray')
source=("${pkgname}::git+https://github.com/lhy0403/Qv2ray#branch=dev")

sha512sums=('SKIP')

pkgver() {
    cd ${pkgname}
    printf "%s.r%s" $(git describe --long --tags | sed 's/v//;s/-\S*//g') $(git rev-parse --short HEAD)
}

prepare() {
    cd "${pkgname}"
    sh -c "tools/grpc_gen.sh"
}

build() {
    cd "${srcdir}/${pkgname}"
    git submodule update --init --depth=1
    mkdir -p build && cd build
    qmake 'DEFINES += QV2RAY_DEFAULT_VCORE_PATH=\\\"/usr/bin/v2ray\\\"' 'DEFINES += QV2RAY_DEFAULT_VASSETS_PATH=\\\"/usr/lib/v2ray\\\"' ../
    make
}

package() {
    cd "${srcdir}/${pkgname}"
    install -Dm755 build/qv2ray "${pkgdir}/usr/bin/qv2ray"
    install -Dm644 icons/qv2ray.desktop "${pkgdir}/usr/share/applications/qv2ray.desktop"
    install -Dm644 icons/qv2ray.png "${pkgdir}/usr/share/icons/hicolor/256x256/apps/qv2ray.png"
}

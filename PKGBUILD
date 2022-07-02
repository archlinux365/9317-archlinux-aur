# Maintainer: Stella <stellarinfinity@riseup.net>
pkgname=danser-git
url="https://github.com/Wieku/danser-go"
pkgver=0.7.0.r3.gabfe0a9d
pkgrel=1
pkgdesc="Dancing visualizer of osu! maps and custom osu! client written in Go (git version)"
arch=('any')
license=('MIT')
source=("git+https://github.com/Wieku/danser-go.git")
conflicts=('danser')
sha256sums=('SKIP')
depends=(
    'libyuv'
    'ffmpeg'
    'gtk3'
)
makedepends=(
    'xorg-server-devel'
    'libxi'
    'libxinerama'
    'libxrandr'
    'go>=1.17'
    'git'
    'gcc'
)

pkgver() {
    cd "${srcdir}/danser-go"
    git describe --long --tags --abbrev=8 | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/danser-go"
    git checkout dev
}

build() {
    cd "${srcdir}/danser-go"

    # build the library first for the gui and the hollowed out cli
    go build \
        -trimpath \
        -modcacherw \
        -mod=readonly \
        -ldflags "-s -w -X 'github.com/wieku/danser-go/build.VERSION=$build'
            -X 'github.com/wieku/danser-go/build.Stream=Release'" \
        -buildmode=c-shared \
        -o danser-core.so \
        -v -x

    mv danser-core.so libdanser-core.so

    # build the CLI
    cc -o danser -I. cmain/main_danser.c -Wl,-rpath,. -Wl,-rpath,/usr/lib/danser -L. -ldanser-core
    # build the launcher
    cc -D LAUNCHER -o danser-launcher -I. cmain/main_danser.c -Wl,-rpath,. -Wl,-rpath,/usr/lib/danser -L. -ldanser-core
}

package() {
    cd "${srcdir}/danser-go"
    mkdir -p "${pkgdir}/usr/lib/danser" "${pkgdir}/usr/bin"

    install -Dm755 libdanser-core.so libbass.so libbass_fx.so libbassmix.so assets.dpak "${pkgdir}/usr/lib/danser"
    cp -r "assets" "${pkgdir}/usr/lib/danser/assets"
    chmod 755 "${pkgdir}/usr/lib/danser/assets"

    install -Dm755 danser "${pkgdir}/usr/lib/danser/danser"
    install -Dm755 danser-launcher "${pkgdir}/usr/lib/danser/danser-gui"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    ln -s "/usr/lib/danser/danser" "${pkgdir}/usr/bin/danser"
    ln -s "/usr/lib/danser/danser-gui" "${pkgdir}/usr/bin/danser-gui"
}

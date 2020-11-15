# Maintainer: DuckSoft <realducksoft at gmail dot com>
pkgname=qv2ray-plugin-command-dev-git
_pkgname=qv2ray-plugin-command
pkgver=20201115.r21.566fe69
pkgrel=1
pkgdesc="Qv2ray Plugin: Command (Development Build)"
arch=('x86_64')
url='https://github.com/Qv2ray/QvPlugin-Command'
license=('GPL3')
# _virtualdepends=('qv2ray-plugin-host=1')
depends=('qt5-base>5.11.0' 'qv2ray')
makedepends=('git' 'make' 'qt5-tools' 'which' 'gcc' 'cmake' 'ninja')
provides=('qv2ray-plugin-command')
conflicts=('qv2ray-plugin-command')
groups=('qv2ray-plugin')
source=("$_pkgname::git+${url}#branch=dev")
sha512sums=('SKIP')
pkgver() {
    cd "$srcdir"/"$_pkgname"
    local date=$(git log -1 --format="%cd" --date=short | sed s/-//g)
    local count=$(git rev-list --count HEAD)
    local commit=$(git rev-parse --short HEAD)
    echo "$date.r${count}.$commit"
}
prepare() {
    cd "$srcdir"/"$_pkgname"
    git submodule update --init
}
build() {
    cd "$srcdir"/"$_pkgname"
    mkdir -p build && cd build
    cmake .. \
        -DCMAKE_INSTALL_PREFIX="${pkgdir}"/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -GNinja
    cmake --build .
}
package() {
    cd "$srcdir"/"$_pkgname"/build
    cmake --install .
    # NOTE: This virtual dependency will be introduced after Qv2ray stablize its interface.
    #     depends+=(${_virtualdepends[@]})
} 

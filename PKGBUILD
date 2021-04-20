# Maintainer: Andrew Rabert <ar@nullsum.net>

pkgname=jellyfin-media-player
pkgver=1.4.1
pkgrel=1
pkgdesc='Jellyfin Desktop Client'
arch=('i686' 'x86_64')
license=('GPL')
url='https://github.com/iwalton3/jellyfin-media-player'
depends=('mpv' 'libcec' 'sdl2' 'p8-platform' 'protobuf' 'qt5-webengine' 'qt5-x11extras' 'qt5-quickcontrols')
makedepends=('cmake' 'git')
source=("https://github.com/iwalton3/jellyfin-media-player/archive/refs/tags/v${pkgver}.tar.gz"
        'jwc-10.7.2-2.tar.gz::https://github.com/iwalton3/jellyfin-web-jmp/releases/download/jwc-10.7.2-2/dist.zip')
sha256sums=('8cfa99e740ae6b42e990ef56e5112f7dfec7c4eb8f12b6dea1eac2aa3a8a7025'
            '214e69f97ea862cbfc9c9a92ec832e6f145d9adbc2e2fb2c06940088e1c808f5')

build() {
    cd "${srcdir}/jellyfin-media-player-${pkgver}"
    mkdir -p build
    cd build
    cp -r "${srcdir}/dist" .
    cmake -DCMAKE_INSTALL_PREFIX='/usr/' -DCMAKE_BUILD_TYPE='Release' -DQTROOT=./qt -DCMAKE_SKIP_RPATH=1 ..
    make
}

package() {
    cd "${srcdir}/jellyfin-media-player-${pkgver}/build"
    DESTDIR="${pkgdir}" make install
}

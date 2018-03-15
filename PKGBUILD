# Contributor: Andrew Rabert <draje@nullsum.net>

pkgname=scrcpy
pkgver=1.1
pkgrel=1
pkgdesc='Display and control your Android device'
arch=('i686' 'x86_64')
url='https://github.com/Genymobile/scrcpy'
license=('Apache')
depends=('ffmpeg' 'sdl2')
makedepends=('gcc' 'meson')
optdepends=('android-sdk-platform-tools: required if adb is not already installed')
source=("https://github.com/Genymobile/scrcpy/archive/v${pkgver}.tar.gz"
        "scrcpy-server.jar::https://github.com/Genymobile/scrcpy/releases/download/v${pkgver}/scrcpy-server-v${pkgver}.jar")
sha256sums=('1b56caa4aad5add2c49ea436e9f26282b55a413003d0d73b029a1fbf48da0a1c'
            '14826512bf38447ec94adf3b531676ce038d19e7e06757fb4e537882b17e77b3')

_srcname="scrcpy-${pkgver}"


build() {
    cd ${_srcname}

    rm -rf build
    meson build --buildtype release --strip -Db_lto=true \
        -Dbuild_server=false \
        -Doverride_server_path=/usr/share/scrcpy/scrcpy-server.jar
    cd build
    ninja
}

package() {
    mkdir -p "${pkgdir}"/usr/bin "${pkgdir}"/usr/share/scrcpy
    install -m 755 ${_srcname}/build/app/scrcpy "${pkgdir}"/usr/bin/
    install -m 755 scrcpy-server.jar "${pkgdir}"/usr/share/scrcpy/
}

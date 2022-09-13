# Maintainer: bkacjios < blackops7799 at gmail dot com >
# Contributor: Guillaume Hayot < ghayot at postblue dot info >
pkgname=emulationstation
_gitname=EmulationStation
pkgver=2.10.3
pkgrel=2
pkgdesc="Emulation Station is a flexible emulator front-end supporting keyboardless navigation and custom system themes."
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/RetroPie/EmulationStation"
license=('MIT')
install=emulationstation.install
depends=('vlc' 'alsa-lib' 'sdl2' 'boost-libs' 'freeimage' 'curl' 'libraw' 'libcec' 'rapidjson' 'pugixml')
makedepends=('cmake' 'boost' 'freetype2' 'curl')
optdepends=('ttf-droid: Fallback fonts for Chinese/Japanese/Korean characters'
            'dolphin-emu: GameCube and Wii support'
            'mupen64plus: Nintendo 64 support'
            'mednafen: NES and GBA support'
            'zsnes: SNES support'
            'stella: Atari 2600 support'
            'ppsspp-headless: PSP support'
            'steam: Steam support')
conflicts=(emulationstation-git)
source=("${url}/archive/v$pkgver.tar.gz"
        "install.patch"
        "pugixml.patch"
        "time.patch"
        "emulationstation.desktop"
        "emulationstation.png")
sha256sums=('eddc90ee3c79ee30e762de088e7c3e3b94f2e99c68f764a929f7dda7fc7d8c36'
            '2608b7de63be4d4d117c2712517e3c40df872f6619f08ac9356f13bdc8c179ab'
            'e6cb6a134117cb734c69ed86eecd31cfe29b5d52aa3e00b71a614809c1d7e0fe'
            '83f4bec9a832f904be85ee2a9f514572c2ac03fb77a5234044e856c499df0821'
            '56a68a60577d015224d721ab169f1439d1545a0fdcf1c23eeee599dc49ea51c6'
            'ac589d9da5c258226f8de76e99afe2b07ac86030ced90d284d31b51193057f9c')

prepare() {
    rm -rf "${_gitname}-${pkgver}/external/pugixml"
    rm -rf "${_gitname}-${pkgver}/.gitmodules"

    patch -d "${_gitname}-${pkgver}" -Np1 -i "${srcdir}/install.patch"
    patch -d "${_gitname}-${pkgver}" -Np1 -i "${srcdir}/pugixml.patch"
    patch -d "${_gitname}-${pkgver}" -Np1 -i "${srcdir}/time.patch"
}

build() {
    # Default to using desktop GL
    _cmakeflags='-DGL:BOOL=ON'

    if [[ "${CARCH}" = 'armv6h' ]]; then
        # Raspberry Pi Model 1 only supports embedded GLES, also enable omxplayer
        _cmakeflags='-DGLES:BOOL=ON -DRPI:BOOL=ON'
    elif [[ "${CARCH}" == 'armv7h' || "${CARCH}" = 'aarch64' ]]; then
        # Raspberry Pi Model 2 and up use mesa drivers
        _cmakeflags='-DUSE_MESA_GLES:BOOL=ON'
    fi

    cmake -B "${_gitname}-${pkgver}/build" \
        -S "${_gitname}-${pkgver}" \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_LIBDIR:PATH='lib' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        ${_cmakeflags} \
        -Wno-dev -Wno-deprecated \
    ..
    make -C "${_gitname}-${pkgver}/build" all
}

package() {
    make -C "${_gitname}-${pkgver}/build" DESTDIR="${pkgdir}" install
    install -Dm644 "$srcdir/emulationstation.png" "$pkgdir/usr/share/icons/hicolor/256x256/apps/emulationstation.png"
    install -Dm644 "$srcdir/emulationstation.desktop" "$pkgdir/usr/share/applications/emulationstation.desktop"
}

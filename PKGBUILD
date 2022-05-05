# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>

pkgname=realesrgan-ncnn-vulkan
_pkgname=Real-ESRGAN-ncnn-vulkan
pkgver=0.2.0
_pkgver="v$pkgver"
pkgrel=1
pkgdesc="NCNN implementation of Real-ESRGAN"
url="https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan"
license=('MIT')
depends=('vulkan-icd-loader' 'vulkan-driver' 'libwebp' 'gcc-libs' 'glslang')
makedepends=('git' 'cmake' 'vulkan-headers')
conflicts=('realesrgan-ncnn-vulkan-bin')
provides=('realesrgan-ncnn-vulkan')
arch=('x86_64')
source=(
    "git+https://github.com/xinntao/$_pkgname#tag=${_pkgver}"
    "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip"
    "realesrgan-ncnn-vulkan"
    )

sha256sums=('SKIP'
            'e5aa6eb131234b87c0c51f82b89390f5e3e642b7b70f2b9bbe95b6a285a40c96'
            '058bc5167a00ff53a6a135ed033797a4d012bdb86e930ba4eb271ab4c848f8df')
prepare() {
    cd "${srcdir}/${_pkgname}"
    git submodule update --init --recursive
}

build() {
    cd "$srcdir/$_pkgname"
    
    if [[ -d build ]]; then
        cd build
        make
    else
        mkdir build && cd build
        cmake ../src/ \
        -DBUILD_SHARED_LIBS=1 \
        -DUSE_SYSTEM_NCNN=0 \
        -DUSE_SYSTEM_WEBP=1 \
        -DCMAKE_INSTALL_PREFIX=/usr
    fi
        make

}

package() {
    cd "${srcdir}/${_pkgname}/build"

    install -Dm644 realesrgan-ncnn-vulkan "$pkgdir/usr/lib/realesrgan-ncnn-vulkan/realesrgan-ncnn-vulkan"
    chmod +x "$pkgdir/usr/lib/realesrgan-ncnn-vulkan/realesrgan-ncnn-vulkan"

    cd "${srcdir}"
    
    install -Dm644 realesrgan-ncnn-vulkan "$pkgdir/usr/bin/realesrgan-ncnn-vulkan"
    chmod +x "$pkgdir/usr/bin/realesrgan-ncnn-vulkan"

    mkdir -p "$pkgdir/usr/share/realesrgan-ncnn-vulkan/"
    cp -r models "$pkgdir/usr/share/realesrgan-ncnn-vulkan/models"
}

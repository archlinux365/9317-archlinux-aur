# Maintainer: Anima <contact@animafps.xyz>
pkgname=teres
pkgver=0.2.3
pkgrel=1
pkgdesc="Easily and efficiently add motion blur and or framerate to videos through interpolation and frameblending"
depends=('vapoursynth-plugin-havsfunc' 'vapoursynth' 'ffmpeg' 'vapoursynth-plugin-svpflow1' 'ffms2' 'vapoursynth-plugin-svpflow2-bin' 'vapoursynth-plugin-mvsfunc-git')
optdepends=('vapoursynth-plugin-rife-ncnn-vulkan-git: RIFE-NCNN Vulkan support'
'vapoursynth-plugin-vsrife-git: RIFE CUDA support')
makedepends=('rust' 'cargo' 'python' 'gtk3')
arch=('x86_64')
license=('GPL3')
url="https://github.com/animafps/teres"
source=("$pkgname-$pkgver.tar.gz::https://github.com/animafps/teres/archive/v$pkgver.tar.gz")
sha256sums=(SKIP)

prepare() {
    cd $pkgname-$pkgver
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
    cd $pkgname-$pkgver
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --all-features
}

check() {
    cd $pkgname-$pkgver
    export RUSTUP_TOOLCHAIN=stable
    cargo test --frozen --all-features
}

package() {
    cd $pkgname-$pkgver
    curl https://github.com/couleurm/vs-frameblender/releases/download/1.2/vs-frameblender-1.2.so -o vs-frameblender-1.2.so
    install -Dt "$pkgdir/usr/lib/vapoursynth/" vs-frameblender-1.2.so
    python plugins/weighting.py install
    python plugins/filldrops.py install

    install -Dm0755 -t "$pkgdir/usr/bin" "target/release/$pkgname" 

    install -Dm644 README.md "$pkgdir/usr/share/doc/${pkgname}/README.md"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

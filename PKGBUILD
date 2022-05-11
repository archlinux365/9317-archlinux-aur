# Maintainer: katt <magunasu.b97@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

pkgname=ffmpeg-headless
pkgver=5.0.1
pkgrel=2
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video; optimised for server (headless) systems'
arch=(i686 x86_64 armv7h armv6h aarch64)
url=https://ffmpeg.org/
license=(GPL3)
depends=(
    aom
    bzip2
    fontconfig
    fribidi
    gmp
    gnutls
    gsm
    lame
    libass.so
    libbluray.so
    libdav1d.so
    libdrm
    libfreetype.so
    libmodplug
    librav1e.so
    librsvg-2.so
    libsoxr
    libssh
    libtheora
    libva.so
    libvdpau
    libvidstab.so
    libvorbisenc.so
    libvorbis.so
    libvpx.so
    libwebp
    libx264.so
    libx265.so
    libxml2
    libxvidcore.so
    libzimg.so
    opencore-amr
    openjpeg2
    opus
    speex
    srt
    v4l-utils
    vmaf
    xz
    zlib
)
makedepends=(
    amf-headers
    avisynthplus
    clang
    ffnvcodec-headers
    git
    ladspa
    nasm
)
optdepends=(
    'avisynthplus: AviSynthPlus support'
    'intel-media-sdk: Intel QuickSync support'
    'ladspa: LADSPA filters'
    'nvidia-utils: Nvidia NVDEC/NVENC support'
)
provides=(
    libavcodec.so
    libavdevice.so
    libavfilter.so
    libavformat.so
    libavutil.so
    libpostproc.so
    libswresample.so
    libswscale.so
    "${pkgname%-headless}"
)
conflicts=("${pkgname%-headless}")
source=(git+https://git.ffmpeg.org/ffmpeg.git#tag=9687cae2b468e09e35df4cea92cc2e6a0e6c93b3)
b2sums=('SKIP')

pkgver() {
    git -C "${pkgname%-headless}" describe --tags | sed 's/^n//'
}

build() {
    cd ${pkgname%-headless}

    ./configure \
        --prefix=/usr \
        --disable-debug \
        --disable-static \
        --disable-stripping \
        --disable-amf \
        --enable-avisynth \
        --enable-cuda-llvm \
        --enable-lto \
        --enable-fontconfig \
        --enable-gmp \
        --enable-gnutls \
        --enable-gpl \
        --enable-ladspa \
        --enable-libaom \
        --enable-libass \
        --enable-libbluray \
        --enable-libdav1d \
        --enable-libdrm \
        --enable-libfreetype \
        --enable-libfribidi \
        --enable-libgsm \
        --disable-libiec61883 \
        --disable-libjack \
        --disable-libmfx \
        --enable-libmodplug \
        --enable-libmp3lame \
        --enable-libopencore_amrnb \
        --enable-libopencore_amrwb \
        --enable-libopenjpeg \
        --enable-libopus \
        --disable-libpulse \
        --enable-librav1e \
        --enable-librsvg \
        --disable-libsoxr \
        --enable-libspeex \
        --enable-libsrt \
        --enable-libssh \
        --enable-libtheora \
        --enable-libv4l2 \
        --enable-libvidstab \
        --enable-libvmaf \
        --enable-libvorbis \
        --enable-libvpx \
        --enable-libwebp \
        --enable-libx264 \
        --enable-libx265 \
        --disable-libxcb \
        --enable-libxml2 \
        --enable-libxvid \
        --enable-libzimg \
        --enable-nvdec \
        --enable-nvenc \
        --enable-shared \
        --enable-version3 \
        --disable-xlib \
        --disable-sdl2 \
        --disable-htmlpages \
        --disable-ffplay

    make
}

package() {
    make DESTDIR="${pkgdir}" -C ${pkgname%-headless} install install-man
}

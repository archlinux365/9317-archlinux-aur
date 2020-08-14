# Maintainer: Alexandre Demers <alexandre.f.demers@gmail.com>
# Contributor: Johannes Dewender  arch at JonnyJD dot net
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Paul Mattal <paul@archlinux.org>

_pkgbasename=ffmpeg
pkgname=("lib32-$_pkgbasename" "lib32-lib$_pkgbasename")
pkgver=4.3.1
pkgrel=2
epoch=2
pkgdesc="Complete solution to record, convert and stream audio and video (32 bit)"
arch=('x86_64')
url="http://ffmpeg.org/"
license=('GPL3')
  depends=(
      "$_pkgbasename"
      'lib32-alsa-lib'
      'lib32-aom'
      'lib32-bzip2'
      'lib32-fontconfig'
      'lib32-fribidi'
      'lib32-glibc'
      'lib32-gmp'
      'lib32-gnutls'
      'lib32-gsm'
      'lib32-jack'
      'lib32-lame'
      'lib32-libass'
      'lib32-libavc1394'
      'lib32-libbluray'
      'lib32-libdav1d'
      'lib32-libdrm' 
      'lib32-freetype2'
      'lib32-libiec61883'
#      'lib32-libmfx'
      'lib32-libmodplug'
      'lib32-libomxil-bellagio'
      'lib32-libpulse'
#      'lib32-rav1e'
      'lib32-libraw1394'
#      'lib32-libsoxr'
#      'lib32-libssh'
      'lib32-libtheora'
      'lib32-libva'
      'lib32-libvdpau'
#      'lib32-vid.stab'
      'lib32-libvorbis'
      'lib32-libvpx'
      'lib32-libwebp'
      'lib32-libx11'
      'lib32-x264>=0.159'
      'lib32-x265>=3.3'
      'lib32-libxcb'
      'lib32-libxext'
      'lib32-libxml2'
      'lib32-libxv'
      'lib32-xvidcore'
      'lib32-opencore-amr'
      'lib32-openjpeg2'
      'lib32-opus'
      'lib32-sdl2'
      'lib32-speex'
      'lib32-srt'
      'lib32-v4l-utils'
      'lib32-vmaf'
      'lib32-xz'
      'lib32-zlib'
  )
makedepends=(
#      'avisynthplus'
      'ffnvcodec-headers'
      'git'
      'lib32-ladspa'
      'yasm'
)
optdepends=(
#      'avisynthplus: AviSynthPlus support'
#      'intel-media-sdk: Intel QuickSync support'
      'lib32-ladspa: LADSPA filters'
      'lib32-nvidia-utils: Nvidia NVDEC/NVENC support'
)
source=(
      "git+https://git.ffmpeg.org/ffmpeg.git#tag=n${pkgver}"
      "vmaf-model-path.patch"
)
validpgpkeys=('FCF986EA15E6E293A5644F10B4322F04D67658D8')
sha256sums=(
      'SKIP'
      '8dff51f84a5f7460f8893f0514812f5d2bd668c3276ef7ab7713c99b71d7bd8d'
)

prepare() {
  cd ${_pkgbasename}

  # Patching if needed

  patch -Np1 -i "${srcdir}"/vmaf-model-path.patch
}

build() {
  cd ${_pkgbasename}

  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  ./configure \
    --prefix='/usr' \
    --libdir=/usr/lib32 \
    --shlibdir=/usr/lib32 \
    --cc="gcc -m32" \
    --disable-debug \
    --disable-static \
    --disable-stripping \
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
    --enable-libiec61883 \
    --enable-libjack \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-libspeex \
    --enable-libsrt \
    --enable-libtheora \
    --enable-libv4l2 \
    --enable-libvmaf \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxcb \
    --enable-libxml2 \
    --enable-libxvid \
    --enable-nvenc \
    --enable-nvdec \
    --enable-omx \
    --enable-shared \
    --enable-version3

#    --enable-avisynth \ ## not available under 32 bit
#    --enable-librav1e \ ## not available under 32 bit
#    --enable-libsoxr \ ## not available under 32 bit
#    --enable-libssh \ ## not available under 32 bit
#    --enable-libvidstab \ ## not available under 32 bit
#    --enable-libmfx \ ## not available under 32 bit

  make
}

package_lib32-libffmpeg() {
  pkgdesc="Complete solution to record, convert and stream audio and video - library (32 bit)"
  provides=(
    'libavcodec.so'
    'libavdevice.so'
    'libavfilter.so'
    'libavformat.so'
    'libavutil.so'
    'libpostproc.so'
    'libswresample.so'
    'libswscale.so'
    'lib32-ffmpeg'
  )

  cd ${_pkgbasename}

  make DESTDIR="${pkgdir}" install

  rm -r "${pkgdir}"/usr/{include,bin,share}
}

package_lib32-ffmpeg() {
  pkgdesc="Complete solution to record, convert and stream audio and video (32 bit)"
  depends=(
      'lib32-libffmpeg' 
  )

  cd ${_pkgbasename}

  make DESTDIR="${pkgdir}" install

  # Keep files in bin since this is not a library only package. 
  # Use the same naming scheme as proposed in Arch's wiki:  https://wiki.archlinux.org/index.php/32-bit_package_guidelines
  # which is "--program-suffix="-32" with Autoconf
  for i in "${pkgdir}/usr/bin/"*; do
    mv "$i" "$i"-32
  done

  rm -r "${pkgdir}"/usr/{include,lib32,share}
}

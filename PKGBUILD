# Maintainer : Daniel Bermond < yahoo-com: danielbermond >
# Contributor: Jan Koppe <post@jankoppe.de>
#
# This package is a modified version of extra/ffmpeg with --enable-decklink

pkgname=ffmpeg-decklink
pkgver=3.3.3
pkgrel=1
epoch=1
pkgdesc='Complete solution to record, convert and stream audio and video (decklink enabled)'
arch=('i686' 'x86_64')
url='http://ffmpeg.org/'
license=('custom:nonfree and unredistributable')
depends=('alsa-lib' 'bzip2' 'fontconfig' 'fribidi' 'glibc' 'gmp' 'gnutls' 'gsm'
         'jack' 'lame' 'libavc1394' 'libiec61883' 'libmodplug' 'libpulse'
         'libraw1394' 'libsoxr' 'libssh' 'libtheora' 'libva' 'libvdpau'
         'libwebp' 'libx11' 'libxcb' 'opencore-amr' 'openjpeg2' 'opus'
         'schroedinger' 'sdl2' 'speex' 'v4l-utils' 'xz' 'zlib'
         'libass.so' 'libbluray.so' 'libfreetype.so' 'libnetcdf.so'
         'libvidstab.so' 'libvorbisenc.so' 'libvorbis.so' 'libvpx.so'
         'libx264.so' 'libx265.so' 'libxvidcore.so')
makedepends=(
    # binary repositories:
       'ladspa' 'yasm'
    # AUR:
        'blackmagic-decklink-sdk'
)
optdepends=('ladspa: LADSPA filters')
provides=('libavcodec.so' 'libavdevice.so' 'libavfilter.so' 'libavformat.so'
          'libavresample.so' 'libavutil.so' 'libpostproc.so' 'libswresample.so'
          'libswscale.so' 'ffmpeg')
conflicts=('ffmpeg' 'ffmpeg-git')
source=("https://ffmpeg.org/releases/ffmpeg-${pkgver}.tar.xz"
        'LICENSE')
sha256sums=('d2a9002cdc6b533b59728827186c044ad02ba64841f1b7cd6c21779875453a1e'
            '04a7176400907fd7db0d69116b99de49e582a6e176b3bfb36a03e50a4cb26a36')

build() {
  cd "ffmpeg-${pkgver}"

  msg2 "Running ffmpeg configure script. Please wait..."
  
  ./configure \
    --prefix='/usr' \
    --disable-debug \
    --disable-static \
    --disable-stripping \
    --enable-avisynth \
    --enable-avresample \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-ladspa \
    --enable-libass \
    --enable-libbluray \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libgsm \
    --enable-libiec61883 \
    --enable-libmodplug \
    --enable-libmp3lame \
    --enable-libopencore_amrnb \
    --enable-libopencore_amrwb \
    --enable-libopenjpeg \
    --enable-libopus \
    --enable-libpulse \
    --enable-libschroedinger \
    --enable-libsoxr \
    --enable-libspeex \
    --enable-libssh \
    --enable-libtheora \
    --enable-libv4l2 \
    --enable-libvidstab \
    --enable-libvorbis \
    --enable-libvpx \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libx265 \
    --enable-libxcb \
    --enable-libxvid \
    --enable-netcdf \
    --enable-shared \
    --enable-version3 \
    --enable-nonfree \
    --enable-decklink

  make
  make tools/qt-faststart
  make doc/ff{mpeg,play,server}.1
}

package() {
  cd "ffmpeg-${pkgver}"
  make DESTDIR="$pkgdir" install
  
  install -D -m755 tools/qt-faststart  "${pkgdir}/usr/bin/qt-faststart"
  install -D -m644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

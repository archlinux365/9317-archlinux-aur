# Maintainer: Nicola Hinssen <nicola.hinssen@gmail.com>
# Contributor: Bjorn Nostvold <bjorn.nostvold@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Daniel Seymour <dannyseeless@gmail.com>

pkgname=emby-server-beta
pkgver=4.3.0.30
pkgrel=1
_ffmpeg_ver=2019_11_09
_ffdetect_ver=4.3.0
pkgdesc='Bring together your videos, music, photos, and live television'
arch=('x86_64')
url='https://emby.media'
license=('custom')
depends=('alsa-lib'
         'aom'
         'dotnet-runtime'
         'fontconfig'
         'fribidi'
         'gmp'
         'gnutls'
         'lame'
         'libass.so'
         'libdrm'
         'freetype2'
         'libjpeg-turbo'
         'libmfx.so'
         'libpng'
         'libtheora'
         'libva-drm.so'
         'libva.so'
         'libva-x11.so'
         'libvorbisenc.so'
         'libvorbis.so'
         'libwebp'
         'libx11'
         'libx264.so'
         'opus'
         'skia-sharp'
         'sqlite'
         'zlib'
         'zvbi')
makedepends=('ffnvcodec-headers8.1'
             'nasm')
provides=('emby-server')
conflicts=('emby-server')
source=("https://github.com/MediaBrowser/Emby.Releases/releases/download/${pkgver}/embyserver-netcore_${pkgver}.zip"
        "https://mediabrowser.github.io/embytools/ffmpeg-${_ffmpeg_ver}.tar.gz"
        "https://mediabrowser.github.io/embytools/ffdetect-${_ffmpeg_ver}-x64.tar.xz"
        'emby-server'
        'emby-server.conf'
        'emby-server.service'
        'emby-server.sysusers'
        'emby-server.tmpfiles'
        'license.docx')
noextract=(license.docx)
backup=('etc/conf.d/emby-server')
sha256sums=('28d2a3d7d36c298d083675f18adb7c55c8fcc738a2611a89a5ed028cfe1b8aa2'
            'a74354a774cb6f9cd32312abf350326c379b47a8f872e4caa4a3843ba3078d20'
            '3fbee0c712c01e37953293da6d3aa4ae7a608fb5801a3eb3d9f99c1274da44db'
            'e2185a5f4810726cb57fcc6d9bdbde1854069f08f163be58cb3cef1154b8e2a7'
            '5e3470f834808babe7d60b8d86f462e7945c3617499539e5af45eb55d7b87b23'
            '2e7f778fd47cad0670690beaab2453fde37c2a3e7d0e7b2ca83b2cbb66087b3c'
            'f7fa33949757ffc587ecf82496dc35ebc8c8e5c98b882b31dc40a24263d3921a'
            '16ead857a1756e3e8cfc3e70f481d14d791a262b79733065a4f7371f21a97abe'
            'a6d7ea65dcb06392479a85e1a10a7aeb872d803da6f784f6935fcd4ee63008c6')

prepare() {
  rm -rf system/runtimes/tizen-armel
}

build() {
  cd ffmpeg-${_ffmpeg_ver}_public
  export PKG_CONFIG_PATH=/usr/lib/ffnvcodec8.1/pkgconfig

  ./configure \
    --disable-doc \
    --disable-ffplay \
    --disable-shared \
    --disable-vdpau \
    --disable-libxcb \
    --disable-lzma \
    --disable-sdl2 \
    --disable-xlib \
    --enable-fontconfig \
    --enable-gmp \
    --enable-gnutls \
    --enable-gpl \
    --enable-libaom \
    --enable-libass \
    --enable-libdrm \
    --enable-libfreetype \
    --enable-libfribidi \
    --enable-libmfx \
    --enable-libmp3lame \
    --enable-libopus \
    --enable-libtheora \
    --enable-libvorbis \
    --enable-libwebp \
    --enable-libx264 \
    --enable-libzvbi \
    --enable-version3 \
    --enable-nvdec \
    --enable-nvenc \
    --enable-static \
    --enable-vaapi \
    --disable-demuxer=vapoursynth
  make
}

package() {
  install -dm 755 "${pkgdir}"/usr/lib
  cp -dr --no-preserve='ownership' system "${pkgdir}"/usr/lib/emby-server
  ln -s ../libSkiaSharp.so.68.0.0 "${pkgdir}"/usr/lib/emby-server/libSkiaSharp.so
  install -Dm 755 emby-server -t "${pkgdir}"/usr/bin/
  install -Dm 755 bin/ffdetect "${pkgdir}"/usr/bin/ffdetect-emby
  install -Dm 755 ffmpeg-${_ffmpeg_ver}_public/ffmpeg "${pkgdir}"/usr/bin/ffmpeg-emby
  install -Dm 755 ffmpeg-${_ffmpeg_ver}_public/ffprobe "${pkgdir}"/usr/bin/ffprobe-emby
  install -Dm 644 emby-server.service -t "${pkgdir}"/usr/lib/systemd/system/
  install -Dm 644 emby-server.sysusers "${pkgdir}"/usr/lib/sysusers.d/emby-server.conf
  install -Dm 644 emby-server.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/emby-server.conf
  install -Dm 644 emby-server.conf "${pkgdir}"/etc/conf.d/emby-server
  install -Dm 644 license.docx -t "${pkgdir}"/usr/share/licenses/$pkgname/license.docx
}

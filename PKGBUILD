# Maintainer: Nicola Hinssen <nicola.hinssen@gmail.com>
# Contributor: Bjorn Nostvold <bjorn.nostvold@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Daniel Seymour <dannyseeless@gmail.com>

pkgname=emby-server-beta
pkgver=4.3.0.10
pkgrel=2
_ffmpeg_ver=2019_04_09
_ffdetect_ver=4.0.3
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
         'libfreetype.so'
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
        "https://mediabrowser.github.io/embytools/ffdetect_${_ffdetect_ver}_x64.tar.xz"
        'emby-server'
        'emby-server.conf'
        'emby-server.service'
        'emby-server.sysusers'
        'emby-server.tmpfiles'
        'license.docx')
noextract=(license.docx)
backup=('etc/conf.d/emby-server')
sha256sums=('18c49459cf1f00e9e39046baf726ab2931ababef1b4fee976f1bf7b5d0783524'
            'd2081fd92e92ee90561c91edbd28ccba4beb1d72bdd38cd94c338726020e2e62'
            '85697071cb6412d244fc6dd76f3561b6a42d7556ef20f26a702542b58198f0c7'
            'e2185a5f4810726cb57fcc6d9bdbde1854069f08f163be58cb3cef1154b8e2a7'
            '5e3470f834808babe7d60b8d86f462e7945c3617499539e5af45eb55d7b87b23'
            '2e7f778fd47cad0670690beaab2453fde37c2a3e7d0e7b2ca83b2cbb66087b3c'
            'f7fa33949757ffc587ecf82496dc35ebc8c8e5c98b882b31dc40a24263d3921a'
            '16ead857a1756e3e8cfc3e70f481d14d791a262b79733065a4f7371f21a97abe'
            'a6d7ea65dcb06392479a85e1a10a7aeb872d803da6f784f6935fcd4ee63008c6')

prepare() {
  rm -rf system/{electron,runtimes}
}

build() {
  cd ffmpeg-${_ffmpeg_ver}

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
    --enable-vaapi
  make
}

package() {
  install -dm 755 "${pkgdir}"/usr/lib
  cp -dr --no-preserve='ownership' system "${pkgdir}"/usr/lib/emby-server
  ln -s ../libSkiaSharp.so.68.0.0 "${pkgdir}"/usr/lib/emby-server/libSkiaSharp.so
  install -Dm 755 emby-server -t "${pkgdir}"/usr/bin/
  install -Dm 755 bin/ffdetect "${pkgdir}"/usr/bin/ffdetect-emby
  install -Dm 755 ffmpeg-${_ffmpeg_ver}/ffmpeg "${pkgdir}"/usr/bin/ffmpeg-emby
  install -Dm 755 ffmpeg-${_ffmpeg_ver}/ffprobe "${pkgdir}"/usr/bin/ffprobe-emby
  install -Dm 644 emby-server.service -t "${pkgdir}"/usr/lib/systemd/system/
  install -Dm 644 emby-server.sysusers "${pkgdir}"/usr/lib/sysusers.d/emby-server.conf
  install -Dm 644 emby-server.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/emby-server.conf
  install -Dm 644 emby-server.conf "${pkgdir}"/etc/conf.d/emby-server
  install -Dm 644 license.docx -t "${pkgdir}"/usr/share/licenses/$pkgname/license.docx
}

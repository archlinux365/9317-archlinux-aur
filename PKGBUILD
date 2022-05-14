# $Id$
# Maintainer : Nicolas Perrin <booloki@lokizone.net>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Sarah Hay <sarahhay@mb.sympatico.ca>
# Contributor: Martin Sandsmark <martin.sandsmark@kde.org>

_pkgbase=vlc
pkgname=vlc-nox
pkgver=3.0.17.4
pkgrel=2
pkgdesc='Multi-platform MPEG, VCD/DVD, and DivX player (without X support)'
url='https://www.videolan.org/vlc/'
arch=('x86_64')
license=('LGPL2.1' 'GPL2')
depends=('a52dec' 'libdvbpsi' 'libxpm' 'libdca' 'libproxy' 'lua52' 'libidn'
         'libmatroska' 'taglib' 'libmpcdec' 'ffmpeg4.4' 'faad2' 'libmad'
         'libmpeg2' 'xcb-util-keysyms' 'libtar' 'libxinerama' 'libsecret'
         'libupnp' 'libarchive' 'freetype2' 'fribidi' 'harfbuzz'
         'fontconfig' 'libxml2' 'gnutls' 'libplacebo' 'aribb24')
makedepends=('live-media' 'libbluray' 'flac' 'libdc1394' 'libavc1394' 'libcaca'
             'librsvg' 'libgme' 'xosd' 'twolame' 'aalib' 'avahi' 'systemd-libs'
             'libmtp' 'libmicrodns' 'libdvdcss' 'smbclient'
             'vcdimager' 'libssh2' 'mesa' 'protobuf' 'libnfs' 'mpg123'
             'libdvdread' 'libdvdnav' 'libogg' 'libshout' 'libmodplug' 'libvpx'
             'libvorbis' 'speex' 'opus' 'libtheora' 'libpng' 'libjpeg-turbo'
             'libx265.so' 'libx264.so' 'zvbi' 'libass' 'libkate' 'libtiger'
             'sdl_image' 'libpulse' 'alsa-lib' 'jack' 'libsamplerate' 'libsoxr'
             'lirc' 'libgoom2' 'projectm' 'aom' 'srt' 'dav1d'
             'aribb24' 'aribb25' 'pcsclite')
#            'chromaprint: Chromaprint audio fingerprinter'
optdepends=('avahi: service discovery using bonjour protocol'
            'aom: AOM AV1 codec'
            'dav1d: dav1d AV1 decoder'
            'libdvdcss: decoding encrypted DVDs'
            'libavc1394: devices using the 1394ta AV/C'
            'libdc1394: IEEE 1394 access plugin'
            'libva-vdpau-driver: vdpau backend nvidia'
            'libva-intel-driver: video backend intel'
            'libbluray: Blu-Ray video input'
            'flac: Free Lossless Audio Codec plugin'
            'twolame: TwoLAME mpeg2 encoder plugin'
            'libgme: Game Music Emu plugin'
            'vcdimager: navigate VCD with libvcdinfo'
            'libmtp: MTP devices discovery'
            'systemd-libs: udev services discovery'
            'smbclient: SMB access plugin'
            'libcdio: audio CD playback'
            'ttf-freefont: subtitle font '
            'ttf-dejavu: subtitle font'
            'libssh2: sftp access'
            'libnfs: NFS access'
            'mpg123: mpg123 codec'
            'protobuf: chromecast streaming'
            'libmicrodns: mDNS services discovery (chromecast etc)'
            'lua-socket: http interface'
            'live-media: RTSP input'
            'libdvdread: DVD input module'
            'libdvdnav: DVD with navigation input module'
            'libogg: Ogg and OggSpots codec'
            'libshout: shoutcast/icecast output plugin'
            'libmodplug: MOD output plugin'
            'libvpx: VP8 and VP9 codec'
            'libvorbis: Vorbis decoder/encoder'
            'speex: Speex codec'
            'opus: opus codec'
            'libtheora: theora codec'
            'libpng: PNG support'
            'libjpeg-turbo: JPEG support'
            'librsvg: SVG plugin'
            'libx264: H264 encoding'
            'x265: HEVC/H.265 encoder'
            'zvbi: VBI/Teletext decoding'
            'libass: Subtitle support'
            'libkate: Kate codec'
            'libtiger: Tiger rendering for Kate streams'
            'sdl_image: SDL image support'
            'srt: SRT input/output plugin'
            'aalib: ASCII art video output'
            'libcaca: colored ASCII art video output'
            'libpulse: PulseAudio audio output'
            'alsa-lib: ALSA audio output'
            'jack: jack audio server'
            'libsamplerate: audio Resampler'
            'libsoxr: SoX audio Resampler'
            'chromaprint: Chromaprint audio fingerprinter'
            'lirc: lirc control'
            'libgoom2: Goom visualization'
            'projectm: ProjectM visualisation'
            'ncurses: ncurses interface'
            'libnotify: notification plugin'
            'aribb24: aribsub support'
            'aribb25: aribcam support'
            'pcsclite: aribcam support')
conflicts=('vlc' 'vlc-plugin' 'vlc-git')
replaces=('vlc' 'vlc-plugin' 'vlc-git')
options=('!emptydirs')
source=(http://download.videolan.org/${_pkgbase}/${pkgver}/${_pkgbase}-${pkgver}.tar.xz
        update-vlc-plugin-cache.hook
        caca-fix-to-newer-version.patch
        vlc-live-media-2021.patch
        dav1d_v1.patch
        dav1d_v1_limit.patch)
sha512sums=('dac14c6586603c064294672eb878253e52b3a7bef431fb10303345e5400591b5c1f2d452a2af03f503db0ca186582a84be06fdf05ab011c33f7b0bd5389c51fb'
            'b247510ffeadfd439a5dadd170c91900b6cdb05b5ca00d38b1a17c720ffe5a9f75a32e0cb1af5ebefdf1c23c5acc53513ed983a736e8fa30dd8fad237ef49dd3'
            'ef479a246dc98f882a05ca56a1c2872cc67ced154c625790070b887858ddc250d55b1295db82c9122e5ecd3c2c9c712ec9718e28d0a9d21ff6a230eb6c5010ce'
            'ad17d6f4f2cc83841c1c89623c339ec3ee94f6084ea980e2c8cbc3903854c85e5396e31bfd8dc90745b41794670903d854c4d282d8adec263087a9d47b226ccc'
            '5f7aa43a7b248812758a8ef82d15d59fb566327fc3e837002a8f4741cabde09ed7caca905f6fe168554b9a4b7561816b3eff877f4dd6664ceaf0964281facb4f'
            '4aca4979fe7516ee9d39ae8e2c91c0f981a033ed5c6a74eaf86569df8bbcf72ab0be037f27c8af78f26c23dc181e52bbf4a3e0209e07160fdb03e8fa33e6bc38')

prepare() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"
  sed -e 's:truetype/ttf-dejavu:TTF:g' -i modules/visualization/projectm.cpp
  sed -e 's|-Werror-implicit-function-declaration||g' -i configure
  patch -Np1 < "${srcdir}/caca-fix-to-newer-version.patch"
  patch -Np1 < "${srcdir}/vlc-live-media-2021.patch"
  patch -Np1 < "${srcdir}/dav1d_v1.patch"
  patch -Np1 < "${srcdir}/dav1d_v1_limit.patch"
  sed 's|whoami|echo builduser|g' -i configure
  sed 's|hostname -f|echo arch|g' -i configure
  autoreconf -vf
}

build() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"

  export CFLAGS+=" -I/usr/include/samba-4.0 -ffat-lto-objects"
  export CPPFLAGS+=" -I/usr/include/samba-4.0"
  export CXXFLAGS+=" -std=c++11"
  # upstream does not support lua 5.3/5.4 yet: https://trac.videolan.org/vlc/ticket/25036
  export LUAC=/usr/bin/luac5.2
  export LUA_LIBS="$(pkg-config --libs lua5.2)"
  export PKG_CONFIG_PATH="/usr/lib/ffmpeg4.4/pkgconfig/:$PKG_CONFIG_PATH"

  ./configure --prefix=/usr \
              --sysconfdir=/etc \
              --disable-rpath \
              --enable-nls \
              --enable-archive \
              --enable-live555 \
              --enable-dc1394 \
              --enable-dv1394 \
              --enable-dvdread \
              --enable-dvdnav \
              --enable-bluray \
              --disable-opencv \
              --enable-smbclient \
              --enable-sftp \
              --enable-nfs \
              --enable-realrtsp \
              --enable-dvbpsi \
              --enable-gme \
              --enable-ogg \
              --enable-shout \
              --enable-matroska \
              --enable-mod \
              --enable-mpc \
              --enable-mad \
              --enable-mpg123 \
              --enable-gst-decode \
              --enable-avcodec \
              --enable-libva \
              --enable-avformat \
              --enable-postproc \
              --enable-faad \
              --enable-vpx \
              --enable-twolame \
              --disable-fdkaac \
              --enable-a52 \
              --enable-dca \
              --enable-flac \
              --enable-libmpeg2 \
              --enable-vorbis \
              --enable-speex \
              --enable-opus \
              --enable-oggspots \
              --disable-schroedinger \
              --enable-png \
              --enable-jpeg \
              --enable-x264 \
              --enable-x265 \
              --enable-zvbi \
              --enable-libass \
              --enable-kate \
              --enable-tiger \
              --enable-vdpau \
              --disable-wayland \
              --enable-sdl-image \
              --enable-freetype \
              --enable-fribidi \
              --enable-harfbuzz \
              --enable-fontconfig \
              --enable-svg \
              --enable-svgdec \
              --enable-aa \
              --enable-caca \
              --enable-pulse \
              --enable-alsa \
              --enable-jack \
              --enable-samplerate \
              --enable-soxr \
              --disable-chromaprint \
              --enable-chromecast \
              --disable-qt \
              --disable-skins2 \
              --enable-libtar \
              --enable-ncurses \
              --enable-lirc \
              --enable-goom \
              --enable-projectm \
              --enable-avahi \
              --enable-mtp \
              --enable-upnp \
              --enable-microdns \
              --enable-libxml2 \
              --disable-libgcrypt \
              --enable-gnutls \
              --enable-taglib \
              --enable-secret \
              --disable-kwallet \
              --disable-update-check \
              --disable-notify \
              --enable-libplacebo \
              --enable-vlc \
              --enable-aribsub \
              --enable-aribcam \
              --enable-aom \
              --enable-srt \
              --enable-dav1d

  # prevent excessive overlinking due to libtool
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  for res in 16 32 48 128; do
    install -Dm 644 "${srcdir}/vlc-${pkgver}/share/icons/${res}x${res}/vlc.png" \
                     "${pkgdir}/usr/share/icons/hicolor/${res}x${res}/apps/vlc.png"
  done
  install -Dm 644 "${srcdir}/update-vlc-plugin-cache.hook" -t "${pkgdir}/usr/share/libalpm/hooks"
}

# vim: ts=2 sw=2 et:

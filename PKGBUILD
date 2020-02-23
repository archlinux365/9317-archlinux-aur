# $Id$
# Maintainer : Nicolas Perrin <booloki@lokizone.net>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Sarah Hay <sarahhay@mb.sympatico.ca>
# Contributor: Martin Sandsmark <martin.sandsmark@kde.org>

_pkgbase=vlc
pkgname=vlc-nox
pkgver=3.0.8
pkgrel=2
pkgdesc='Multi-platform MPEG, VCD/DVD, and DivX player (without X support)'
url='https://www.videolan.org/vlc/'
arch=('x86_64')
license=('LGPL2.1' 'GPL2')
depends=('a52dec' 'libdvbpsi' 'libxpm' 'libdca' 'libproxy' 'lua' 'libidn'
         'libmatroska' 'taglib' 'libmpcdec' 'ffmpeg' 'faad2' 'libupnp' 'libmad'
         'libmpeg2' 'xcb-util-keysyms' 'libtar' 'libxinerama' 'libsecret'
         'libarchive' 'freetype2' 'fribidi' 'harfbuzz' 'fontconfig' 'libxml2'
         'gnutls' 'aribb24')
makedepends=('live-media' 'libbluray' 'flac' 'libdc1394' 'libavc1394' 'libcaca'
             'librsvg' 'libgme' 'xosd' 'twolame' 'aalib' 'avahi' 'systemd-libs'
             'libmtp' 'libupnp' 'libmicrodns' 'libdvdcss' 'smbclient'
             'vcdimager' 'libssh2' 'mesa' 'protobuf' 'libnfs' 'mpg123'
             'libdvdread' 'libdvdnav' 'libogg' 'libshout' 'libmodplug' 'libvpx'
             'libvorbis' 'speex' 'opus' 'libtheora' 'libpng' 'libjpeg-turbo'
             'libx265.so' 'libx264.so' 'zvbi' 'libass' 'libkate' 'libtiger'
             'sdl_image' 'libpulse' 'alsa-lib' 'jack' 'libsamplerate' 'libsoxr'
             'lirc' 'libgoom2' 'projectm' 'chromaprint' 'aom' 'srt' 'dav1d')
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
            'libnotify: notification plugin')
conflicts=('vlc' 'vlc-plugin' 'vlc-git')
replaces=('vlc' 'vlc-plugin' 'vlc-git')
options=('!emptydirs')
source=(http://download.videolan.org/${_pkgbase}/${pkgver}/${_pkgbase}-${pkgver}.tar.xz
        update-vlc-plugin-cache.hook
        lua53_compat.patch
        aom_compat.patch)
sha512sums=('5ade0b350e98fd6fa90035bffabda96f0addb3844a7c0a242b4db1cab6a746e1adb1d713ddcb48ae51a7d1736090f096f5d3b0637a9f958ccf4fcf27e838cf70'
            '80357bae69e32b353d3784932d854e294906798e14faffb87c3383c3b6f6bdc57cbabb9c6e3f3c1adf0f8ddbb24153e72104c963cf1934970c2983c96daef9df'
            '33cda373aa1fb3ee19a78748e2687f2b93c8662c9fda62ecd122a2e649df8edaceb54dda3991bc38c80737945a143a9e65baa2743a483bb737bb94cd590dc25f'
            '5f3476ea0674640dd0321349dbec1e1d36169b456b5cc5492467e1db1e839c8af1b1b8ceeb16c54beb4d449aabd595c72984fbd2ae9df07f457867f99a7b7d98')

prepare() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"
  sed -e 's:truetype/ttf-dejavu:TTF:g' -i modules/visualization/projectm.cpp
  sed -e 's|-Werror-implicit-function-declaration||g' -i configure
  patch -Np1 < "${srcdir}/lua53_compat.patch"
  patch -Np1 < "${srcdir}/aom_compat.patch"
  sed 's|whoami|echo builduser|g' -i configure
  sed 's|hostname -f|echo arch|g' -i configure
}

build() {
  cd "${srcdir}/${_pkgbase}-${pkgver}"

  export CFLAGS+=" -I/usr/include/samba-4.0"
  export CPPFLAGS+=" -I/usr/include/samba-4.0"
  export CXXFLAGS+=" -std=c++11"
  export LUAC=/usr/bin/luac
  export LUA_LIBS="$(pkg-config --libs lua)"

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
              --enable-chromaprint \
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
              --disable-libplacebo \
              --enable-vlc \
              --enable-aribsub \
              --enable-aom \
              --enable-srt \
              --enable-dav1d
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

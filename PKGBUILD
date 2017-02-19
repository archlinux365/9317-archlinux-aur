# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: Sarah Hay <sarahhay@mb.sympatico.ca>
# Contributor: Martin Sandsmark <martin.sandsmark@kde.org>

pkgname=vlc-qt5
_pkgname=vlc
pkgver=2.2.4
pkgrel=1
pkgdesc="A multi-platform MPEG, VCD/DVD, and DivX player (Qt5 version)"
arch=('i686' 'x86_64')
url="http://www.videolan.org/vlc/"
license=('LGPL2.1' 'GPL2')
depends=('a52dec' 'libdvbpsi' 'libxpm' 'libdca' 'libproxy'
         'sdl_image' 'libdvdnav' 'libtiger' 'lua' 'libmatroska'
         'zvbi' 'taglib' 'libmpcdec' 'ffmpeg2.8' 'faad2' 'libupnp'
         'libshout' 'libmad' 'libmpeg2' 'xcb-util-keysyms' 'libtar'
         'libxinerama')
makedepends=('live-media' 'libnotify' 'libbluray' 'flac' 'kdelibs'
             'libdc1394' 'libavc1394' 'lirc' 'libcaca' 'gtk2'
             'librsvg' 'portaudio' 'libgme' 'xosd' 'projectm'
             'twolame' 'aalib' 'libmtp' 'libdvdcss' 'smbclient'
             'libgoom2' 'vcdimager' 'opus' 'libssh2' 'mesa' 'qt5-base')
optdepends=('avahi: for service discovery using bonjour protocol'
            'libnotify: for notification plugin'
            'gtk2: for notify plugin'
            'ncurses: for ncurses interface support'
            'libdvdcss: for decoding encrypted DVDs'
            'lirc: for lirc plugin'
            'libavc1394: for devices using the 1394ta AV/C'
            'libdc1394: for IEEE 1394 plugin'
            'kdelibs: KDE Solid hardware integration'
            'libva-vdpau-driver: vdpau back-end for nvidia'
            'libva-intel-driver: back-end for intel cards'
            'libbluray: for Blu-Ray support'
            'flac: for Free Lossless Audio Codec plugin'
            'portaudio: for portaudio support'
            'twolame: for TwoLAME mpeg2 encoder plugin'
            'projectm: for ProjectM visualisation plugin'
            'libcaca: for colored ASCII art video output'
            'libgme: for libgme plugin'
            'librsvg: for SVG plugin'
            'libgoom2: for libgoom plugin'
            'vcdimager: navigate VCD with libvcdinfo'
            'aalib: for ASCII art plugin'
            'libmtp: for MTP devices support'
            'smbclient: for SMB access plugin'
            'libcdio: for audio CD playback support'
            'ttf-freefont: for subtitle font '
            'ttf-dejavu: for subtitle font'
            'opus: for opus support'
            'libssh2: for sftp support'
            'lua-socket: for http interface'
            'qt5-base: for the GUI')
conflicts=($_pkgname)
provides=($_pkgname)
backup=('usr/share/vlc/lua/http/.hosts'
        'usr/share/vlc/lua/http/dialogs/.hosts')
options=('!emptydirs')
source=("http://download.videolan.org/${_pkgname}/${pkgver}/${_pkgname}-${pkgver}.tar.xz"{,.asc}
        update-vlc-plugin-cache.hook "lua53_compat.patch" "Fix-build-using-old-GCC-intrinsics.patch")
validpgpkeys=(65F7C6B4206BD057A7EB73787180713BE58D1ADC) # VideoLAN Release Signing Key
md5sums=('55666c9898f658c7fcca12725bf7dd1b'
         'SKIP'
         '6449d0d26bd34bca009eed58a4c20c83'
         '96d3b346d9149ffb1b430066dfb6249a'
         '61c8cfdf29668aa1f4a607f6bec6dfa8')

prepare() {
  cd "${_pkgname}-${pkgver}"

  sed -i -e 's:truetype/freefont:TTF:g' modules/text_renderer/freetype.c
  sed -i -e 's:truetype/ttf-dejavu:TTF:g' modules/visualization/projectm.cpp

  patch -p1 < "${srcdir}/lua53_compat.patch"
  patch -p1 < "${srcdir}/Fix-build-using-old-GCC-intrinsics.patch"
}

build() {
  cd "${_pkgname}-${pkgver}"

  PKG_CONFIG_PATH="/usr/lib/ffmpeg2.8/pkgconfig" \
  CFLAGS+=" -I/usr/include/samba-4.0" CPPFLAGS+=" -I/usr/include/samba-4.0" CXXFLAGS+=" -std=c++11" \
  ./configure --prefix=/usr \
              --sysconfdir=/etc \
              --disable-rpath \
              --enable-faad \
              --enable-nls \
              --enable-lirc \
              --enable-ncurses \
              --enable-realrtsp \
              --enable-aa \
              --enable-vcdx \
              --enable-upnp \
              --enable-opus \
              --enable-sftp \
              LUAC=/usr/bin/luac  LUA_LIBS="`pkg-config --libs lua`" \
              RCC=/usr/bin/rcc-qt5

  make
}

package() {
  cd "${_pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  for res in 16 32 48 128; do
    install -D -m644 "${srcdir}/vlc-${pkgver}/share/icons/${res}x${res}/vlc.png" \
                     "${pkgdir}/usr/share/icons/hicolor/${res}x${res}/apps/vlc.png"
  done

  install -Dm644 "$srcdir"/update-vlc-plugin-cache.hook "$pkgdir"/usr/share/libalpm/hooks/update-vlc-plugin-cache.hook
}

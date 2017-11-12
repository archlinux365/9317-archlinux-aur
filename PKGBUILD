# $Id$
# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Themaister <maister@archlinux.us>
# Contributor: lifning <definelightning@gmail.com>

# ALARM: Kevin Mihelich <kevin@archlinuxarm.org>
#  - enable GLES

# ALARM: Sergey Slipchenko <faergeek@gmail.com>
#  - add videocore paths to PKG_CONFIG_PATH
#  - enable neon
#  - enable floathard

buildarch=4

pkgname=retroarch-rbp
pkgver=1.6.7
pkgrel=2.1
pkgdesc='Reference frontend for the libretro API (Raspberry Pi)'
arch=('armv7h')
url='http://www.libretro.com/'
license=('GPL')
groups=('libretro')
provides=('retroarch')
conflicts=('retroarch')
depends=('alsa-lib' 'gcc-libs' 'glibc' 'libdrm' 'libgl' 'libpulse' 'libusb'
         'libx11' 'libxcb' 'libxext' 'libxinerama' 'libxkbcommon' 'libxv'
         'libxxf86vm' 'raspberrypi-firmware' 'openal' 'sdl2' 'wayland' 'zlib'
         'libass.so' 'libavcodec.so' 'libavformat.so' 'libavutil.so'
         'libfreetype.so' 'libswresample.so' 'libswscale.so' 'libudev.so')
makedepends=('vulkan-icd-loader')
optdepends=('libretro-beetle-psx: Sony PlayStation core'
            'libretro-beetle-psx-hw: Sony PlayStation core'
            'libretro-blastem: Sega Mega Drive core'
            'libretro-bsnes: Super Nintendo Entertainment System cores'
            'libretro-desmume: Nintendo DS core'
            'libretro-gambatte: Nintendo Game Boy/Game Boy Color core'
            'libretro-genesis-plus-gx: Sega MS/GG/MD/CD core'
            'libretro-mgba: Nintendo Game Boy Advance core'
            'libretro-mupen64plus: Nintendo 64 core'
            'libretro-nestopia: Nintendo Entertainment System core'
            'libretro-reicast: Sega Dreamcast core'
            'libretro-scummvm: ScummVM core'
            'libretro-snes9x: Super Nintendo Entertainment System core'
            'libretro-yabause: Sega Saturn core'
            'libretro-overlays: Collection of overlays'
            'libretro-shaders: Collection of shaders'
            'python: retroarch-cg2glsl'
            'retroarch-assets-xmb: XMB menu assets'
            'retroarch-autoconfig-udev: udev joypad autoconfig')
backup=('etc/retroarch.cfg')
source=("retroarch-${pkgver}.tar.gz::https://github.com/libretro/RetroArch/archive/v${pkgver}.tar.gz"
        'retroarch-config.patch')
sha256sums=('212f281d3febde1df27d2edd5de3ced5be86c816b3f13614754495e4a62e778f'
            'f37b12754256b0bcc2f9d738f9aa1c18557fffede670a328eb0eeb2f28a32bbd')

prepare() {
  cd RetroArch-${pkgver}

  patch -Np1 -i ../retroarch-config.patch
}

build() {
  cd RetroArch-${pkgver}

  export PKG_CONFIG_PATH="/opt/vc/lib/pkgconfig:$PKG_CONFIG_PATH"

  ./configure \
    --prefix='/usr' \
    --disable-cg \
    --disable-jack \
    --disable-oss \
    --disable-sdl \
    --enable-opengles \
    --enable-neon \
    --enable-floathard

  make
  make -C libretro-common/audio/dsp_filters
  make -C gfx/video_filters
}

package() {
  cd RetroArch-${pkgver}

  make DESTDIR="${pkgdir}" install

  install -dm 755 "${pkgdir}"/usr/lib/retroarch/filters/{audio,video}
  install -m 644 libretro-common/audio/dsp_filters/*.so "${pkgdir}"/usr/lib/retroarch/filters/audio/
  install -m 644 gfx/video_filters/*.{filt,so} "${pkgdir}"/usr/lib/retroarch/filters/video/
}

# vim: ts=2 sw=2 et:

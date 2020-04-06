# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Themaister <maister@archlinux.us>
# Contributor: lifning <definelightning@gmail.com>

pkgname=retroarch
pkgver=1.8.5
pkgrel=1
pkgdesc='Reference frontend for the libretro API'
arch=(x86_64)
url=http://www.libretro.com/
license=(GPL)
groups=(libretro)
depends=(
  alsa-lib
  flac
  libass.so
  libavcodec.so
  libavformat.so
  libavutil.so
  libdrm
  libfreetype.so
  libgl
  libpulse
  libswresample.so
  libswscale.so
  libudev.so
  libusb-1.0.so
  mbedtls
  mesa
  miniupnpc
  openal
  qt5-base
  sdl2
  v4l-utils
  zlib
)
makedepends=(
  git
  libx11
  libxcb
  libxext
  libxinerama
  libxkbcommon
  libxrandr
  libxv
  libxxf86vm
  vulkan-icd-loader
  wayland
  wayland-protocols
)
optdepends=(
  'libretro-overlays: Collection of overlays'
  'libretro-shaders: Collection of shaders'
  'libxinerama: X11 support'
  'libxrandr: X11 support'
  'python: retroarch-cg2glsl'
  'retroarch-assets-xmb: XMB menu assets'
  'wayland: Wayland support'
)
backup=(etc/retroarch.cfg)
source=(
  git+https://github.com/libretro/RetroArch.git#tag=8bcd74bf42f486c37e243a80e29bc214b2b6b205
  retroarch-config.patch
)
sha256sums=(
  SKIP
  7857cff30c45721b66666828ca9edbb2923817c6c64591be3f58fe019277103e
)

pkgver() {
  cd RetroArch

  git describe --tags | sed 's/^v//'
}

prepare() {
  cd RetroArch

  patch -Np1 -i ../retroarch-config.patch
}

build() {
  cd RetroArch

  ./configure \
    --prefix=/usr \
    --disable-builtinflac \
    --disable-builtinmbedtls \
    --disable-builtinminiupnpc \
    --disable-builtinzlib \
    --disable-cg \
    --disable-jack \
    --disable-oss \
    --disable-sdl \
    --enable-dbus
  make
  make -C libretro-common/audio/dsp_filters
  make -C gfx/video_filters
}

package() {
  cd RetroArch

  make DESTDIR="${pkgdir}" install

  install -Dm 644 libretro-common/audio/dsp_filters/*.{dsp,so} -t "${pkgdir}"/usr/lib/retroarch/filters/audio/
  install -Dm 644 gfx/video_filters/*.{filt,so} -t "${pkgdir}"/usr/lib/retroarch/filters/video/
}

# vim: ts=2 sw=2 et:

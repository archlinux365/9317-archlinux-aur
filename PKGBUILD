# Maintainer: drakkan <nicola.murino at gmail dot com>
pkgname=mingw-w64-gst-libav
pkgver=1.18.0
pkgrel=1
pkgdesc="GStreamer Multimedia Framework ffmpeg Plugin (mingw-w64)"
arch=(any)
url="http://gstreamer.freedesktop.org/"
license=('LGPL')
depends=('mingw-w64-gst-plugins-base' 'mingw-w64-ffmpeg-minimal')
makedepends=('mingw-w64-meson' 'yasm')
options=('!strip' '!buildflags' 'staticlibs')

source=("${url}src/gst-libav/gst-libav-${pkgver}.tar.xz")
sha256sums=('42f93f5ce9a3fc22051e5f783a4574b56ebf213f331f75dcbc3552459bd3a06a')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/gst-libav-${pkgver}"
  for _arch in $_architectures; do
    mkdir -p "build-${_arch}" && pushd build-${_arch}
    ${_arch}-meson \
      -D package-name="GStreamer (Arch Linux)" \
      -D package-origin="http://www.archlinux.org/" ..
    ninja
    popd
  done
}

package() {
  cd "${srcdir}/gst-libav-${pkgver}"
  for _arch in ${_architectures}; do
    DESTDIR="${pkgdir}" ninja -C "${srcdir}/gst-libav-${pkgver}/build-${_arch}" install
  done
}

# vim: ts=2 sw=2 et:

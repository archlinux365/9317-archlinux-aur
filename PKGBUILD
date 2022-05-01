# -*- mode: Shell-script; eval: (setq indent-tabs-mode nil); eval: (setq tab-width 2) -*-
# Maintainer: Dominic Meiser < git at msrd0 dot de >
# Contributor: pingplug < aur at pingplug dot me >
# Contributor: Schala Zeal < schalaalexiazeal at gmail dot com >

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-harfbuzz-static
pkgver=4.2.0
pkgrel=2
pkgdesc="OpenType text shaping engine (mingw-w64)"
arch=('any')
url="https://www.freedesktop.org/wiki/Software/HarfBuzz"
license=('MIT')
depends=('mingw-w64-crt'
         'mingw-w64-glib2'
         'mingw-w64-freetype2')
makedepends=('mingw-w64-meson'
             'python'
             'ragel')
options=('!strip' 'staticlibs' '!buildflags')
source=("https://github.com/harfbuzz/harfbuzz/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('7152d1bdcbd2bf6ba777cfe9161d40564fe0a7583e04e55e0a057d5f4414d3c9')

prepare() {
  cd "$srcdir/harfbuzz-$pkgver"
  sed -Ei "/^\s*subdir\('util'\)\s*$/d" meson.build
}

build() {
  cd "$srcdir/harfbuzz-$pkgver"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch}-static && pushd build-${_arch}-static
    ${_arch}-meson \
      --default-library static \
      -D cairo=disabled \
      -D icu=disabled \
      -D b_lto=false \
      -D tests=disabled \
      -D benchmark=disabled \
      -D docs=disabled \
      ..
    # fix linker selection error
    sed -i 's|: c_LINKER|: cpp_LINKER|g' build.ninja
    ninja
    popd
  done
}

package_mingw-w64-harfbuzz-static() {
  conflicts=('mingw-w64-harfbuzz')
  provides=("mingw-w64-harfbuzz=$pkgver")
  
  for _arch in ${_architectures}; do
    cd "$srcdir/harfbuzz-$pkgver/build-${_arch}-static"
    DESTDIR="${pkgdir}" ninja install
    find "${pkgdir}/usr/${_arch}" -name '*.a' | xargs ${_arch}-strip -g
  done
}

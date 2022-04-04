# Maintainer: pingplug < aur at pingplug dot me >
# Contributor: Schala Zeal < schalaalexiazeal at gmail dot com >
# Contributor: Xiao-Long Chen < chenxiaolong at cxl dot epac dot to >


_commit=b43e7c6f3cf7855e16170a06d3a9c7234c60ca94  # tags/1.17.6^0
_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-cairo
pkgver=1.17.6
pkgrel=1
pkgdesc="2D graphics library with support for multiple output devices (mingw-w64)"
arch=('any')
url="https://cairographics.org"
license=('LGPL' 'MPL')
depends=('mingw-w64-fontconfig'
         'mingw-w64-pixman'
         'mingw-w64-libpng'
         'mingw-w64-lzo'
         'mingw-w64-glib2')
makedepends=('mingw-w64-meson'
             'mingw-w64-librsvg'
             'mingw-w64-poppler')
conflicts=("${pkgname}-bootstrap")
replaces=("${pkgname}-bootstrap")
options=('!strip' '!buildflags' 'staticlibs')
source=("git+https://gitlab.freedesktop.org/cairo/cairo.git#commit=${_commit}"
        "0026-create-argb-fonts.all.patch")
sha256sums=('SKIP'
            '6db6c44fbdb4926d09afa978fe80430186c4b7b7d255059602b1f94c6a079975')

pkgver() {
  cd "${srcdir}/cairo"
  git describe --tags | sed 's/[^-]*-g/r&/;s/-/+/g'
}

prepare() {
  cd "${srcdir}/cairo"
  patch -p1 -i ${srcdir}/0026-create-argb-fonts.all.patch
}

build() {
  cd "${srcdir}"
  for _arch in ${_architectures}; do
    ${_arch}-meson cairo build-${_arch} \
      --buildtype=release \
      --default-library=both \
      -D spectre=disabled \
      -D tee=enabled \
      -D tests=disabled \
      -D symbol-lookup=disabled \
      -D gtk_doc=false
    meson compile -C build-${_arch}
  done
}

package() {
  cd "${srcdir}"
  for _arch in ${_architectures}; do
    meson install -C build-${_arch} --destdir "${pkgdir}"
    ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "${pkgdir}"/usr/${_arch}/lib/*.a
  done
}

# vim:set ts=2 sw=2 et:

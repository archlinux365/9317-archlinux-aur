pkgname=mingw-w64-gtk2
pkgver=2.24.29
pkgrel=1
pkgdesc="GTK+ is a multi-platform toolkit (v2) (mingw-w64)"
arch=(any)
url="http://www.gtk.org"
license=("LGPL")
makedepends=(
  'mingw-w64-gcc'
  'mingw-w64-pkg-config'
  'mingw-w64-configure'
  'gtk-update-icon-cache')
depends=(
  'mingw-w64-crt'
  'mingw-w64-atk>=1.29.2'
  'mingw-w64-pango>=1.20'
  'mingw-w64-glib2>=2.28.0'
  'mingw-w64-cairo>=1.6'
  'mingw-w64-gdk-pixbuf2>=2.21.0')
options=(!strip !buildflags staticlibs)
source=("https://download.gnome.org/sources/gtk+/${pkgver%.*}/gtk+-${pkgver}.tar.xz")
sha256sums=("0741c59600d3d810a223866453dc2bbb18ce4723828681ba24aa6519c37631b8")

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/gtk+-${pkgver}"
  for _arch in ${_architectures}; do
    msg "Building for ${_arch}"
    rm "${srcdir}/gtk+-${pkgver}/gtk/gtk.def"
    mkdir -p "build-${_arch}"
    cd "build-${_arch}"
    msg "Starting configure and make"
    ${_arch}-configure \
      --with-gdktarget=win32 \
      --disable-modules \
      --disable-cups \
      --disable-papi \
      --disable-glibtest
    make
    cd ..
  done
}

package() {
  cd "${srcdir}/gtk+-${pkgver}"
  for _arch in ${_architectures}; do
    cd "build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.exe' -o -name '*.bat' -o -name '*.def' -o -name '*.exp' -o -name '*.manifest' | xargs -rtl1 rm
    find "$pkgdir/usr/${_arch}" -name '*.dll' | xargs -rtl1 ${_arch}-strip --strip-unneeded
    find "$pkgdir/usr/${_arch}" -name '*.a' | xargs -rtl1 ${_arch}-strip -g
    rm -r "$pkgdir/usr/${_arch}/etc"
    rm -r "$pkgdir/usr/${_arch}/share/gtk-2.0"
    cd ..
  done
}

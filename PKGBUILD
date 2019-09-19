# Maintainer: Andrew Sun <adsun701 at gmail dot com>

pkgname=mingw-w64-glibmm
pkgver=2.62.0
pkgrel=1
pkgdesc="C++ bindings for GLib (mingw-w64)"
arch=('any')
url="https://www.gtkmm.org/"
license=('GPL')
makedepends=('mingw-w64-configure')
depends=('mingw-w64-libsigc++' 'mingw-w64-glib2')
options=('!strip' '!buildflags' 'staticlibs')
source=("https://download.gnome.org/sources/glibmm/${pkgver%.*}/glibmm-${pkgver}.tar.xz")
sha256sums=('36659f13cc73282392d1305858f3bbca46fbd1ce2f078cc9db8b9f79b2e93cfe')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/glibmm-$pkgver/"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
    --disable-documentation \
    ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/glibmm-$pkgver/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

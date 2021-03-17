# Maintainer: pingplug < aur at pingplug dot me >
# Contributor: Schala Zeal < schalaalexiazeal at gmail dot com >
# Contributor: ant32 < antreimer at gmail dot com >

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-poppler
pkgver=21.03.0
pkgrel=1
pkgdesc="PDF rendering library based on xpdf 3.0 (mingw-w64)"
arch=('any')
url="https://poppler.freedesktop.org"
license=('GPL')
depends=('mingw-w64-openjpeg2'
         'mingw-w64-cairo')
optdepends=('mingw-w64-glib2: libpoppler-glib'
            'mingw-w64-qt5-base: libpoppler-qt5')
makedepends=('mingw-w64-cmake'
             'mingw-w64-glib2'
             'mingw-w64-icu'
             'mingw-w64-curl'
             'python')
options=('!strip' 'staticlibs' '!buildflags')
source=("https://poppler.freedesktop.org/poppler-${pkgver}.tar.xz")
sha256sums=('fd51ead4aac1d2f4684fa6e7b0ec06f0233ed21667e720a4e817e4455dd63d27')

prepare() {
  cd "${srcdir}/poppler-${pkgver}/utils"
  # they moved gstrndup() to copyString() but forgot pdftocairo-win32.cc
  sed -i 's|gstrndup|copyString|g' pdftocairo-win32.cc
}

build() {
  cd "${srcdir}/poppler-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p "${_arch%%-*}" && pushd "${_arch%%-*}"
    ${_arch}-cmake \
      -DBUILD_CPP_TESTS=NO \
      -DBUILD_GTK_TESTS=NO \
      -DBUILD_QT5_TESTS=NO \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/poppler-${pkgver}/${_arch%%-*}"
    make DESTDIR="${pkgdir}" install
    find "${pkgdir}/usr/${_arch}" -name '*.exe' -exec rm {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
  done
}

# vim:set ts=2 sw=2 et:

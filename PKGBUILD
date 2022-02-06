# Maintainer: pingplug < aur at pingplug dot me >
# Contributor: Schala Zeal < schalaalexiazeal at gmail dot com >

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-lcms2
pkgver=2.13.1
pkgrel=1
pkgdesc="Small-footprint color management engine, version 2 (mingw-w64)"
arch=('any')
url="https://littlecms.com/color-engine/"
license=('MIT')
depends=('mingw-w64-crt'
         'mingw-w64-libtiff')
makedepends=('mingw-w64-configure')
options=('!strip' 'staticlibs' '!buildflags')
source=("https://downloads.sourceforge.net/sourceforge/lcms/lcms2-${pkgver}.tar.gz")
sha256sums=('d473e796e7b27c5af01bd6d1552d42b45b43457e7182ce9903f38bb748203b88')

prepare() {
    cd lcms2-${pkgver}
    autoreconf -fi
}

build() {
  cd "${srcdir}"/${pkgname#mingw-w64-}-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/${pkgname#mingw-w64-}-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    find "${pkgdir}/usr/${_arch}" -name '*.exe' -exec ${_arch}-strip {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
  done
}

# vim:set ts=2 sw=2 et:

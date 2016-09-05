# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Contributor: Kevin Ott <supercodingmonkey at gmail dot com>

pkgname=lib32-sfml
pkgver=2.4.0
pkgrel=1
pkgdesc='A simple, fast, cross-platform, and object-oriented multimedia API (32-bit)'
arch=('x86_64')
url='http://www.sfml-dev.org'
license=('zlib')
depends=('lib32-libsndfile' 'lib32-libxrandr' 'lib32-libjpeg' 'lib32-openal' 'lib32-glew' 'lib32-freetype2' 'lib32-xcb-util-image' 'sfml')
makedepends=('gcc-multilib' 'cmake')
source=("$url/files/SFML-$pkgver-sources.zip")
md5sums=('c15e4169b8cfeb2ab8bbc004a90c159a')

build() {
  cd "$srcdir/SFML-$pkgver"

  export CFLAGS='-m32'
  export CXXFLAGS='-DGLXContextID=XID -m32'
  export LDFLAGS='-m32'

  mkdir build && cd build
  cmake .. \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DSFML_BUILD_EXAMPLES=0 \
      -DSFML_BUILD_DOC=0 \
      -DSFML_INSTALL_PKGCONFIG_FILES=1 \
      -DLIB_SUFFIX=32
  make
}

package() {
  cd "$srcdir/SFML-$pkgver"/build

  install -dm755 "$pkgdir/usr/lib32/pkgconfig"
  install -m755 lib/*.so{,.*} "$pkgdir/usr/lib32/"
  install -m755 tools/pkg-config/*.pc "$pkgdir/usr/lib32/pkgconfig"
  install -Dm644 ../license.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

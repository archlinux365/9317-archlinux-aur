# Maintainer: Adrià Arrufat <swiftscythe@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=webkit2gtk-unstable
pkgver=2.25.3
pkgrel=1
pkgdesc="GTK Web content engine library"
arch=(x86_64)
url="https://webkitgtk.org/"
license=(custom)
depends=(libxt libxslt enchant geoclue2 gst-plugins-base-libs libsecret
         libwebp harfbuzz-icu gtk3 libnotify hyphen woff2 openjpeg2)
makedepends=(gperf gobject-introspection ruby cmake python ninja)
optdepends=('gst-plugins-base: free media decoding'
            'gst-plugins-good: media decoding'
            'gst-libav: nonfree media decoding')
source=(https://webkitgtk.org/releases/webkitgtk-${pkgver}.tar.xz{,.asc})
sha256sums=('61a54cb4d2bf9a87323c284514c4c3bd377e5e54ef7e184d1e1f6b1f2c188039'
            'SKIP')
validpgpkeys=('D7FCF61CF9A2DEAB31D81BD3F3D322D0EC4582C3'
              '5AA3BC334FD7E3369E7C77B291C559DBE4C9123B')

conflicts=(webkit2gtk)
provides=(webkit2gtk)
options=('!emptydirs')

build() {
  cmake -Hwebkitgtk-$pkgver -Bbuild -GNinja \
    -DPORT=GTK \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_SKIP_RPATH=ON \
    -DLIBEXEC_INSTALL_DIR=/usr/lib \
    -DLIB_INSTALL_DIR=/usr/lib \
    -DENABLE_BUBBLEWRAP_SANDBOX=NO \
    -DUSE_WPE_RENDERER=OFF \

  cmake --build build
}

check() {
  : cmake --build build --target tests
}

package() {
  DESTDIR="$pkgdir" cmake --build build --target install

  cd webkitgtk-$pkgver
  find Source -name 'COPYING*' -or -name 'LICENSE*' -print0 | sort -z |
    while IFS= read -d $'\0' -r _f; do
      echo "### $_f ###"
      cat "$_f"
      echo
    done |
    install -Dm644 /dev/stdin "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

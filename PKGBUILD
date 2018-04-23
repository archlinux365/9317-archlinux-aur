pkgname=mingw-w64-pcre2
pkgver=10.31
pkgrel=2
pkgdesc="	A library that implements Perl 5-style regular expressions. 2nd version (mingw-w64)"
arch=(any)
url="http://www.pcre.org/"
license=("BSD")
makedepends=(mingw-w64-configure mingw-w64-readline mingw-w64-bzip2 mingw-w64-zlib)
depends=(mingw-w64-crt)
options=(staticlibs !strip !buildflags)
optdepends=(mingw-w64-readline mingw-w64-bzip2 mingw-w64-zlib)
source=("ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre2-$pkgver.tar.bz2"
"bug_2067.patch")
sha256sums=('e07d538704aa65e477b6a392b32ff9fc5edf75ab9a40ddfc876186c4ff4d68ac'
            '9b16b5e4ba28bddb1ed061e3562f1e900dfac4e887ca81059b9a168e10575402')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd "$srcdir/pcre2-$pkgver"
  patch -p1 -i ../bug_2067.patch
}

build() {
	cd "$srcdir/pcre2-$pkgver"
  for _arch in ${_architectures}; do
    unset LDFLAGS
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
      --enable-jit \
      --enable-pcre2-16 \
      --enable-pcre2-32 \
      --enable-pcre2grep-libz \
      --enable-pcre2grep-libbz2 \
      --enable-pcre2test-libreadline
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/pcre2-$pkgver/build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.exe' -exec ${_arch}-strip {} \;
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
  done
}

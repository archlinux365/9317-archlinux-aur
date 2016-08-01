# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=rocksdb-lite
pkgver=4.9
pkgrel=1
pkgdesc='Embedded key-value store for fast storage (lite version)'
arch=(i686 x86_64)
url='http://rocksdb.org'
license=(BSD)
depends=(gperftools zlib bzip2 lz4 snappy gcc-libs)
conflicts=(rocksdb)
checkdepends=(python2)
source=(https://github.com/facebook/rocksdb/archive/rocksdb-$pkgver.zip)
sha256sums=('31beaca347531440e816293c244f03d32154040f6d5beddf8045d06829053f36')

prepare() {
  cd rocksdb-rocksdb-$pkgver
  sed -e 's/\bpython\b/python2/' -i Makefile
  if [ "$CARCH"  == "armv6h" ]; then
    sed -e 's/-momit-leaf-frame-pointer//' -i Makefile
  fi
}

build() {
  cd rocksdb-rocksdb-$pkgver
  CFLAGS='-DROCKSDB_LITE' make shared_lib
}

check() {
  cd rocksdb-rocksdb-$pkgver
# The are some tests are broken in 3.6.2 release
#  make check
}

package() {
  cd rocksdb-rocksdb-$pkgver
  install -d "$pkgdir"/usr/include
  cp -r include/rocksdb "$pkgdir"/usr/include
  install -m755 -D librocksdb.so "$pkgdir"/usr/lib/librocksdb_lite.so
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

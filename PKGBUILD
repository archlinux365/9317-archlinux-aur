# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=rocksdb-lite
pkgver=5.10.4
pkgrel=1
pkgdesc='Embedded key-value store for fast storage (lite version)'
arch=(i686 x86_64)
url='http://rocksdb.org'
license=('Apache')
depends=(gperftools zlib bzip2 lz4 snappy gcc-libs)
conflicts=(rocksdb)
checkdepends=(python2)
source=(https://github.com/facebook/rocksdb/archive/v$pkgver.zip)
sha256sums=('92bc1c3a9dab3d7835b7ba95397129e830eeb4b7582eb91f17ceab3b6f2611e9')

prepare() {
  cd rocksdb-$pkgver
  sed -e 's/\bpython\b/python2/' -i Makefile
  if [ "$CARCH"  == "armv6h" ]; then
    sed -e 's/-momit-leaf-frame-pointer//' -i Makefile
  fi
}

build() {
  cd rocksdb-$pkgver
  CXXFLAGS='-DROCKSDB_LITE -DROCKSDB_USE_RTTI' make shared_lib
}

package() {
  cd rocksdb-$pkgver
  install -d "$pkgdir"/usr/include
  cp -r include/rocksdb "$pkgdir"/usr/include
  install -m755 -D librocksdb.so "$pkgdir"/usr/lib/librocksdb_lite.so
  install -D -m644 LICENSE.Apache "$pkgdir/usr/share/licenses/$pkgname/LICENSE.Apache"
  install -D -m644 LICENSE.leveldb "$pkgdir/usr/share/licenses/$pkgname/LICENSE.leveldb"
}

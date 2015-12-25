# Maintainer: nic96
pkgname=leveldb-mcpe
pkgver=1.18
pkgrel=1
pkgdesc="LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values."
url="https://github.com/Mojang/leveldb-mcpe"
license=('BSD')
arch=('i686' 'x86_64')
conflicts=('leveldb')
depends=('boost-libs' 'zlib' 'snappy')
makedepends=('git' 'make')
source=("git://github.com/Mojang/leveldb-mcpe.git")
md5sums=('SKIP')

prepare() {
  cd "$srcdir/$pkgname"
  sed -e 's/zlib\/zlib\.h/zlib\.h/' -i db/zlib_compressor.cc
  sed -e 's/snappy\/snappy\.h/snappy\.h/' -i db/snappy_compressor.cc
}

build() {
  make -C "$pkgname"
}

package() {
  cd "$pkgname"

  install -dm755 \
      "$pkgdir"/usr/{include/leveldb,lib} \
      "$pkgdir"/usr/share/doc/"$pkgname"

  # libraries
  install -m644 -t "$pkgdir/usr/lib" "libleveldb.so.${pkgver%.?*}" libleveldb.a
  cp -P libleveldb.so* "$pkgdir/usr/lib"

  # headers
  install -m644 -t "$pkgdir/usr/include/leveldb" include/leveldb/*

  # documentation
  cp -r doc/* "$pkgdir/usr/share/doc/$pkgname"

  # license
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

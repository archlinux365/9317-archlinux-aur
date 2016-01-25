# Maintainer: Mike Williamson <mike at korora dot ca>
#
# based on:
# - https://aur.archlinux.org/packages/arangodb
# - https://aur.archlinux.org/packages/arangodb-git

pkgname=arangodb
pkgver=2.7.5
pkgrel=1
pkgdesc="A multi-model NoSQL database, combining key-value, document and graph data models."
arch=("i686" "x86_64" "armv7l" "armv7h")
url="https://www.arangodb.com/"
license=('APACHE')
depends=("glibc" "gcc-libs" "openssl" "readline" "systemd")
makedepends=("python2 go")
provides=("arangodb=$pkgver")
conflicts=("arangodb-latest" "arangodb-git")
backup=('etc/arangodb/arangob.conf'
  'etc/arangodb/arangodump.conf'
  'etc/arangodb/arangorestore.conf'
  'etc/arangodb/arangod.conf'
  'etc/arangodb/arangoimp.conf'
  'etc/arangodb/arangosh.conf'
  'etc/arangodb/arango-dfdb.conf'
  'etc/arangodb/foxx-manager.conf'
)
options=()
install=arangodb.install
source=("https://www.arangodb.com/repositories/Source/$pkgname-$pkgver.tar.bz2" "arangodb.service")
sha256sums=('e37ca12eea25a6ebf18f25502ce3ec14901c41c5abd8ac162b8ea522b2459742'
            'ccde74e481761e2879845a0c9fbef601f4cdd73465d425549d3ad6714e99443d')

build() {
  msg2 "Symlinking 'python' to python2."
  ln -s -f /usr/bin/python2 python
  export PATH="`pwd`:$PATH"
  export CFLAGS="-g -O2"
  export CXXFLAGS="-g -O2"

  msg2 "Configuring ArangoDB."
  cd $srcdir/ArangoDB-$pkgver
  make setup
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --enable-all-in-one-etcd \
    --enable-armv7

  msg2 "Building ArangoDB."
  make -j $(nproc)
}

package() {
  msg2 "Preparing ArangoDB."
  cd $srcdir/ArangoDB-$pkgver
  make DESTDIR="$pkgdir/" install
  mkdir -p $pkgdir/usr/share/doc/arangodb
  cp -R $srcdir/ArangoDB-$pkgver/Documentation/* $pkgdir/usr/share/doc/arangodb/

  msg2 "Preparing systemd service."
  mkdir -p $pkgdir/usr/lib/systemd/system
  cp $srcdir/arangodb.service $pkgdir/usr/lib/systemd/system/
}

check() {
  cd $srcdir/ArangoDB-$pkgver
  make -k check
}


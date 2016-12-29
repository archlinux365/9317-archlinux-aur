# Maintainer: Andrea Girotto echo "naqern.tvebggb@tznvy.pbz" | tr '[a-z]' '[n-za-m]'
pkgname=sagittarius
pkgver=0.7.11
pkgrel=3
pkgdesc='R6RS/R7RS Scheme system.'
arch=('i686' 'x86_64')
url=https://bitbucket.org/ktakashi/sagittarius-scheme/wiki/Home
license=('BSD')
depends=(gc libffi zlib unixodbc)
makedepends=('cmake>=2.8.4')
source=(https://bitbucket.org/ktakashi/sagittarius-scheme/downloads/$pkgname-$pkgver.tar.gz)
md5sums=('e0f9786feafcda83ef380a8f6f31d0a4')

build(){
 cd ${srcdir}/${pkgname}-${pkgver}

 sed -e '1s:/bin/sash:/bin/sagittarius:' -i cmake/sagittarius-config.in
 sed -e '1s:/bin/sash:/bin/sagittarius:' -i cmake/sagittarius-package.in

 cmake . -DCMAKE_INCLUDE_PATH=/usr/lib/libffi-3.1/include/ \
         -DCMAKE_LIBRARY_PATH=/usr/lib \
         -DINSTALL_PREFIX=/usr/ \
         -DINSTALL_SYMLINK=0
 make
 make doc
}


package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

#check() {
#  cd "${srcdir}/${pkgname}-${pkgver}"
#  make test
#  make test-ext
#}


# Maintainer: Hans-Nikolai Viessmann <hans AT viess.mn>
pkgname='barvinok'
pkgver=0.41.1
pkgrel=1
pkgdesc='A library for counting the number of integer points in parametric and non-parametric polytopes'
arch=('x86_64')
url='http://barvinok.gforge.inria.fr/'
license=('GPL')
depends=('ntl' 'isl>0.19' 'polylib-gmp')
source=("http://barvinok.gforge.inria.fr/$pkgname-$pkgver.tar.xz")
md5sums=('61a08e4461c4c1936d4d18cb99a2ae22')

build() {
    cd "$srcdir/$pkgname-$pkgver"

    # NTL 11 now uses pthread functions, so we need to have it link to libpthread.
    ./configure --prefix=/usr --enable-shared-barvinok --with-isl=system --with-polylib=system LIBS="-lpthread"
    make
}

check() {
    cd "$srcdir/$pkgname-$pkgver"
    make check
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
}

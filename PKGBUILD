# Maintainer: Marco von Rosenberg <codingmarco@gmail.com>

pkgname=mlrpt
pkgver=1.6.2
pkgrel=1
pkgdesc="Non-interactivr command-line version of glrpt for receiving, decoding and saving LRPT images from the Russian Meteor-M type of weather satellites"
arch=('x86_64')
url="http://www.5b4az.org"
license=('GPLv3')
depends=('rtl-sdr')
makedepends=('make')
source=("http://www.5b4az.org/pkg/lrpt/$pkgname-$pkgver-beta.tar.bz2"
               "mlrpt.patch")
md5sums=('SKIP'
                    'SKIP')

prepare() {
    cd "$pkgname-$pkgver-beta"
    patch -Np0 -i $srcdir/mlrpt.patch
}
                    
build() {
	cd "$pkgname-$pkgver-beta"
	./autogen.sh
	./configure --prefix=/usr
	make
}

package() {
	cd "$pkgname-$pkgver-beta"
	make DESTDIR="$pkgdir/" install
}

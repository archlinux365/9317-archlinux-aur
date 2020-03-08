# Maintainer: Christian Boxdörfer <christian.boxdoerfer@posteo.de>
pkgname=fsearch-git
_gitname=fsearch
pkgver=0.1beta4.r19.gbec77b8
pkgrel=1
pkgdesc="A fast file search utility. Git Version."
arch=('i686' 'x86_64')
url="https://cboxdoerfer.github.io/fsearch"
license=('GPL2')
depends=('gtk3' 'pcre')
makedepends=('git' 'autoconf-archive')
conflicts=('fsearch')
source=('git://github.com/cboxdoerfer/fsearch.git')
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/${pkgname%-git}"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' 
}

build() {
    cd $_gitname/

    ./autogen.sh
    ./configure --prefix=/usr
    make
}

package() {
    cd $_gitname/

    make DESTDIR="$pkgdir/" install
}

# Maintainer: Christian Boxdörfer <christian.boxdoerfer@posteo.de>
pkgname=fsearch-git
_gitname=fsearch
pkgver=r221.7472ef3
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
    cd $_gitname
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $_gitname/

  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd $_gitname/

  make PREFIX=/usr DESTDIR="$pkgdir/" install
}

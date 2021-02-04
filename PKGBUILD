# Maintainer: Martin Sandsmark <martin.sandsmark@kde.org>

pkgname=schiffbruch-git
pkgver=127.83a49b0
pkgrel=1
pkgdesc='A game of building, strategy and adventure played with a two-dimensional view.'
arch=('x86_64' 'i686')
url='https://github.com/sandsmark/schiffbruch'
license=('CCPL')
depends=('sfml')
makedepends=('git')
conflicts=(schiffbruch)
provides=(schiffbruch)
source=('git+https://github.com/sandsmark/schiffbruch.git')
md5sums=('SKIP')

pkgver() {
    cd schiffbruch
    printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../schiffbruch \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \

    make
}


package() {
    cd build
    make DESTDIR="$pkgdir" install
}

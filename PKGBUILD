# Maintainer: Johannes Wienke <languitar@semipol.de>

pkgname='rsb-proto'
pkgver=0.14.0.3dacbb4
pkgrel=1
pkgdesc='Robotics Service Bus Communication Protocol'
arch=(any)
url='https://projects.cor-lab.org/projects/rsb'
license=('LGPL3')
depends=()
makedepends=('git' 'cmake')
source=("rsb-proto::git+https://code.cor-lab.org/git/rsb.git.protocol#branch=0.14")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/rsb-proto"
    printf "%s" "$(git describe --long | sed 's/release-//;s/\([^-]*-\)g/\1/;s/-/./g')"
}

build() {
    cd "${srcdir}/rsb-proto"
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
    make
}

package() {
    cd "${srcdir}/rsb-proto/build"
    make DESTDIR="${pkgdir}/" install
}

# Maintainer: Jia Li <lijia1608@gmail.com>
pkgname=alpscore-openmpi
pkgver=0.5.4
pkgrel=1
pkgdesc="ALPS Core libraries for numerical simulations of condensed matter systems."
arch=(i686 x86_64)
url="http://alpscore.org"
license=('GPL2')
depends=('cmake' 'boost' 'hdf5' 'openmpi')
provides=($pkgname=$pkgver)
conflicts=(alpscore-git alpscore alpscore-openmpi-git alps)
source=("https://github.com/ALPSCore/ALPSCore/archive/v$pkgver.tar.gz")
md5sums=('b887c9328e2a22afa123663cf888b768')

build() {
    cd "ALPSCore-$pkgver"
    mkdir -p build
    cd build
    CC=mpicc CXX=mpicxx cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DTesting=OFF -DDocumentation=OFF ..
    make
}

package() {
    cd "ALPSCore-$pkgver/build"
    make DESTDIR="$pkgdir/" install
}

# Maintainer: Millian Poquet <millian.poquet@gmail.com>
pkgname=simgrid
pkgver=3.30
pkgrel=1
pkgdesc='A scientific instrument to study the behavior of large-scale distributed systems such as Grids, Clouds, HPC or P2P systems.'
arch=('i686' 'x86_64')
url='https://simgrid.org/'
license=('LGPL')
source=('https://framagit.org/simgrid/simgrid/-/archive/v3.30/simgrid-v3.30.tar.gz')
depends=('boost' 'python')
makedepends=('cmake')
md5sums=('b55fba3f16a81e9d043b4ef679a1eed9')

package() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  cmake . \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -Denable_compile_optimizations=ON \
    -Denable_documentation=OFF \
    -Denable_lto=ON \
    -Denable_smpi=ON
  make -j $(nproc)
  make DESTDIR="${pkgdir}" install
}

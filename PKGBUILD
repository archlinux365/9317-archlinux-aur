# Maintainer: Dominik Schrempf <dominik dot schrempf at gmail dot com>
pkgname=iqtree-latest
pkgver=1.6.1
pkgrel=1
pkgdesc="Efficient phylogenomic software by maximum likelihood; multicore version (OMP)"
arch=(x86_64)
url="http://www.iqtree.org/"
license=('GPL2')
groups=()
depends=('cmake' 'eigen' 'glibc' 'libstdc++5' 'zlib')
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
# install=
# changelog=
source=("https://github.com/Cibiv/IQ-TREE/archive/v${pkgver}.tar.gz")
md5sums=('8e9cf586e803405bc44872fab3e756a1')
noextract=()

build() {
  cd IQ-TREE-${pkgver}
  mkdir build
  cd build
  cmake -DIQTREE_FLAGS=omp ..
  make
}


package() {
  cd IQ-TREE-${pkgver}
  install -D -m 755 build/iqtree ${pkgdir}/usr/bin/iqtree
}

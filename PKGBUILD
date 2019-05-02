# Maintainer: Dominik Schrempf <dominik dot schrempf at gmail dot com>

# XXX: The following warning cannot be removed because CMAKE stores the build
# directory in the executable 'iqtree'.

# ==> WARNING: Package contains reference to $srcdir
# usr/bin/iqtree

pkgname=iqtree
pkgver=1.6.10
pkgrel=1
pkgdesc="Efficient phylogenomic software by maximum likelihood; multicore version (OMP)"
arch=(x86_64)
url="http://www.iqtree.org/"
license=('GPL2')
depends=('cmake' 'eigen' 'glibc' 'libstdc++5' 'zlib')
source=("https://github.com/Cibiv/IQ-TREE/archive/v${pkgver}.tar.gz")
md5sums=('f6ed919be95f2da1130b1add1928b514')

build() {
  cd IQ-TREE-${pkgver}
  mkdir -p build
  cd build
  cmake -DIQTREE_FLAGS=omp ..
  make
}

package() {
  cd IQ-TREE-${pkgver}
  install -D -m 755 build/iqtree ${pkgdir}/usr/bin/iqtree
}

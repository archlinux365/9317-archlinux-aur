# Maintainer: Daniel Müllner <daniel@danifold.net>

# Remove the --enable-openmp flag below if you do not want parallelization.

pkgname=python-graph-tool
pkgver=2.12
pkgrel=1
pkgdesc='A Python module for manipulation and statistical analysis of graphs'
arch=('i686' 'x86_64')
url='http://projects.skewed.de/graph-tool/'
license=(GPL3)
depends=(boost python3 expat python3-scipy python3-numpy cgal)
makedepends=(sparsehash python2-cairo)
optdepends=('graphviz: graph layout'
'cairomm: graph drawing'
'python-cairo: graph drawing'
'python-matplotlib: graph drawing')
provides=(python3-graph-tool)
conflicts=(python3-graph-tool)
replaces=(python3-graph-tool)
options=(!libtool)
source=("http://downloads.skewed.de/graph-tool/graph-tool-$pkgver.tar.bz2" configure.patch)
sha256sums=('ac5fdd65cdedb568302d302b453fe142b875f23e3500fe814a73c88db49993a9'
            'a3499be132a34b1bf64e26d6ccbd9a4804d9f06eb1fd9cac2bce0966d54324f1')

prepare() {
  cd "$srcdir/graph-tool-$pkgver"
  patch -i $srcdir/configure.patch
  ./configure --enable-openmp --prefix=/usr --docdir="/usr/share/doc/$pkgname"
  # Remove information about the source directory, which is temporary.
  sed -i 's|#define PACKAGE_SOURCE_DIR ".*"|/* removed since the source directory is temporary */|' config.h
}

build() {
  cd "$srcdir/graph-tool-$pkgver"
  make
}

check() {
  cd "$srcdir/graph-tool-$pkgver"
  make check
}

package() {
  cd "$srcdir/graph-tool-$pkgver"
  make DESTDIR="$pkgdir/" install
}

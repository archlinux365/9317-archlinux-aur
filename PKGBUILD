# Maintainer: Danilo J. S. Bellini <danilo dot bellini at gmail dot com>
pkgname=('python2-rsgislib')
pkgver=3.5.7
pkgrel=1
_rsgislib="Remote Sensing and GIS collection of tools for processing datasets"
pkgdesc="$_rsgislib including its bindings compiled for Python 2.7"
arch=('i686' 'x86_64')
url='http://www.rsgislib.org'
license=('GPL3')
_common_deps=('gsl' 'gdal' 'geos' 'xerces-c' 'muparser' 'cgal'
              'hdf5-cpp-fortran' 'gmp' 'mpfr' 'kealib' 'python2-numpy')
makedepends=('cmake' 'boost' "${_common_deps[@]}")
depends=('boost-libs' "${_common_deps[@]}")
options=(!emptydirs)
source=("https://bitbucket.org/petebunting/rsgislib/get/$pkgver.tar.bz2")
sha256sums=('ee41fcad9956350a66b3cb230670d369c598a9b157e316af4efe8186435960cf')
_srcpath=petebunting-rsgislib-4d0245e68eba

prepare() {
  cd "$srcdir/$_srcpath"

  # Fix the default include/lib paths and Python 2 executable
  sed -i s-/local--g\;/FIND_PROGRAM/s-python-python2-g CMakeLists.txt

  # Root the Python bindings installation at $pkgdir
  sed -i s_--prefix_--root="$pkgdir"'\\" \\"&'_g CMakeLists.txt

  # Updates the shebang in scripts and "metascripts" to call "python2"
  # instead of "python"
  find -name "*.py*" -exec sed -i '1s/python\s*$/python2/' '{}' \;
}

build() {
  cd "$srcdir/$_srcpath"
  cmake \
    -D CMAKE_CXX_STANDARD=11 \
    -D CMAKE_INSTALL_PREFIX=/usr \
    -D CMAKE_SKIP_RPATH=ON \
    .
  make
}

package() {
  cd "$srcdir/$_srcpath"
  make DESTDIR="$pkgdir" install
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

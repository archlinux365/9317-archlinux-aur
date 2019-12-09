# Maintainer: Baris Demirdelen <barisdemirdelen at gmail dot com>
# Previous maintainer: Andrew Anderson <aanderso@tcd.ie>
# Contributor: Jonathon Fernyhough <jonathon_at manjaro_dotorg>

pkgname=intel-dnnl
_gitname=mkl-dnn
pkgver=1.1.1
pkgrel=1
pkgdesc="Deep Neural Network Library (DNNL)"
arch=(x86_64)
replaces=(mkl-dnn)
url=https://github.com/intel/mkl-dnn
license=('APACHE')
makedepends=('cmake>=2.8.11' 'doxygen>=1.8.5')
source=("$pkgname-$pkgver.tar.gz::https://github.com/intel/$_gitname/archive/v$pkgver.tar.gz")
sha256sums=('a31b08a89473bfe3bd6ed542503336d21b4177ebe4ccb9a97810808f634db6b6')

prepare() {
  cd "$srcdir/$_gitname-$pkgver"
  mkdir -p build 

  # Allow compilation to succeed despite warnings
  # sed -i '66s|-Werror||' cmake/platform.cmake
}

build() {
  cd "$srcdir/$_gitname-$pkgver/build"
  cmake -DCMAKE_INSTALL_PREFIX="$pkgdir/usr" -DCMAKE_INSTALL_LIBDIR="lib" ..
  make
  make doc
}

check() {
  cd "$srcdir/$_gitname-$pkgver/build"
  ctest
}

package() {
  cd "$srcdir/$_gitname-$pkgver/build"
  make install
}

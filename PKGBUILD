# Maintainer: orumin <ev at orum.in>

pkgname=lib32-suitesparse
_basename=suitesparse
pkgver=4.5.4
pkgrel=1
pkgdesc="A collection of sparse matrix libraries"
url="http://faculty.cse.tamu.edu/davis/suitesparse.html"
arch=('i686' 'x86_64')
conflicts=('umfpack')
provides=('umfpack')
replaces=('umfpack')
depends=('lib32-metis' 'lib32-lapack' 'lib32-intel-tbb')
makedepends=('gcc-fortran-multilib' 'cmake' 'chrpath')
license=('GPL')
options=('staticlibs')
source=("http://faculty.cse.tamu.edu/davis/SuiteSparse/SuiteSparse-$pkgver.tar.gz" suitesparse-link-tbb.patch)
sha1sums=('33fb47e3140f1dd8cae10847a9344439d4aa66b2'
          '4f0b3836e8c3c1ec5be01f988f136cee4a2cb936')

prepare() {
# Fix linking with intel-tbb
  cd SuiteSparse
  patch -p1 -i ../suitesparse-link-tbb.patch
}

build() {
   cd "$srcdir"/SuiteSparse

   CC="gcc -m32" CXX="g++ -m32" PKG_CONFIG_PATH='/usr/lib32/pkgconfig' \
   BLAS=-lblas TBB=-ltbb SPQR_CONFIG=-DHAVE_TBB MY_METIS_LIB=/usr/lib32/libmetis.so make
}


package() {
   cd "${srcdir}"/SuiteSparse
   install -dm755 "${pkgdir}"/usr/{include,lib32}

   CC="gcc -m32" CXX="g++ -m32" PKG_CONFIG_PATH='/usr/lib32/pkgconfig' \
   BLAS=-lblas TBB=-ltbb SPQR_CONFIG=-DHAVE_TBB MY_METIS_LIB=/usr/lib32/libmetis.so \
     make INSTALL_LIB="${pkgdir}"/usr/lib32 INSTALL_INCLUDE="${pkgdir}"/usr/include install

   rm -r "${pkgdir}"/usr/include

   # fix RPATH
   chrpath -d "$pkgdir"/usr/lib32/*
}

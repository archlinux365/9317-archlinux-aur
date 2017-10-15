# Maintainer: George Eleftheriou

pkgname=hdf5_18-mpich
_pkgname=hdf5
pkgver=1.8.19
pkgrel=1
pkgdesc="The hdf5 legacy 1.8 series compiled with mpich support"
arch=('i686' 'x86_64')
url="https://support.hdfgroup.org/HDF5/"
license=('custom')
depends=('zlib' 'mpich')
makedepends=('gcc-fortran')
provides=('hdf5_18' 'hdf5_18-cpp-fortran' 'hdf5-fortran-mpich')
conflicts=('hdf5_18' 'hdf5_18-cpp-fortran' 'hdf5-fortran-mpich')
replaces=('hdf5-fortran-mpich')
source=("https://support.hdfgroup.org/ftp/HDF5/releases/${_pkgname}-${pkgver:0:3}/${_pkgname}-${pkgver}/src/${_pkgname}-${pkgver}.tar.bz2"
        "mpi.patch")
md5sums=('6f0353ee33e99089c110a1c8d2dd1b22'
         'b7165950c96ba4a2540984d07886accf')

prepare() {
  cd "${_pkgname}-${pkgver}"

  # FS#33343
  patch -p1 < ${srcdir}/mpi.patch
}

build() {
  cd "${_pkgname}-${pkgver}"
  ./configure \
  CXX="/opt/mpich/bin/mpicxx" \
  CC="/opt/mpich/bin/mpicc" \
  FC="/opt/mpich/bin/mpif90" \
  F9X="/opt/mpich/bin/mpif90" \
  RUNPARALLEL="/opt/mpich/bin/mpirun" \
  --prefix=/opt/${_pkgname}-${pkgver}-mpich \
  --enable-production \
  --enable-parallel \
  --enable-unsupported \
  --enable-using-memchecker --enable-clear-file-buffers \
  --enable-hl \
  --enable-cxx \
  --enable-fortran \
  --enable-fortran2003 \
  --with-pic \
  --disable-static \
  --disable-sharedlib-rpath \
  --with-zlib

  make
}

package() {
  cd "${_pkgname}-${pkgver}"
  make -j1 DESTDIR="${pkgdir}" install
}

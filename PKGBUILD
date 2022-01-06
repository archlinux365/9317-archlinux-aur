# Maintainer: Martin Diehl <aur@martin-diehl.net>
# Contributor: Samuel Williams <samuel.williams@oriontransfer.co.nz>
pkgname=scotch
pkgver=7.0.0
pkgrel=2
pkgdesc="Software package and libraries for graph, mesh and hypergraph partitioning, static mapping, and sparse matrix block ordering. This is the all-inclusive version (MPI/serial/esmumps)."
url="https://gitlab.inria.fr/scotch/scotch"
license=("custom:CeCILL-C")
depends=('zlib' 'openmpi' 'bzip2')
makedepends=('gcc-fortran')
provides=('ptscotch' 'ptscotch-openmpi' 'scotch_esmumps' 'scotch_ptesmumps')
conflicts=('ptscotch-openmpi' 'scotch_esmumps' 'scotch_esmumps5')
arch=('i686' 'x86_64')
source=("https://gitlab.inria.fr/scotch/scotch/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.gz")
sha256sums=('ef231bfd66778c27716db571c9f24449ee7fc2710e59cee224c94592cd956040')

options=(!emptydirs)

prepare() {
  cd "${srcdir}/${pkgname}-v${pkgver}/src"

  [ -e Makefile.inc ] && rm Makefile.inc
  cp "Make.inc/Makefile.inc.${CARCH/_/-}_pc_linux2.shlib" Makefile.inc

  # Apply patch to fix shared library ldflags
  sed -i 's/$(AR) $(ARFLAGS) $(@) $(?)/$(AR) $(ARFLAGS) $(@) $(?) $(LDFLAGS)/g' libscotch/Makefile

  # Use the CFLAGS defined /etc/makepkg.conf
  sed -i "s/-O3/${CFLAGS} -fPIC/g" Makefile.inc
 
  # Fix C compiler
  sed -i "s/CCD\t.*=.*gcc/CCD = mpicc/" Makefile.inc

  # Also enable bzip2 compression
  sed -i "s/-DCOMMON_FILE_COMPRESS_GZ/-DCOMMON_FILE_COMPRESS_GZ -DCOMMON_FILE_COMPRESS_BZ2/" Makefile.inc
  sed -i "s/-lz/-lz -lbz2/" Makefile.inc

  # avoid SIGABRT in dgord, https://stackoverflow.com/questions/38269659
  sed -i "s/-DSCOTCH_PTHREAD/-DSCOTCH_PTHREAD -g/" Makefile.inc

  # Fix the creation of directories
  sed -i "s/mkdir/mkdir\ -p/" Makefile.inc

  # To install headers and libs also for esmumps
  sed -i 's/scotch\*/{scotch,esmumps}\*/g' Makefile
}
 
build() {
  cd "${srcdir}/${pkgname}-v${pkgver}/src"
 
  make scotch
  make -j1 esmumps

  make ptscotch
  make -j1 ptesmumps
}
 
check() {
  cd "${srcdir}/${pkgname}-v${pkgver}/src"
 
  if [ -z $(ldconfig -p | grep libcuda.so.1) ]; then
    export OMPI_MCA_opal_warn_on_missing_libcuda=0
  fi
  make check FC=gfortran LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:../../lib"
  make ptcheck FC=gfortran LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:../../lib"
}
 
package() {
  cd "${srcdir}/${pkgname}-v${pkgver}/src"
 
  make install prefix="${pkgdir}/usr" includedir="${pkgdir}/usr/include/scotch"
 
  # To avoid conflict with extra/gpart, maybe move the package to /opt/scotch ?
  mv "${pkgdir}/usr/bin/gpart" "${pkgdir}/usr/bin/gpart-scotch"
 
  install -m 644 -D "../doc/CeCILL-C_V1-en.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


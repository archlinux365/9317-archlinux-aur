# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Contributor: Jingbei Li <i@jingbei.li>
# Contributor: Sigvald Marholm <marholm@marebakken.com>
# Adapted from the package petsc with the following original contributors:
# Contributor: Martin Diehl <https://martin-diehl.net>
# Contributor: Andreas Bilke <abilke at cosy dot sbg dot ac dot at>
# Contributor: Myles English <myles at rockhead dot biz>
# Contributor: Lucas H. Gabrielli <heitzmann at gmail dot com>
_base=petsc
pkgname=${_base}-complex
pkgver=3.17.3
pkgrel=1
_config=linux-c-opt
# if --with-debugging=yes is set then PETSC_ARCH is automatically set to
#"linux-c-debug" for some things, so the _config should be changed too
#_config=linux-c-debug
pkgdesc="Portable, extensible toolkit for scientific computation (complex scalars)"
arch=('i686' 'x86_64')
url="https://${_base}.org"
license=('custom:BSD-2-clause')
options=(staticlibs)
conflicts=("${_base}")
provides=("${_base}=${pkgver}")
depends=('python-numpy' 'openmpi' 'boost' 'lapack')
makedepends=('gcc' 'gcc-fortran' 'cmake' 'cython')
checkdepends=('openssh')
optdepends=('trilinos: support for trilinos'
  'ptscotch: support for ptscotch sequential and parallel graph partitioning library'
  'parmetis: support for parmetis parallel graph partitioning library'
  'metis: support for metis graph partitioning library'
  'pastix: support for the pastix solver'
  'superlu: support for the superlu sparse solver'
  'superlu_dist: support for the superlu_dist sparse solver'
  'hypre: support for the hypre sparse system solver'
  'hdf5-openmpi: support for the parallel version of HDF5'
  'mumps: support for the mumps sparse solver'
  'fftw: support for the FFTW fast Fourier transform'
  'triangle: support for the two-dimensional quality mesh generator and Delaunay triangulator'
  'suitesparse: support for the suitesparse sparse matrix libraries'
  'valgrind: support for valgrind to help find memory-management problems in programs')
install=${_base}.install
source=(https://ftp.mcs.anl.gov/pub/${_base}/release-snapshots/${_base}-lite-${pkgver}.tar.gz
  test_optdepends.sh)
sha512sums=('785ea066608f06664abbb8ba424e810ece72487c8cc81b816d5b1f7c30319f10fe0d8d0887559b700d5731d5f52c402e3740a2ea5adba8b74d3d7c6833e0e2f1'
  'f485f2cce6bb0601fe3bcbb3070892861d25394fc00bf3f6ca2eb8b030dc94dd42ec40d31a958fb860e955e82dc39073267d8c29be8ad8f33cdb3165a47e4a46')

_install_dir=/opt/${_base}/${_config}
_petsc_arch=arch-${_config}

build() {
  _build_dir=${srcdir}/${_base}-${pkgver}
  cd ${_build_dir}

  export PETSC_ARCH=${_petsc_arch}
  export PETSC_DIR=${_build_dir}

  OPTFLAGS='-O3 -march=native'
  CONFOPTS="--with-shared-libraries=1 \
            --with-petsc4py=1 \
            --with-mpi-f90module-visibility=0 \
            --with-cc=$(which mpicc) --with-cxx=$(which mpicxx) --with-fc=$(which mpifort) \
            --with-scalar-type=complex \
            $(sh ${srcdir}/test_optdepends.sh)"

  echo ${CONFOPTS}
  python ./configure --prefix=${_install_dir} ${CONFOPTS} \
    --COPTFLAGS=${OPTFLAGS} --CXXOPTFLAGS=${OPTFLAGS} --FOPTFLAGS=${OPTFLAGS}

  make ${MAKEFLAGS} all
  make DESTDIR=${srcdir}/tmp install
}

check() {
  cd ${srcdir}/${_base}-${pkgver}

  if [ -z "$(ldconfig -p | grep libcuda.so.1)" ]; then
    export OMPI_MCA_opal_warn_on_missing_libcuda=0
  fi
  PYTHONPATH=${srcdir}/tmp/${_install_dir}/lib:${PYTHONPATH} make check
}

package() {
  _build_dir=${srcdir}/${_base}-${pkgver}

  mkdir -p ${pkgdir}/${_install_dir}
  cp -Hr ${srcdir}/tmp/* ${pkgdir}

  # install licence (even though there is no such word as licenses)
  install -Dm 644 ${_build_dir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

  mkdir -p ${pkgdir}/etc/profile.d
  echo export PETSC_DIR=${_install_dir} >${pkgdir}/etc/profile.d/petsc.sh
  echo export PYTHONPATH=${_install_dir}/lib:'${PYTHONPATH}' >>${pkgdir}/etc/profile.d/petsc.sh
  chmod +x ${pkgdir}/etc/profile.d/petsc.sh

  # show where the shared libraries are
  install -dm 755 "${pkgdir}"/etc/ld.so.conf.d/
  echo ${_install_dir}/lib >${pkgdir}/etc/ld.so.conf.d/petsc.conf

  # install pkgconfig settings
  install -Dm 644 ${_build_dir}/${_petsc_arch}/lib/pkgconfig/PETSc.pc ${pkgdir}/usr/share/pkgconfig/PETSc.pc
}

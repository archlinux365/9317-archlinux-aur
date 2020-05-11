# Based on the AUR package, adapted to my PETSc
# (Metis, Hypre, OpenMPI, VTK, HDF5, ifem, nodeconstraint
# shared libraries; Methods: opt oprof dbg; x86_64)

pkgname=libmesh-petsc
realname=libmesh
pkgrel=1
pkgver=cpp03_final.r4547.g27913a829
pkgdesc="A C++ Finite Element Library"
arch=("x86_64")
url="http://libmesh.github.io/"
license=('LGPL')
provides=($realname "metaphysicl" "timpi")
conflicts=($realname)
depends=('eigen' 'hdf5' 'boost-libs' 'intel-tbb' 'vtk' 'glpk' 'netcdf' 'nlopt' "petsc" "hypre" "openmpi" "metis")
makedepends=('bison' 'coreutils')
# From tar.bz2
# source=("https://github.com/libMesh/libmesh/releases/download/v${pkgver}/libmesh-${pkgver}.tar.bz2")
# sha256sums=('638cf30d05c249315760f16cbae4804964db8857a04d5e640f37617bef17ab0f')
source=(
  "${realname}::git+https://github.com/libMesh/libmesh"
  "netcdf.m4.patch"
)
sha256sums=('SKIP'
            'e6861363bc9556bc0487003c7ce1b072532b07b654b12ae294f1bdabb6187783')

# Find the location of the header files of PETSc
petsc_h=$(pacman -Ql petsc | grep -m 1 petsc.h | sed 's-^[[:alpha:]-]* --g')
# Get the PETSc directory
petsc_dir=$(dirname "$petsc_h")
export PETSC_DIR=${petsc_dir%%/include}

#####################################################################
# From UPC: Building And Using Static And Shared "C" Libraries.html #
# #+begin_QUOTE                                                     #
# we need that all jump calls ("goto", in assembly speak)           #
# and subroutine calls will use relative addresses, and not         #
# absolute addresses. Thus, we need to use ... ~-fPIC~ or           #
# ~-fpic~                                                           #
# #+end_QUOTE                                                       #
#####################################################################
###############################################################################
#  From makepkg.conf                                                          #
# -march (or -mcpu) builds exclusively for an architecture                    #
# -mtune optimizes for an architecture, but builds for whole processor family #
###############################################################################

# I used these for PETSc (from MOOSE)
# -O3 optimises
generic_flags="-fPIC -fopenmp -O3 -march=x86-64 -mtune=generic"
export   COPTFLAGS=-O3
export CPPOPTFLAGS=-O3
export CXXOPTFLAGS=-O3
export      CFLAGS="$generic_flags"
# Fortify is optional
export    CPPFLAGS="$generic_flags -O2 -D_FORTIFY_SOURCE=2"
export    CXXFLAGS="$generic_flags -O2 -D_FORTIFY_SOURCE=2"
export      FFLAGS="$generic_flags"
export     FCFLAGS="$generic_flags"
export    F90FLAGS="$generic_flags"
export    F77FLAGS="$generic_flags"

# I used these for PETSc (from MOOSE)
# export METHODS="opt oprof dbg"
export METHODS="opt dbg"

export LANG=en_IE.UTF-8 LANGUAGE=en_IE.UTF-8 LC_ALL=en_IE.UTF-8

pkgver() {
  cd $realname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  # Directory for out of source build
  [[ -d ../build ]] || mkdir ../build

  # Update Git sub-modules
  cd "${srcdir}/${realname}"
  sed -i 's-=[[:space:]]*../../-=https://github.com/-g' .gitmodules
  git submodule sync --recursive
  git submodule update --init

  # Replace contrib/netcdf with system netcdf if available
  # (reminder -d: go to the right dir; by default the
  # directories are removed from path)
  patch -d "${srcdir}"/libmesh/m4 -i "${srcdir}"/netcdf.m4.patch
  cd "${srcdir}/${realname}"
  autoconf
  [[ -f /usr/include/netcdf.h ]] && \
    sed -i "s-\(ac_subdirs_all='\)contrib/netcdf/v4-\1-g; s-\(subdirs=\"\$subdirs\) contrib/netcdf/v4-\1-g" configure
  # Go back
  cd "${srcdir}"

  # # Force NLOpt

  ##############################################################
  # # I keep getting a very annoying error with an             #
  # # out-of-source build, saying that I need to run ~make     #
  # # distclean~, but if I do that, some make rules are not    #
  # # found. With this, I recreate whatever is needed for the  #
  # # out-of-source ~make distclean~                           #
  # ./configure \                                              #
  #   --prefix=/usr \                                          #
  #   $(for (( i=1; i<=${#CONFOPTS[@]}; i++)); do              #
  #       echo "${CONFOPTS[$i]}";                              #
  #     done)                                                  #
  # make distclean                                             #
  ##############################################################
}

build() {
  # This happens in ${pkgdir} (out-of-source)
  # Out of source build (recommended by Roy Stogner)
  cd ../build

  CONFOPTS=(
    --enable-petsc-hypre-required # recommended by MOOSE
    --with-metis=PETSc          # use PETSCs' metis
    --enable-cxx11-required     # force C++11 standard
    --enable-metaphysicl-required # recommended by MOOSE
    --enable-vtk-required
    --enable-curl
    --enable-hdf5
    --with-pic
    --enable-mpi
    --enable-complex            # make sure to compile PETSc with complex too

    --enable-netcdf             # testing...
    --with-netcdf=/usr/include  # testing...
    --with-netcdf-lib=/usr/lib  # testing...
    --enable-fftw               # Does this work ?
    --with-nlopt=/usr/include   # Does this work ?
    --with-nlopt-lib=/usr/lib   # Does this work ?
    --enable-mumps              # Does this work ?
    --with-mumps=/usr/include   # Does this work ?
    --with-mumps-lib=/usr/lib   # Does this work ?
    --enable-superlu            # Does this work ?

    --enable-shared             # shared libraries
    --enable-unique-id          # from libmesh GitHub wiki
    --enable-march              # get -march flag for this system
    --enable-ifem               # infinite elements
    --enable-nodeconstraint     # from libmesh GitHub wiki
  )

  # Configure
  "${srcdir}/${realname}"/configure \
    --prefix=/usr \
    $(for (( i=1; i<=${#CONFOPTS[@]}; i++)); do
        echo "${CONFOPTS[$i]}";
      done)

  # Actual build
  make
}

check() {
  cd ../build
  make check
}

package() {
  # make DESTDIR=usr/share/doc/${realname}/examples examples_doc
  make -C ../build DESTDIR="${pkgdir}"/usr/share/doc/${realname}/html doc
  make -C ../build DESTDIR="${pkgdir}" install

  mkdir -p "${pkgdir}/usr/share/doc/${realname}/"
  cp -a ../build/doc/* "${pkgdir}/usr/share/doc/${realname}/"
  install -d "${pkgdir}/etc/libmesh"
  cp -a "${pkgdir}"/usr/Make.common "${pkgdir}/etc/libmesh"
  mv "${pkgdir}"/usr/Make.common "${pkgdir}/usr/share/doc/libmesh/"
  cp -a "${pkgdir}"/usr/examples "${pkgdir}/usr/share/doc/${realname}/"

  rm -r "${pkgdir}"/usr/contrib || echo "removed "
  rm "${pkgdir}"/usr/Make.common || echo "removed"
}

# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>

_name=alice-vision
#fragment="#commit=5bea89263bf5f3ed623b8e6e6a5f022a0ed9c1de"
_fragment="#branch=develop"
pkgname=${_name}
pkgver=1.0.r705.g8e907639
pkgrel=1
pkgdesc="Photogrammetric Computer Vision Framework which provides a 3D Reconstruction and Camera Tracking algorithms"
arch=('i686' 'x86_64')
url="http://alicevision.github.io/"
license=('MPL2' 'MIT')
groups=()
depends=('openblas-lapack' 'gflags' 'glfw-x11' 'alembic' 'boost-libs' 'openexr' 'openimageio' 'opengv-git' 'flann' 'coin-or-coinutils' 'coin-or-clp' 'coin-or-lemon' 'coin-or-osi' 'google-glog')
makedepends=('boost' 'eigen' 'ceres-solver' 'cuda' 'git' 'cmake' 'magma')
source=("${pkgname}::git+https://github.com/alicevision/AliceVision.git${_fragment}"
        "osi_clp::git+https://github.com/alicevision/osi_clp.git"
        "ute_lib::git+https://github.com/alicevision/uncertaintyTE.git"
        "geogram::git+https://github.com/alicevision/geogram.git"
        "sfmdata.patch"
        )
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'a96ca3a7c1bce6dee90bfc2c05f42103')

_CMAKE_FLAGS=(
              -DCMAKE_INSTALL_PREFIX=/usr
              -DCMAKE_INSTALL_LIBDIR=lib
              -DEIGEN_INCLUDE_DIR_HINTS=/usr/include/eigen3
              -DFLANN_INCLUDE_DIR_HINTS=/usr/include/flann
              -DCOINUTILS_INCLUDE_DIR_HINTS=/usr/include/coin
              -DLEMON_INCLUDE_DIR_HINTS=/usr/include/lemon
              -DCLP_INCLUDE_DIR_HINTS=/usr/include/coin
              -DOSI_INCLUDE_DIR_HINTS=/usr/include/coin
              -DCERES_DIR=/usr/include/ceres
              -DMAGMA_ROOT=/opt/magma
              -DCUDA_HOST_COMPILER=/opt/cuda/bin/gcc
             )


pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ${srcdir}/${pkgname}
  git submodule init
  git config submodule.src/dependencies/osi_clp.url ${srcdir}/osi_clp
  git submodule update
  git apply ${srcdir}/sfmdata.patch
}


build() {
  cd ${srcdir}

  msg2 "Build uncertaintyTE library"
  mkdir -p ute_build && cd ute_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DMAGMA_ROOT=/opt/magma ../ute_lib 
  make
  make DESTDIR="../ute_bin" install
  cd ..

  msg2 "Build geogram library"
  mkdir -p geogram_build && cd geogram_build
  cmake -DCMAKE_INSTALL_PREFIX=/ -DGEOGRAM_LIB_ONLY=ON -DGEOGRAM_USE_SYSTEM_GLFW3=ON -DCMAKE_BUILD_TYPE:STRING=Debug -DVORPALINE_PLATFORM:STRING=Linux64-gcc-dynamic ../geogram
  make 
  make DESTDIR="../geogram_bin" install
  cd ..

#  msg2 "Build Osi library"
#  mkdir -p osi_build && cd osi_build
#  cmake -DCMAKE_INSTALL_PREFIX=/ ../osi_clp
#  make
#  make DESTDIR="../osi_bin" install
#  cd ..

  msg2 "Build AliceVision library"
  mkdir -p build && cd build
  cmake ${_CMAKE_FLAGS[@]} -DUNCERTAINTYTE_DIR=${srcdir}/ute_bin -DGEOGRAM_INSTALL_PREFIX=${srcdir}/geogram_bin ../${pkgname}
  make
}


package() {
  msg2 "Install uncertaintyTE"
  cd ${srcdir}/ute_build
  make DESTDIR=${pkgdir}/usr install

  msg2 "Install geogram"
  cd ${srcdir}/geogram_build
  make DESTDIR=${pkgdir}/usr install

  cd ${srcdir}/build
  make DESTDIR=${pkgdir} install
  
  #fix conflict with openmvg
  rm ${pkgdir}/usr/lib/libvlsift.a
}
# vim:set ts=2 sw=2 et:

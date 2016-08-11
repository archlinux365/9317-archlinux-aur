# Maintainer: George Eleftheriou <eleftg>
# Contributor: Mathias Anselmann <mathias.anselmann@gmail.com>
# Contributor: Stéphane Gaudreault <stephane@archlinux.org>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Michele Mocciola <mickele>
# Contributor: Simon Zilliken <simon____AT____zilliken____DOT____name>

pkgname=paraview-manta
pkgver=5.1.2
pkgrel=1
pkgdesc='Parallel Visualization Application using VTK (with MantaView plugin, Qt4, legacy OpenGL backend)'
arch=('i686' 'x86_64')
url='http://www.paraview.org'
license=('custom')
depends=('qtwebkit' 'openmpi' 'python2' 'ffmpeg' 'boost' 'glew'
	 'expat' 'freetype2' 'libjpeg' 'libxml2' 'libtheora' 'libpng' 'libtiff' 'zlib' 'manta' 'ospray')
makedepends=('cmake' 'mesa' 'gcc-fortran')
optdepends=('python2-matplotlib: Needed to support equation rendering using MathText markup language'
	        'python2-numpy: Needed for using some filters such as "Python Calculator"')
conflicts=('paraview')
provides=('paraview')
# options=('!strip')
source=("http://paraview.org/files/v${pkgver:0:3}/ParaView-v${pkgver}.tar.gz"
	    'paraview_32bit.patch'
        'paraview-desktop.patch')
sha1sums=('449f104090b1fa84d1ee4b852dbfc6269cba9db4'
          'c25134330c582371e1009b51445cdb435144b53f'
          'd7da23daca34cd015294c4d2f702cdc4a81f0853')

prepare() {
  cd "${srcdir}/ParaView-v${pkgver}"
  patch -p1 -i ../paraview_32bit.patch
  
  patch -p1 -i ../paraview-desktop.patch

  rm -rf "${srcdir}/build"
  mkdir "${srcdir}/build"
  cd "${srcdir}/build"
}

build() {
  cd "${srcdir}/build"
  
  # flags to enable system libs
  # add PROTOBUF when http://www.vtk.org/Bug/view.php?id=13656 gets fixed
  local cmake_system_flags=""
  for lib in EXPAT FREETYPE GLEW JPEG LIBXML2 OGGTHEORA PNG TIFF ZLIB; do
    cmake_system_flags+="-DVTK_USE_SYSTEM_${lib}:BOOL=ON "
  done

   # flags to use python2 instead of python which is 3.x.x on archlinux
   local cmake_system_python_flags="-DPYTHON_EXECUTABLE:PATH=/usr/bin/python2 \
   	 -DPYTHON_INCLUDE_DIR:PATH=/usr/include/python2.7 -DPYTHON_LIBRARY:PATH=/usr/lib/libpython2.7.so"

   # flags to use ffmpeg2.8
   local ffmpeg_compat_flags="-DFFMPEG_INCLUDE_DIR:PATH=/usr/include/ \
   	 -DFFMPEG_avcodec_LIBRARY=/usr/lib/libavcodec.so \
   	 -DFFMPEG_avformat_LIBRARY=/usr/lib/libavformat.so \
   	 -DFFMPEG_avutil_LIBRARY=/usr/lib/libavutil.so \
   	 -DFFMPEG_swscale_LIBRARY=/usr/lib/libswscale.so"

   local manta_system_flags="-DPARAVIEW_BUILD_PLUGIN_MantaView:BOOL=ON \
     -DMANTA_BUILD:PATH=/usr/ \
     -DMANTA_SOURCE:PATH=/usr/include/"

   # enable when http://paraview.org/Bug/view.php?id=12852 gets fixed:
   #-DCMAKE_SKIP_RPATH:BOOL=YES \
   cmake \
   -DBUILD_SHARED_LIBS:BOOL=ON \
   -DBUILD_TESTING:BOOL=OFF \
   -DCMAKE_BUILD_TYPE=Release \
   -DCMAKE_C_COMPILER=mpicc \
   -DCMAKE_CXX_COMPILER=mpicxx \
   -DCMAKE_INSTALL_PREFIX:PATH=/usr \
   -DCMAKE_VERBOSE_MAKEFILE:BOOL=OFF \
   -DPARAVIEW_ENABLE_FFMPEG:BOOL=ON \
   -DPARAVIEW_ENABLE_PYTHON:BOOL=ON \
   -DPARAVIEW_USE_MPI:BOOL=ON \
   -DPARAVIEW_USE_VISITBRIDGE:BOOL=ON \
   -DPARAVIEW_QT_VERSION=4 \
   -DVTK_QT_VERSION=4 \
   -DQT_HELP_GENERATOR:FILEPATH=/usr/lib/qt4/bin/qhelpgenerator \
   -DQT_QMAKE_EXECUTABLE=qmake-qt4 \
   -DVISIT_BUILD_READER_CGNS:BOOL=OFF \
   -DVTK_RENDERING_BACKEND:STRING=OpenGL \
   -DVTK_USE_SYSTEM_HDF5:BOOL=OFF \
   -DPARAVIEW_INSTALL_DEVELOPMENT_FILES:BOOL=ON \
   -DPARAVIEW_USE_OSPRAY=ON \
   -DOSPRAY_INSTALL_DIR:PATH=/usr \
   ${cmake_system_flags} \
   ${cmake_system_python_flags} \
   ${ffmpeg_compat_flags} \
   ${manta_system_flags} \
   ../ParaView-v${pkgver}

   make
}

package() {
  cd "${srcdir}/build"

  make DESTDIR="${pkgdir}" install

  #Install license
  install -Dm644 "${srcdir}/ParaView-v${pkgver}/License_v1.2.txt" "${pkgdir}/usr/share/licenses/paraview/LICENSE"
}

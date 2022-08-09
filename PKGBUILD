# Maintainer: domanov <domanov at gmail dot com>
# Contributor: Bruno Pagani <archange at archlinux dot org>
# Contributor: Evgeniy Alekseev <arcanis at archlinux dot org>
# Contributor: Michael Migliore <mcmigliore+aur@gmail.com>
# Contributor: Ray Rashif <schiv at archlinux dot org>
# Contributor: Andrzej Giniewicz <gginiu at gmail dot com>
# Contributor: Thomas Dziedzic <gostrc at gmail>

pkgname=vtk-nowraps
pkgver=9.1.0
pkgrel=1
pkgdesc="Software system for 3D computer graphics, image processing, and visualization. Stripped version with no python and java wrappers"
arch=(x86_64)
url="https://www.vtk.org/"
license=(BSD)
conflicts=('vtk')
provides=('vtk=9.1.0')
depends=(gcc-libs double-conversion pugixml tbb)
makedepends=(adios2 cmake boost doxygen ffmpeg gdal git gnuplot java-environment=11
             liblas libxt mariadb-libs openimagedenoise openmp openmpi openvdb
             openvr ospray pdal postgresql-libs python-matplotlib qt5-base
             qt5-tools qt5-webkit qt5-x11extras tk unixodbc wget
             cgns cli11 eigen expat fmt freetype2 gl2ps glew hdf5 libjpeg
             jsoncpp libjsoncpp.so libharu proj libxml2 lz4 xz python-mpi4py
             netcdf libogg libpng rapidjson sqlite libtheora libtiff utf8cpp zfp zlib)
# pegtl: https://gitlab.kitware.com/vtk/vtk/-/issues/18151
# exprtk, ioss: not packaged
optdepends=('gnuplot: plotting tools'
            'graphviz: drawing tools'
            'openmpi: OpenMPI support'
            'qt5-x11extras'
            'qt5-webkit: WebKit support'
            'tk: tcl bindings'
            adios2
            cgns
            ffmpeg
            fmt
            gdal
            gl2ps
            glew
            hdf5
            jsoncpp
            libarchive
            libharu
            liblas
            lz4
            mariadb-libs
            netcdf
            openimagedenoise
            openvdb
            openvr
            ospray
            pdal
            postgresql-libs
            proj
            sqlite
            unixodbc)
source=(${url}/files/release/${pkgver%.*}/VTK-${pkgver}.tar.gz
        vtkm-tbb-2021.patch::https://gitlab.kitware.com/vtk/vtk-m/-/merge_requests/2509.patch
        vtk-ffmpeg5.patch::https://gitlab.kitware.com/vtk/vtk/-/merge_requests/8863.patch
        # vtk-python3.10.patch::https://gitlab.kitware.com/vtk/vtk/-/merge_requests/8738.patch
        vtk-exodus-netcdf4.9-compat.patch::https://github.com/sandialabs/seacas/commit/5e1b19181110c52b76d13e3f60da2c8cf678c941.patch)
options=(staticlibs)
sha256sums=('8fed42f4f8f1eb8083107b68eaa9ad71da07110161a3116ad807f43e5ca5ce96'
            '37cff664c4eaacf44ecb995e62e9e54e54880bae0857d598c74660a2159ccb2e'
            '955ef22d2541beb9935557ef09a802b6504855a350f27ff056734679da8f0281'
            # 'dbc9a67caf548cf5afd571018d91aadcfcf78ddf8c66ac75b0772935e26ad29f'
            '1272fafccd3d9677f3fd9cc0a70e47a21f6ec86379765e25c6bccd9053875259')

prepare() {
  cd VTK-${pkgver}
  # We have a patched libharu
  sed -i "s|2.4.0|2.3.0|" ThirdParty/libharu/CMakeLists.txt
  # We have a patched fmt
  sed -i "s|8.1.0|8.0.1|" ThirdParty/fmt/CMakeLists.txt
  # Fix build with TBB 2021
  patch -p1 -d ThirdParty/vtkm/vtkvtkm/vtk-m < ../vtkm-tbb-2021.patch
  # Fix build with FFmpeg 5
  patch -p1 < ../vtk-ffmpeg5.patch
  # Fix Python 3.10 compatibility https://gitlab.kitware.com/vtk/vtk/-/issues/18518
  # patch -p1 < ../vtk-python3.10.patch || true
  # Fix build with netCDF 4.9
  sed -i 's|1999-2020|1999-2021|' ThirdParty/exodusII/vtkexodusII/src/ex_utils.c
  patch -p5 -d ThirdParty/exodusII/vtkexodusII/ < ../vtk-exodus-netcdf4.9-compat.patch
}

build() {
  # To help cmake find java
  export JAVA_HOME=/usr/lib/jvm/default
  # To set tcl lib path
  local _tkver=$(echo 'puts $tcl_version' | tclsh)
  cmake -B build -S VTK-${pkgver} \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS="$CXXFLAGS -ffat-lto-objects" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LICENSEDIR=share/licenses/vtk \
    -DCMAKE_SKIP_RPATH=OFF \
    -DCMAKE_SKIP_INSTALL_RPATH=ON \
    -DBUILD_SHARED_LIBS=ON \
    -DVTK_BUILD_ALL_MODULES=OFF \
    -DVTK_INSTALL_TCL_DIR=/usr/lib/tcl${_tkver}/vtk/ \
    -DVTK_LEGACY_REMOVE=ON \
    -DVTK_SMP_ENABLE_OPENMP=ON \
    -DVTK_SMP_IMPLEMENTATION_TYPE=TBB \
    -DVTK_PYTHON_VERSION=3 \
    -DVTK_USE_MPI=ON \
    -DVTK_USE_TK=ON \
    -DVTK_VERSIONED_INSTALL=OFF \
    -DVTK_WRAP_JAVA=OFF \
    -DVTK_WRAP_PYTHON=OFF \
    -DVTKOSPRAY_ENABLE_DENOISER=ON \
    -DVTKm_ENABLE_HDF5_IO=OFF \
    -DVTKm_ENABLE_MPI=ON \
    -DVTKm_ENABLE_OPENMP=ON \
    -DVTK_USE_EXTERNAL=ON \
    -DVTK_MODULE_USE_EXTERNAL_VTK_exprtk=OFF \
    -DVTK_MODULE_USE_EXTERNAL_VTK_ioss=OFF \
    -DVTK_MODULE_USE_EXTERNAL_VTK_pegtl=OFF \
    -DVTK_MODULE_ENABLE_VTK_DomainsMicroscopy=NO \
    -DVTK_MODULE_ENABLE_VTK_FiltersOpenTURNS=NO \
    -Wno-dev
#    -DFIDES_USE_EXTERNAL_RAPIDJSON=ON \
  make -C build
}

package() {
  make -C build DESTDIR="${pkgdir}" install

  # Move the vtk.jar to the arch-specific location…
  # install -dv "${pkgdir}"/usr/share/java/vtk
  # mv -v "${pkgdir}"/usr/lib/java/vtk.jar "${pkgdir}"/usr/share/java/vtk
  # # …and the libs to the proper place
  # mv "${pkgdir}"/usr/lib/java/vtk-Linux-${CARCH}/*.so "${pkgdir}"/usr/lib/
  # rmdir "${pkgdir}"/usr/lib/java/{vtk-Linux-${CARCH}/,}

  # # byte-compile python modules since the CMake build does not do it
  # local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  # python -m compileall -o 0 -o 1 -o 2 --hardlink-dupes -s "${pkgdir}" "${pkgdir}"${site_packages}

  # Remove third party CMake patching for older versions than ours
  rm -rv "${pkgdir}"/usr/lib/cmake/vtk/patches/3.{1{3,6,8,9},20}
  # … as well as duplicate copies
  #rm -rv "${pkgdir}"/usr/lib/cmake/vtk/vtkm/{Find*.cmake,cmake/{Find*.cmake,3.15}}
}

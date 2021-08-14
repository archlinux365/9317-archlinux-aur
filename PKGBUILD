# Maintainer: Andrew Crerar <crerar@archlinux.org>
# Contributor: Valentin Churavy <v.churavy@gmail.com>
# Contributor: Romain Reignier <rom.reignier@gmail.com>
# Contributor: Fabien Dubosson <fabien.dubosson@gmail.com>
# Contributor: David Manouchehri <david@davidmanouchehri.com>
# Contributor: CHEN Xing <cxcxcxcx@gmail.com>
# Contributor: Martin Imobersteg <martin.imobersteg@gmail.com>
# Contributor: Artyom Smirnov <smirnoffjr@gmail.com>
# Also largely inspired by `opencv` in extra, so including contributors too:
# Contributor: Ray Rashif <schiv@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

_name=opencv
pkgname="$_name-git"
pkgver=4.5.3.r118.g0c01cf7c85
pkgrel=1
pkgdesc="Open Source Computer Vision Library"
url="https://opencv.org/"
license=('BSD')
arch=('i686' 'x86_64')
depends=('intel-tbb' 'openexr' 'gst-plugins-base' 'libdc1394' 'cblas' 'lapack' 'libgphoto2' 'jasper' 'ffmpeg')
makedepends=('git' 'cmake' 'python-numpy' 'python-setuptools' 'mesa' 'eigen' 'hdf5' 'lapacke' 'gtk3' 'vtk' 'glew' 'ant' 'java-environment' 'qt5-base')
optdepends=('opencv-samples: samples'
            'gtk3: for the HighGUI module and Python bindings'
            'vtk: for the viz module'
            'hdf5: for the HDF5 module and the Python bindings'
            'opencl-icd-loader: For coding with OpenCL'
            'python-numpy: Python bindings'
            'java-runtime: Java interface')
conflicts=('opencv')
provides=("$_name=$pkgver")
source=('git+https://github.com/opencv/opencv.git'
        'git+https://github.com/opencv/opencv_contrib.git'
        'opencv-lapack-3.10.patch')
sha512sums=('SKIP'
            'SKIP'
            'a13dfa91ee423d2ee5f6344ccb8394f96195538b3d668f97c5fdc3ccd84d5ecd54f80bc6fa45685f319ab0d0c9bb5ad533c0f2d1a20d21f3a5afdd1c0239bfa1')

_cmakeopts=('-DWITH_OPENCL=ON'
            '-DWITH_OPENGL=ON'
            '-DWITH_TBB=ON'
            '-DOpenGL_GL_PREFERENCE=GLVND'
            '-DBUILD_WITH_DEBUG_INFO=OFF'
            '-DBUILD_TESTS=OFF'
            '-DBUILD_PERF_TESTS=OFF'
            '-DBUILD_EXAMPLES=ON'
            '-DINSTALL_C_EXAMPLES=ON'
            '-DINSTALL_PYTHON_EXAMPLES=ON'
            '-DCMAKE_INSTALL_PREFIX=/usr'
            '-DCMAKE_INSTALL_LIBDIR=lib'
            '-DCUDA_NVCC_FLAGS="--expt-relaxed-constexpr"'
            '-DOPENCV_SKIP_PYTHON_LOADER=ON')

# SSE only available from Pentium 3 onwards (i686 is way older)
[[ "$CARCH" = 'i686' ]] && _cmakeopts+=('-DCPU_BASELINE_DISABLE=SSE2')
[[ "$CARCH" = 'x86_64' ]] && _cmakeopts+=('-DCPU_BASELINE_DISABLE=SSE3 -DCPU_BASELINE_REQUIRE=SSE2')

pkgver() {
    cd "$srcdir/$_name"
    git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p build
  cd "$srcdir"
  patch -d "$_name" -p1 < opencv-lapack-3.10.patch # Fix build with LAPACK 3.10
}

build() {
    cd build
    export JAVA_HOME="/usr/lib/jvm/default"
    # cmake's FindLAPACK doesn't add cblas to LAPACK_LIBRARIES, so we need to specify them manually
    _pythonpath=`python -c "from sysconfig import get_path; print(get_path('platlib'))"`

    cmake "${_cmakeopts[@]}" \
          -DOPENCV_EXTRA_MODULES_PATH="$srcdir"/opencv_contrib/modules \
          -DLAPACK_LIBRARIES="/usr/lib/liblapack.so;/usr/lib/libblas.so;/usr/lib/libcblas.so" \
          -DLAPACK_CBLAS_H="/usr/include/cblas.h" \
          -DLAPACK_LAPACKE_H="/usr/include/lapacke.h" \
          -DOPENCV_PYTHON3_INSTALL_PATH=$_pythonpath \
          -DOPENCV_GENERATE_PKGCONFIG=ON \
          -DOPENCV_ENABLE_NOFREE=ON \
          -DOPENCV_JNI_INSTALL_PATH=lib \
          -DOPENCV_GENERATE_SETUPVARS=OFF \
          ../"$_name"

    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install

    # install LICENSE file
    install -Dm644 "$srcdir"/"$_name"/LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"

    cd "$pkgdir"/usr/share

    # install missing headers https://github.com/opencv/opencv/issues/13201
    for _module in imgcodecs videoio photo; do
      cp -r "$srcdir"/"$_name"/modules/"$_module"/include/opencv2/"$_module"/legacy \
        "$pkgdir"/usr/include/opencv4/opencv2/"$_module"
    done
}

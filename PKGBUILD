# Maintainer: Andrew Anderson <aanderso at t c d dot ie>
pkgname=trinnity-caffe-git
_srcname=trinnity-caffe
pkgver=1.0
pkgrel=0
pkgdesc="Caffe 1.0 with triNNity extensions"
arch=('x86_64')
url="https://bitbucket.org/STG-TCD/trinnity-caffe"
license=('BSD')
depends=(
        'boost-libs' 'protobuf' 'google-glog' 'gflags' 'hdf5'
        'python' 'boost' 'cython' 'python-numpy' 'python-scipy'
        'python-matplotlib' 'ipython' 'python-networkx' 'python-nose'
        'python-pandas' 'python-dateutil' 'python-protobuf' 'python-gflags'
        'python-yaml' 'python-pillow' 'python-six'
        'openblas-lapack' 'opencv>=4.0.0'
)
makedepends=('cmake')
provides=('trinnity-caffe')
conflicts=()
source=("${_srcname}"::"git+https://bitbucket.org/STG-TCD/trinnity-caffe.git"
        'dependencies.patch')
sha256sums=('SKIP'
            '7ddb59109d7df3889641eaa4769e6b9e82f96f623b200ecfd8ade7ecfe04f95f')

prepare() {
    cd "${_srcname}"
    git checkout master
    cd -

    # This patch makes cmake find libboost_python3 (it normally only looks for libboost_python_py3 etc.)
    patch "${_srcname}"/cmake/Dependencies.cmake < dependencies.patch

    mkdir -p build
    cd build
    CMAKE_PARALLEL_LEVEL=`grep processor /proc/cpuinfo | wc -l` cmake \
    -DCPU_ONLY=ON \
    -DUSE_INDEX_64=OFF \
    -DUSE_HALF=OFF \
    -DUSE_SINGLE=ON \
    -DUSE_DOUBLE=OFF \
    -DUSE_INT_QUANT_8=OFF \
    -DUSE_INT_QUANT_16=OFF \
    -DUSE_INT_QUANT_32=OFF \
    -DUSE_INT_QUANT_64=OFF \
    -DUSE_CUDA=OFF \
    -DUSE_OPENCL=OFF \
    -DUSE_HSA=OFF \
    -DUSE_HIP=OFF \
    -DFORCE_COMPILE_CU_AS_CPP=OFF \
    -DDISABLE_DEVICE_HOST_UNIFIED_MEMORY=OFF \
    -DUSE_LIBDNN=OFF \
    -DUSE_CLBLAS=OFF \
    -DUSE_CLBLAST=OFF \
    -DUSE_ISAAC=OFF \
    -DUSE_CUDNN=OFF \
    -DUSE_NCCL=OFF \
    -DBUILD_SHARED_LIBS=OFF \
    -DBUILD_python=ON \
    -DBUILD_matlab=OFF \
    -DBUILD_docs=OFF \
    -DBUILD_python_layer=ON \
    -DUSE_OPENCV=ON \
    -DUSE_LEVELDB=OFF \
    -DUSE_LMDB=OFF \
    -DUSE_HDF5=ON \
    -DALLOW_LMDB_NOLOCK=OFF \
    -DUSE_OPENMP=OFF \
    -DUSE_FFT=OFF \
    -DUSE_SQLITE=OFF \
    -DUSE_GEMMLOWP=OFF \
    -DUSE_NATIVE_MARCH=ON \
    -DUSE_ARM_CROSS_COMPILE=OFF \
    -DBLAS=Open \
    -D python_version=3 \
    -DCMAKE_INSTALL_PREFIX:PATH=${pkgdir}/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    ../"${_srcname}"
}

build() {
    cd build
    make -j`grep processor /proc/cpuinfo | wc -l` clean caffe pycaffe
}

package() {
    cd build
    make install
    install -m644 ../LICENSE ${pkgdir}/usr/share/Caffe
}

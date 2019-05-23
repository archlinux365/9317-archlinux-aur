# Maintainer: Martin Drawitsch <martin dot drawitsch at gmail dot com>
pkgname=('ezc3d')
pkgver='0.3.6'
pkgrel=2
pkgdesc="An easy to use reader, modifier and writer for C3D format files. Includes Python bindings"
url="https://github.com/pyomeca/ezc3d"
depends=('python')
makedepends=('python' 'swig' 'cmake')  # TODO: Not sure if there is anything missing
license=('MIT')
arch=('x86_64')
source=("https://github.com/pyomeca/ezc3d/archive/Release_${pkgver}.tar.gz")
sha256sums=('08132badd69e750390eade0b85df900e705b2550af1bc4c7a5fbcc4d765a66bf')

build() {
    cd ${srcdir}/ezc3d-Release_${pkgver}
    mkdir -p build
    cd build
    cmake .. \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_EXAMPLE=OFF \
        -DBINDER_MATLAB=OFF \
        -DPython3_EXECUTABLE=/usr/bin/python \
        -DBINDER_PYTHON3=ON
    make
}

package() {
    cd ${srcdir}/ezc3d-Release_${pkgver}/build
    make DESTDIR=${pkgdir} install
    # Fix the _ezc3d.so path. How did it end up there?
    PY=$(readlink $(which python3))
    mv ${pkgdir}/usr/lib/${PY}/site-packages/_ezc3d.so \
       ${pkgdir}/usr/lib/${PY}/site-packages/ezc3d/ 
}

pkgname=openmm
pkgver=7.4.2
pkgrel=1
pkgdesc="Toolkit for molecular simulation using high performance GPU code"
arch=('x86_64')
url="http://openmm.org/"
license=('MIT' 'LGPL')
depends=('fftw')
optdepends=('cuda: prrovides cuda support')
makedepends=('cmake' 'swig' 'doxygen' 'cython')
source=("https://github.com/pandegroup/openmm/archive/${pkgver}.tar.gz")
sha256sums=('2e121ad5cfcc4840861032bb1b11d4d0aea2d3ca3c59baaed73b8b0b4fd069cc')

export CC=gcc-9
export CXX=g++-9
export FC=gfortran-9

build() {
  cd "${srcdir}"
  mkdir -p build
  cd build
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DOPENMM_GENERATE_API_DOCS=ON \
    ../openmm-${pkgver}
  make
}
check () {
  msg2 "Testing openmm"
  cd "${srcdir}"/build
#  make test
}


package() {
  cd "${srcdir}"/build
  msg2 "Installing openmm"
  make DESTDIR="${pkgdir}" install
  install -d "${pkgdir}"/usr/share/licenses/${pkgname}

  msg2 "Installing openmm python bindings"
  make DESTDIR="${pkgdir}" PythonInstall
  mv "${pkgdir}"/usr/licenses/*.txt "${pkgdir}"/usr/share/licenses/${pkgname}
  rm -rf "${pkgdir}"/usr/{bin,docs,examples,licenses}
}

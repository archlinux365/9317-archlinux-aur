pkgname=python-assimulo
pkgver=3.3
pkgrel=1
pkgdesc="A package for solving ordinary differential equations and differential algebraic equations"
url="http://www.jmodelica.org/assimulo"
arch=('x86_64')
license=('LGPL')
makedepends=('python-setuptools' 'cython' 'gcc-fortran')
depends=('python-scipy' 'python-matplotlib' 'lapack' 'sundials')
source=("https://github.com/modelon-community/Assimulo/archive/Assimulo-${pkgver}.tar.gz")
sha256sums=('871741bf8314deb6860570011f1d095f7fa56bcad9bc60d4860f1e951b57f179')

prepare() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver

  # use shared lib
  sed -i "s|BLASname_t+'.a'|BLASname_t+'.so'|g" setup.py
}

build() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver
}

package() {
  cd "${srcdir}"/Assimulo-Assimulo-$pkgver
  python setup.py install --root=${pkgdir} --optimize=1 --extra-fortran-link-flags="-shared" --sundials-home=/usr --blas-home=/usr/lib --lapack-home=/usr --extra-fortran-compile-flags="-fallow-argument-mismatch" --extra-c-flags="-DNPY_NO_DEPRECATED_API=NPY_1_7_API_VERSION"
}


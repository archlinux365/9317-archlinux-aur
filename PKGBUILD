# Maintainer: sygnmdev <sygnmdev at sygnm dot org>
pkgname=sygnm-git
pkgver=1.0.0alpha1
pkgrel=1
pkgdesc="Computer algebra system (currently alpha, install only if you know what you are doing)"
arch=('i686' 'x86_64')
url="https://sygnm.org/"
license=('AGPL3')
depends=('flint' 'arb' 'boost-libs' 'icu' 'gmp' 'qt5-base' 'readline' 'python' 'sqlite')
makedepends=('boost' 'cmake' 'swig' 'python')
source=("sygnm-git::git+https://git.0x64.org/sygnmdev/sygnm.git")
options=(debug !strip)
conflicts=('sygnm')

md5sums=('SKIP')

build() {
  cd "${srcdir}/sygnm-git"
  cmake . -DCMAKE_BUILD_TYPE=Debug -DSYGNM_BUILD_ALL=On -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
 cd "${srcdir}/sygnm-git"
 make DESTDIR="$pkgdir/" install
 cd sygnm-jupyter
 python setup.py install --root="$pkgdir/" --optimize=1
 cd ../sygnm/python
 python setup.py install --root="$pkgdir/" --optimize=1
}

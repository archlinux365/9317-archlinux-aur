# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname=belcard-git
_pkgname=belcard
pkgver=4.3.0.alpha.r1.g0cd3b7c
pkgrel=1
pkgdesc="A library for working with vCards"
arch=('x86_64')
url="http://www.linphone.org/"
license=('GPL')
conflicts=('belcard')
provides=('belcard')
depends=('belr-git')
makedepends=('cmake' 'git')
source=("git+https://github.com/BelledonneCommunications/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}"
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_LIBDIR="/usr/lib" \
      -DCMAKE_INSTALL_PREFIX="/usr" \
      -DENABLE_STATIC=NO "../$_pkgname"
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}" install
}

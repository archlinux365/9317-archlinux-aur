# Maintainer: Philipp Joram <mail AT phijor DOT me>

pkgname=cutentr-git
pkgver=0.1.1.r8.gb73f714
pkgrel=1
pkgdesc="POC Qt 3DS streaming client for NTR CFW"
arch=('x86_64')
url="https://gitlab.com/BoltsJ/cuteNTR"
license=('GPL3')
depends=('qt5-base')
makedepends=('git' 'make')
source=("${pkgname}::git+https://gitlab.com/BoltsJ/cuteNTR.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --always --long | sed 's/^v//; s/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
  cd "${srcdir}/${pkgname}"
  qmake PREFIX=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  make INSTALL_ROOT="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:

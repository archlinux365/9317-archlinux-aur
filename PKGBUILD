# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>

_pkgname='KDiskMark'
pkgname="${_pkgname,,}-git"
pkgver=1.6.2.r16.g0efbcec
pkgrel=1
pkgdesc='Simple disk benchmark tool'
arch=('x86_64')
url='https://github.com/JonMagon/KDiskMark'
license=('GPL3')
depends=('fio' 'hicolor-icon-theme' 'qt5-base')
makedepends=('extra-cmake-modules' 'git' 'qt5-tools')
provides=("${_pkgname,,}")
source=("${_pkgname}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  git -C "${_pkgname}" describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  export CFLAGS+=" ${CPPFLAGS}"
  export CXXFLAGS+=" ${CPPFLAGS}"
  cmake -B build -S "${_pkgname}" \
    -DCMAKE_BUILD_TYPE='None' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -Wno-dev
  make -C build
}

package() {
  make DESTDIR="${pkgdir}" PREFIX="/usr" -C build install
  install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname,,}" "${_pkgname}/README.md"
}

# vim: ts=2 sw=2 et:

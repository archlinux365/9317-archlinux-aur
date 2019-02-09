# Maintainer:  Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=bifrost
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=v2.2.2.g3082823
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('x86_64')
url="https://github.com/dubhater/vapoursynth-${_plug}"
license=('GPL')
depends=('vapoursynth')
makedepends=('git')
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/dubhater/vapoursynth-${_plug}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  cd "${_plug}"
  ./autogen.sh
}

build() {
  cd "${_plug}"
  ./configure \
    --prefix=/usr \
    --libdir=/usr/lib/vapoursynth

  make
}

package(){
  cd "${_plug}"
  make DESTDIR="${pkgdir}" install

  install -Dm644 readme.rst "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.rst"
}

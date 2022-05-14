# Maintainer:  twa022 <twa022 at gmail dot com>

_pkgname=RmlUi
pkgname=rmlui
pkgver=4.4
pkgrel=1
pkgdesc="The HTML/CSS User Interface library evolved"
arch=('i686' 'x86_64' 'aarch64' 'armv7h')
url="https://mikke89.github.io/RmlUiDoc/"
license=('MIT')
depends=('boost-libs' 'freetype2' 'libgl' 'glu')
makedepends=('cmake' 'mesa' 'boost')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/mikke89/RmlUi/archive/${pkgver}.tar.gz")
sha256sums=('9e45176e47154616253c4e5c78368f4af4b4379278b73066c3fb5a338f9c655a')

prepare() {
  cd "${_pkgname}-${pkgver}"
  [ -d build ] && rm -fr build
  mkdir build
}
  
build() {
  cd "${_pkgname}-${pkgver}"/build
  cmake -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_INSTALL_LIBDIR=/usr/lib -DBUILD_SAMPLES=OFF ..
  make
}

package() {
  cd "${_pkgname}-${pkgver}"
  make -C build install DESTDIR="${pkgdir}"

  # license
  install -Dm644 LICENSE.txt "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}

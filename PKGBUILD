# Maintainer: Fredy García <frealgagu at gmail dot com>
# Contributor: grimi <grimi at poczta dot fm>
# Contributor: Thomas Nordenmark <t.nordenmark@gmail.com>
# Contributor: Travis Nickles <nickles.travis@gmail.com>

pkgname=antimicrox
pkgver=3.1.2
pkgrel=1
pkgdesc="Graphical program used to map keyboard buttons and mouse controls to a gamepad"
arch=("i686" "x86_64")
url="https://github.com/AntiMicroX/${pkgname/x}X"
license=("GPL3")
depends=("desktop-file-utils" "hicolor-icon-theme" "libxtst" "qt5-base" "qt5-x11extras" "sdl2")
makedepends=("cmake" "extra-cmake-modules" "gettext" "itstool" "qt5-tools")
provides=("${pkgname/x}")
conflicts=("${pkgname/x}")
replaces=("${pkgname/x}")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/AntiMicroX/${pkgname/x/X}/archive/${pkgver}.tar.gz")
sha256sums=("18539897caed5021003f590cb4baeacf039897c6ff1542697901f573d5a758dc")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  cmake . \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib \
    -DUSE_SDL_2=ON \
    -DAPPDATA=ON \
    -DWITH_UINPUT=ON \
    -DWITH_X11=ON \
    -DWITH_XTEST=ON
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}


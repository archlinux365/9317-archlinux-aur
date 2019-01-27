# Maintainer: Chris Rizzitello <sithlord48@gmail.com>
pkgname=atcore-git
conflicts=('atcore')
provides=('atcore')
pkgver=1.0.70.r817.e710593
pkgrel=1
pkgdesc="KDE 3D Printing libary"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://www.kde.org/"
license=('LGPL2')
makedepends=('git' 'cmake' 'extra-cmake-modules' 'doxygen')
depends=('qt5-base' 'qt5-serialport' 'qt5-charts' ) #Qt5)
source=('git://anongit.kde.org/atcore.git')
md5sums=(SKIP)

pkgver() {
   cd "atcore"
   version="1.0.70"
   printf "%s.r%s.%s" "$version" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "atcore"
  cmake -DCMAKE_INSTALL_PREFIX=$(qtpaths --install-prefix) -DCMAKE_INSTALL_LIBDIR=lib -DCMAKE_BUILD_TYPE=Release -DBUILD_GUI=ON -DBUILD_DOCS=ON CMakeLists.txt 
  make
}
package(){
  cd "atcore"
  make DESTDIR="$pkgdir/" install 
}

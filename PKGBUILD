# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: David Edmundson <david@davidedmundson.co.uk>

_pkgname=xembed-sni-proxy
pkgname=${_pkgname}-git
pkgver=r100.392f323
pkgrel=1
pkgdesc="Convert XEmbed system tray icons to SNI icons"
arch=('i686' 'x86_64')
url="https://github.com/davidedmundson/${_pkgname}"
license=('GPL2')
depends=(qt5-{base,x11extras} kwindowsystem)
makedepends=('extra-cmake-modules' 'git')
conflicts=("${_pkgname}")
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
    cd ${_pkgname}
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    if [ -d build ] ; then
        rm build -rf
    fi
}

build() {
    mkdir build && cd build
    cmake ../${_pkgname} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DLIB_INSTALL_DIR=lib \
        -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
        -DSYSCONF_INSTALL_DIR=/etc
    make  
}

package() {
  cd build
  make DESTDIR=${pkgdir} install
}

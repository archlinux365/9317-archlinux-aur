# Maintainer: Bruno Pagani <archange@archlinux.org>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgname=ktextwidgets
pkgname=${_pkgname}-light
pkgver=5.34.0
pkgrel=1
pkgdesc="Advanced text editing widgets, light version without Text-to-Speech"
arch=('i686' 'x86_64')
url="https://community.kde.org/Frameworks"
license=('LGPL')
depends=('kcompletion' 'kservice' 'kiconthemes' 'sonnet')
makedepends=('extra-cmake-modules' 'python')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
groups=('kf5')
source=("https://download.kde.org/stable/frameworks/${pkgver%.*}/${_pkgname}-${pkgver}.tar.xz"{,.sig})
sha256sums=('fc15f146da7f7fb1b758cb8213e62d609e53ad881493b05fe17c8d33161931c3'
            'SKIP')
validpgpkeys=('53E6B47B45CEA3E0D5B7457758D0EE648A48B3BB') # David Faure <faure@kde.org>

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../${_pkgname}-${pkgver} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DKDE_INSTALL_LIBDIR=lib \
        -DBUILD_TESTING=OFF \
        -DQt5TextToSpeech_FOUND=OFF
    make
}

package() {
    cd build
    make DESTDIR="${pkgdir}" install
}

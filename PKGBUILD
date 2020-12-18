pkgname=replay-sorcery
pkgver=0.4.0
pkgrel=1
pkgdesc='An open-source, instant-replay screen recorder for Linux'
arch=(i686 x86_64)
license=(GPL3)
depends=(gcc-libs libxext)
makedepends=(cmake git nasm)
url='https://github.com/matanui159/ReplaySorcery'
source=("${pkgname}"::git+"${url}".git#tag="${pkgver}"
        git+https://github.com/ianlancetaylor/libbacktrace.git)
sha256sums=('SKIP'
            'SKIP')

prepare() {
   cd ${pkgname}
   git submodule init
   git config submodule."dep/libbacktrace".url ../libbacktrace
   git submodule update
}

build() {
   cmake -B build -S "${pkgname}" \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr
   cmake --build build
}

package() {
   DESTDIR="${pkgdir}" cmake --install build
}

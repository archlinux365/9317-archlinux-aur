# Maintainer: Seth Buccella <sethfb at gmail dot com>
# Contributor: Alex Sarum <rum.274.4 at gmail dot com>

pkgname=imhex-git
pkgver=1.14.0.r54.g0e40b8a8
pkgrel=1
pkgdesc="A Hex Editor for Reverse Engineers, Programmers and people that value their eye sight when working at 3 AM"
arch=('x86_64')
url="https://github.com/WerWolv/ImHex"
license=('GPL2')
depends=('glfw' 'glm' 'capstone' 'llvm' 'nlohmann-json' 'python' 'file' 'gtk3' 'mbedtls' 'libssh2')
makedepends=('git' 'cmake' 'gcc' 'lld')
optdepends=()
provides=('imhex')
conflicts=('imhex')
source=("$pkgname::git+https://github.com/WerWolv/ImHex.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$pkgname"
  git submodule update --init --recursive
  cmake -B build -DCMAKE_INSTALL_PREFIX=/usr
  make -j -C build
}

package() {
  cd "$pkgname"
  install -DTm755 build/lib/libimhex/libimhex.so "${pkgdir}/usr/lib/libimhex.so"
  install -Dm755 build/plugins/builtin/builtin.hexplug "${pkgdir}/usr/bin/plugins/builtin.hexplug"
  install -DTm755 build/imhex "${pkgdir}/usr/bin/imhex"
}

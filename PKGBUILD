# Maintainer: Fangrui Song <i at maskray.me>

pkgname=ccls-git
_pkgname=ccls
pkgver=20190310
pkgrel=1
pkgdesc='C/C++ language server supporting cross references, hierarchies, completion and semantic highlighting'
arch=('x86_64')
url='https://github.com/MaskRay/ccls'
license=('Apache')
depends=('clang' 'llvm-libs' 'rapidjson')
makedepends=("cmake" "git" "llvm")
source=('git+https://github.com/MaskRay/ccls.git')
md5sums=('SKIP')

pkgver() {
  cd $_pkgname
  TZ=UTC date -d @$(git log -1 --format=%ct) +%Y%m%d
}

prepare() {
  cd $_pkgname
}

build() {
  cd $_pkgname
  cmake -H. -Bbuild -DCMAKE_INSTALL_PREFIX=/usr
  cmake --build build
}

package() {
  cd $_pkgname/build
  make DESTDIR="$pkgdir" install
}

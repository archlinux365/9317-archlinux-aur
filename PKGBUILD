# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=qt5-3d-git
pkgver=5.13.0_rc3.r132.ga5c148c89
pkgrel=1
pkgdesc="Qt5 3D module"
arch=('i686' 'x86_64')
url="https://www.qt.io/"
license=('FDL' 'GPL' 'LGPL' 'custom')
depends=('qt5-declarative' 'assimp')
makedepends=('git')
provides=('qt5-3d')
conflicts=('qt5-3d')
source=("git+https://code.qt.io/qt/qt3d.git#branch=dev")
sha256sums=('SKIP')


prepare() {
  cd "$srcdir"

  mkdir -p "_build"
}

pkgver() {
  cd "qt3d"

  _tag=$(git tag -l --sort -v:refname | sed -n '1,1{s/v//p}')
  _rev=$(git rev-list --count v$_tag..HEAD)
  _hash=$(git rev-parse --short HEAD)
  printf "%s.r%s.g%s" "$_tag" "$_rev" "$_hash" | sed 's/-/_/g'
}

build() {
  cd "_build"

  qmake ../qt3d
  make
}

package() {
  cd "_build"

  make INSTALL_ROOT="$pkgdir" install

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  cd "$srcdir/qt3d"
  install -Dm644 "LICENSE.GPL3-EXCEPT" "$pkgdir/usr/share/licenses/qt5-3d/LICENSE.GPL3-EXCEPT"
}

# Maintainer: Grey Christoforo <first name at last name dot net>

pkgname=kicad-footprints-git
_pkgname=kicad-footprints
pkgver=r2019.01.12.cbc9f8c
pkgrel=1
pkgdesc="KiCad footprint libraries from the official git repo"
arch=('any')
url="https://github.com/KiCad/kicad-footprints"
license=('GPL')
makedepends=('cmake' 'git')
options=('!strip')
conflicts=('kicad-library-bzr' 'kicad-library-git' 'kicad-library-3d' 'kicad-library' 'kicad-footprints')
provides=('kicad-footprints')
source=()
md5sums=()

prepare(){
  if [ -d ${_pkgname} ]; then
    cd ${_pkgname}
    git fetch --depth 1
    git checkout master
  else
    git clone --depth 1 https://github.com/KiCad/kicad-footprints.git
  fi
}

pkgver() {
  cd "$srcdir/$_pkgname"
  _DATE=$(date -d @`git log -1 --format="%at"` --rfc-3339='date')
  printf "r%s.%s" "${_DATE//-/.}" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir"
  mkdir -p "$srcdir/build/"
  cd "$srcdir/build"
  cmake ../${_pkgname} -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
}

package() {
  cd "$srcdir/build"

  make DESTDIR="$pkgdir" install
}

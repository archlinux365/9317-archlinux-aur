# Maintainer: neXyon <nexyon at gmail dot com>

pkgname=audaspace-git
pkgver=0.1.179.a703501
pkgrel=1
pkgdesc="A feature rich high level audio library."
arch=('i686' 'x86_64')
url="https://github.com/audaspace/audaspace"
license=('APACHE')
groups=()
depends=('python' 'openal' 'sdl' 'libsndfile' 'ffmpeg' 'jack')
makedepends=('gcc' 'cmake' 'git' 'python-setuptools')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=("git://github.com/audaspace/audaspace.git")
md5sums=('SKIP')
noextract=()
_gitname="audaspace"

pkgver() {
  cd $_gitname

  hash=$(git log --pretty=format:'%h' -n 1)
  revision=$(git rev-list --count HEAD)

  echo 0.1.$revision.$hash
}

build() {
  mkdir -p build
  cd build

  cmake ../$_gitname \
    -DCMAKE_INSTALL_PREFIX:PATH=/usr || return 1

  make $MAKEFLAGS || return 1
}

package() {
  cd build
  make DESTDIR="$pkgdir" install || return 1
}

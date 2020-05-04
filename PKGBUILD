# Maintainer: Jerome Leclanche <jerome@leclan.ch>
# Co-Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

_pkgname=lxqt-powermanagement
pkgname=$_pkgname-git
pkgver=0.15.0.8.g4115884
pkgrel=1
pkgdesc="LXQt power management daemon"
arch=("i686" "x86_64")
url="https://lxqt.org"
license=("GPL2")
depends=("liblxqt-git" "lxqt-globalkeys-git" "qt5-svg" "qt5-x11extras" "upower" "kidletime" "solid" "hicolor-icon-theme")
makedepends=("cmake" "git" "qt5-tools" "lxqt-build-tools-git")
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("git+https://github.com/lxqt/$_pkgname.git")
sha256sums=('SKIP')


pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --always | sed "s/-/./g"
}

build() {
  mkdir -p build
  cd build
  cmake "$srcdir/$_pkgname" \
    -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}

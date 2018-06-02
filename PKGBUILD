# Maintainer: Gabriele Musco <emaildigabry@gmail.com>
# Upstream URL: https://github.com/gabmus/razercommander

pkgname=ardhue-git
pkgver=0.1
pkgrel=1
pkgdesc='Interface to control ArdHue Arduino based digital RGB system'
arch=('any')
url='https://github.com/gabmus/ardhue'
license=('GPL3')
depends=('python-serial' 'gtk3>=3.14' 'python')
makedepends=('git' 'meson')
provides=('ardhue')
conflicts=('ardhue')
source=("ardhue::git+https://github.com/gabmus/ardhue")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/ardhue"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/ardhue"
  rm -rf build
  mkdir build
  cd build
  meson --prefix /usr --buildtype release ..
  ninja
}

package() {
  cd "$srcdir/ardhue"
  cd build
  DESTDIR="$pkgdir" ninja install
}

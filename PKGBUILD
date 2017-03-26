# Maintainer: Philipp Wolfer <ph.wolfer@gmail.com>
pkgname=peek-git
pkgver=1.0.1.r3.g6217000
pkgrel=1
pkgdesc="Simple animated GIF screen recorder with an easy to use interface (latest development release)"
arch=('i686' 'x86_64')
url="https://github.com/phw/peek"
license=('GPL3')
provides=('peek=${pkgver}')
conflicts=('peek')
depends=(gtk3 libkeybinder3 ffmpeg imagemagick)
makedepends=(cmake vala gettext)
optdepends=(
  'gst-plugins-good: WebM output under Gnome Shell'
  'gst-plugins-ugly: MP4 output under Gnome Shell'
)
source=(git+https://github.com/phw/peek.git)
sha1sums=('SKIP')

build() {
  cd "${srcdir}/peek"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_TESTS=ON \
    -DGSETTINGS_COMPILE=OFF .
  make
}

check() {
  cd "${srcdir}/peek"
  make test
}

package() {
  cd "${srcdir}/peek"
  make DESTDIR=${pkgdir} install
}

pkgver() {
  cd "${srcdir}/peek"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

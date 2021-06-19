# Maintainer: Giuseppe Calà <gcala at mailbox dot org>

pkgname=audiotube-git
pkgver=v0.1.r56.g0420a69
pkgrel=1
pkgdesc="Client for YouTube Music"
arch=(x86_64 aarch64)
url="https://invent.kde.org/jbbgameich/audiotube"
license=(GPL3)
depends=('ki18n' 'kirigami2' 'python-ytmusicapi' 'youtube-dl' 'gst-plugins-good' 'qt5-imageformats')
makedepends=('fakeroot' 'binutils' 'git' 'extra-cmake-modules' 'pybind11' 'qt5-svg')
provides=('audiotube')
conflicts=('audiotube')
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd "${pkgname%-git}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -B build
  make -C build
}

package() {
  cd "${pkgname%-git}"
  make -C build DESTDIR="${pkgdir}" PREFIX=/usr install
}

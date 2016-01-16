# Maintainer: Riley Trautman <asonix.dev@gmail.com>
# Contributor: Michael Spencer <sonrisesoftware@gmail.com>

_pkgname=papyros-shell
pkgname=$_pkgname-git
pkgver=0.0.5.r169.ga276329
pkgrel=1
pkgdesc="Wayland and QtQuick based desktop shell for Papyros"
arch=("i686" "x86_64")
url="https://github.com/papyros/papyros-shell"
license=("GPL")
depends=("qt5-base-dev-git" "qt5-declarative" "qt5-quickcontrols"
"qt5-wayland-dev-git" "qt5-graphicaleffects" "greenisland-git"
"qml-material-git" "kdeclarative" "pam" "libpulse" "libqtxdg" "solid"
"kconfig" "networkmanager-qt" "ttf-dejavu" "ttf-droid"
"libpapyros-git")
optdepends=('pulseaudio: audio support'
'sddm: login screen theme'
'paper-icon-theme: default icon theme'
'networkmanager: networking support')
makedepends=("git" "python" "extra-cmake-modules")
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+https://github.com/papyros/papyros-shell.git#branch=develop")
sha256sums=("SKIP")

pkgver() {
  cd "$_pkgname"
  # cutting off 'foo-' prefix that presents in the git tag
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake "$srcdir/$_pkgname" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIB_INSTALL_DIR=lib \
    -DLIBEXEC_INSTALL_DIR=lib \
    -DQML_INSTALL_DIR=lib/qt/qml \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  cd build
  make DESTDIR="${pkgdir}" install
}

# Additional functions to generate a changelog

changelog() {
  cd "$_pkgname"
  git log $1..HEAD --no-merges --format=" * %s"
}

gitref() {
  cd "$_pkgname"
  git rev-parse HEAD
}

# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=hawaii-workspace-git
pkgver=20150516.c21ae64
pkgrel=1
pkgdesc="Hawaii workspace"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/hawaii-desktop/hawaii-workspace"
license=('GPL2')
depends=('qt5-base' 'qt5-quickcontrols' 'polkit-qt5')
makedepends=('git' 'gdb' 'extra-cmake-modules' 'greenisland-git')
groups=('hawaii-git')
options=('debug')

_gitroot="git://github.com/hawaii-desktop/hawaii-workspace.git"
_gitbranch=master
_gitname=hawaii-workspace
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	echo "$(git log -1 --format="%cd" --date=short | tr -d '-').$(git log -1 --format="%h")"
}

prepare() {
	mkdir -p build
}

build() {
	cd build
	cmake ../${_gitname} \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DLIB_INSTALL_DIR=lib \
		-DLIBEXEC_INSTALL_DIR=lib \
		-DQML_INSTALL_DIR=lib/qt/qml \
		-DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
		-DCMAKE_BUILD_TYPE=RelWithDebInfo
	make VERBOSE=1
}

package() {
	cd build
	make DESTDIR="${pkgdir}" install
}

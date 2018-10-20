# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=qml-xwayland-git
pkgver=20180924.67.8ffd882
pkgrel=1
pkgdesc="QtWayland additions and QPA plugin"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='https://liri.io'
license=('GPL3')
depends=('qt5-declarative' 'qt5-wayland')
makedepends=('git' 'liri-qbs-shared-git' 'xcb-util-cursor' 'libxcursor')
options=(debug !strip)
conflicts=('qml-xwayland')
replaces=('qml-xwayland')
provides=('qml-xwayland')
groups=('liri-git')

_gitroot="git://github.com/lirios/qml-xwayland.git"
_gitbranch=develop
_gitname=qml-xwayland
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	echo "$(git log -1 --format="%cd" --date=short | tr -d '-').$(git rev-list --count HEAD).$(git log -1 --format="%h")"
}

build() {
	cd ${srcdir}/${_gitname}
	qbs setup-toolchains --type gcc /usr/bin/g++ gcc
	qbs setup-qt /usr/bin/qmake-qt5 qt5
	qbs config profiles.qt5.baseProfile gcc
	qbs build --no-install -d build profile:qt5 \
		modules.lirideployment.prefix:/usr \
		modules.lirideployment.qmlDir:/usr/lib/qt/qml \
		modules.lirideployment.pluginsDir:/usr/lib/qt/plugins
}

package() {
	cd ${srcdir}/${_gitname}
	qbs install -d build --no-build -v --install-root $pkgdir profile:qt5
}

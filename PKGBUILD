# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=fluid-git
pkgver=20180422.833.57daef3
pkgrel=1
pkgdesc="Components for Qt Quick applications with Material Design"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='https://liri.io'
license=('MPL2')
depends=('qt5-quickcontrols2' 'qt5-graphicaleffects' 'qt5-svg' 'ttf-roboto')
makedepends=('git' 'liri-qbs-shared-git' 'qt5-tools')
options=(debug !strip)
conflicts=('fluid')
replaces=('fluid')
provides=('fluid')
groups=('liri-git')

_gitroot="git://github.com/lirios/fluid.git"
_gitbranch=develop
_gitname=fluid
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	echo "$(git log -1 --format="%cd" --date=short | tr -d '-').$(git rev-list --count HEAD).$(git log -1 --format="%h")"
}

prepare() {
	cd ${srcdir}/${_gitname}
	git submodule update --init
}

build() {
	cd ${srcdir}/${_gitname}
	qbs setup-toolchains --type gcc /usr/bin/g++ gcc
	qbs setup-qt /usr/bin/qmake-qt5 qt5
	qbs config profiles.qt5.baseProfile gcc
	qbs build --no-install -d build profile:qt5 \
		modules.lirideployment.prefix:/usr \
		modules.lirideployment.qmlDir:/usr/lib/qt/qml \
		projects.Fluid.useSystemQbsShared:true \
		projects.Fluid.withDocumentation:false
}

package() {
	cd ${srcdir}/${_gitname}
	qbs install -d build --no-build -v --install-root $pkgdir profile:qt5
}

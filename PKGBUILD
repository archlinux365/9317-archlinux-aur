# Maintainer: Andrew Penkrat <contact.aldrog@gmail.com>
# Contributor: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=liri-text-git
pkgver=r324.404d021
pkgrel=1
pkgdesc="Advanced text editor built in accordance with Material Design"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='https://liri.io'
license=('GPL3')
depends=('fluid-git')
makedepends=('git' 'liri-cmake-shared-git' 'qt5-tools')
conflicts=('liri-text')
provides=('liri-text')
groups=('liri-git')

_gitroot="git://github.com/lirios/text.git"
_gitbranch=develop
_gitname=text
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

prepare() {
	mkdir -p build
}

build() {
	cd build
	cmake ../${_gitname} \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DBUILD_TESTING:BOOL=OFF \
		-DINSTALL_SYSCONFDIR=/etc \
		-DINSTALL_LIBDIR=/usr/lib \
		-DINSTALL_LIBEXECDIR=/usr/lib \
		-DINSTALL_QMLDIR=/usr/lib/qt/qml \
		-DINSTALL_PLUGINSDIR=/usr/lib/qt/plugins
	make
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
}

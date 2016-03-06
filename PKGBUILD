# Package build for planeworld from git (https://github.com/planeworld/planeworld)
# Maintainer: Sven Klomp <mail at klomp dot eu>

pkgdesc='2D physics simulation'
_gitname=('planeworld')
pkgname=('planeworld-git')
provides=('planeworld=0.0.1')
pkgver=0.307.f66b647
pkgrel=2
arch=('i686' 'x86_64')
license=('GPL')
url="http://planeworld.org/"
depends=('pugixml' 'sfml' 'lua' 'libnoise2d')
makedepends=('gcc-libs' 'git' 'cmake' 'pugixml' 'sfml' 'lua' 'libnoise2d')
source=("git+https://github.com/planeworld/planeworld.git")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir"/${_gitname}
	echo "0.$(git rev-list --count HEAD).$(git describe --always)"
}


prepare() {
	cd "${srcdir}/${_gitname}"
}

build() {
	cd "${srcdir}/${_gitname}"
	
	if [ ! -d "${srcdir}/build" ]; then
		mkdir -p "${srcdir}/build"
	fi

	cd "${srcdir}/build"

	cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX:PATH=/usr "../${_gitname}"

	make
	
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install	

}

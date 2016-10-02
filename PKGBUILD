# Maintainer: Frantic1048 <archer@frantic1048.com>
pkgdesc='CUDA backend for Torch7 Neural Network Package'
pkgname='torch7-cunn-git'
pkgver=r555.612dda4
pkgrel=1
makedepends=('cmake' 'git')
depends=('torch7-git>=r819')
conflicts=('torch7-cunn')
provides=('torch7-cunn')
arch=('x86_64' 'i686')
url='https://github.com/torch/cunn'
license=('BSD')
source=("${pkgname}::git+${url}")
sha512sums=('SKIP')

pkgver () {
	cd "${pkgname}"
	(
		set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build () {
	cd "${pkgname}"
	cmake -DCMAKE_CXX_FLAGS="${CMAKE_CXX_FLAGS} -std=c++98" \
	. -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release
	make
}

package () {
	cd "${pkgname}"
	make DESTDIR="${pkgdir}" install

	# Move Lua C module
	mkdir -p "${pkgdir}/usr/lib/lua/5.1"
	mv "${pkgdir}/usr/lib/libTHCUNN.so" "${pkgdir}/usr/lib/lua/5.1/"

	# Move pure Lua modules
	mkdir -p "${pkgdir}/usr/share/lua/5.1"
	mv "${pkgdir}/usr/lua/cunn" "${pkgdir}/usr/share/lua/5.1/"
	rm -rf "${pkgdir}/usr/lua"
}

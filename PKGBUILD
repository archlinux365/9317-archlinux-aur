arch=(any)
backup=(etc/shiromino.ini)
conflicts=(shiromino)
depends=(
	libvorbis
	sdl2
	sdl2_image
	sdl2_mixer
	sqlite
)
license=(MIT)
makedepends=(
	cmake
	git
	pkgconf
)
pkgdesc="A fast-paced puzzle game with roots in the arcade"
pkgname=shiromino-git
pkgrel=1
pkgver=0.1.1+9+gc7a6bb6
provides=(shiromino)
sha256sums=(SKIP)
source=(git+https://github.com/shiromino/shiromino.git)
url=https://github.com/shiromino/shiromino
build() {
	cd "$srcdir/shiromino"
	cmake\
		-B build\
		-DCMAKE_BUILD_TYPE=Release\
		-DENABLE_OPENGL_INTERPOLATION=1\
		-S .
	cmake --build build
}
package() {
	cmake --install "$srcdir/shiromino/build" --prefix "$pkgdir" --strip
}
pkgver() {
	cd "$srcdir/shiromino"
	git describe --long --tags | tr - +
}
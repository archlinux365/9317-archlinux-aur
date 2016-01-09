# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# NOTE:
# libmfx defaults to build only the static library.

pkgname=libmfx-git
pkgver=r37.9f4a84d
pkgrel=1
pkgdesc="Intel Media SDK dispatcher library"
arch=('i686' 'x86_64')
url="https://github.com/lu-zero/mfx_dispatch"
license=('custom')
depends=('libva')
options=('staticlibs')
source=("$pkgname"::'git+https://github.com/lu-zero/mfx_dispatch.git')
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	
	# Git, with or without tags available
	
	( set -o pipefail
          git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
          printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
        )
}

prepare() {
	cd "${srcdir}/${pkgname}"
	
	autoreconf -i
}

build() {
	cd "${srcdir}/${pkgname}"
	
	./configure \
                --prefix=/usr \
                --enable-static=yes \
                --enable-shared=no \
                --enable-fast-install=yes \
                --with-libva_drm=yes \
                --with-libva_x11=yes \
                --with-pic
}

package() {
	cd "${srcdir}/${pkgname}"
	
	make DESTDIR="$pkgdir/" install
	
	install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# Maintainer: Arvedui <arvedui@posteo.de>
# Contributor: Jakub Kądziołka <kuba@kadziolka.net>

pkgname=sameboy
pkgdesc="An accuracy-focused Game Boy/Game Boy Color emulator"
pkgver=0.14.2
pkgrel=1
arch=(x86_64)
url="https://github.com/LIJI32/SameBoy"
license=(MIT)
depends=(sdl2 hicolor-icon-theme)
conflicts=(sameboy-git)
# Upstream suggests using clang, but gcc is supported on Linux: https://github.com/LIJI32/SameBoy/issues/164#issuecomment-486464194
makedepends=(rgbds make git)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/LIJI32/SameBoy/archive/v${pkgver}.tar.gz")
md5sums=('503b33778935748fea7d484fd2bca220')

build(){
	cd "${srcdir}/SameBoy-${pkgver}"
	make sdl CONF=release DATA_DIR=/usr/share/games/sameboy/ CC=gcc FREEDESKTOP=true
}

package(){
	cd "${srcdir}/SameBoy-${pkgver}"

	make install CONF=release PREFIX=/usr/ DATA_DIR=/usr/share/games/sameboy/ DESTDIR="${pkgdir}" FREEDESKTOP=true
	install -D "${pkgdir}/usr/share/sameboy/LICENSE" "${pkgdir}/usr/share/licenses/sameboy/LICENSE"
	rm "${pkgdir}/usr/share/sameboy/LICENSE"

	# move data files to the correct location
	mkdir -p ${pkgdir}/usr/share/games
	mv ${pkgdir}/usr/share/{sameboy,games}

	# mimetype icons don't belong here
	# that could lead to file conflicts
	find "${pkgdir}" -name 'x-gameboy*-rom.png' -delete
	find "${pkgdir}" -name mimetypes -delete

}

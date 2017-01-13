# Maintainer: Ricardo Gonçalves <ricardompgoncalves@gmail.com>

pkgname=qmmp-plugin-youtube
pkgver=0.4
pkgrel=1
pkgdesc="Plugin for Qt-based Multimedia Player (Qmmp) to search and play musics directly from YouTube"
arch=('i686' 'x86_64')
url="https://github.com/rigon/qmmp-plugin-youtube"
license=('GPL')
depends=('qmmp' 'python>=3.6' 'python<3.7' 'youtube-dl' 'qjson' 'pythonqt')
makedepends=('qt5-tools' 'qt5-base' 'make' 'gcc' 'fakeroot')
source=("https://github.com/rigon/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('43bd3977bb80895e5aa2a042483124ef')

build() {
	cd "${pkgname}-${pkgver}"/

	qmake
	make -j4
}

package() {
	mkdir -pv "${pkgdir}/usr/lib/qmmp/Transports" "${pkgdir}/usr/lib/qmmp/General"
	cp "${pkgname}-${pkgver}/youtube/libyoutube.so" "${pkgdir}/usr/lib/qmmp/Transports/"
	cp "${pkgname}-${pkgver}/youtubeui/libyoutubeui.so" "${pkgdir}/usr/lib/qmmp/General/"
}


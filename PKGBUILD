# Maintainer: Alfredo Ramos <alfredo dot ramos at yandex dot com>
# Contributor: Giacomo <giacomogiorgianni at gmail dot com>

pkgname=vokoscreen
_pkgver=2.4.30-beta
pkgver=${_pkgver/-/.}
pkgrel=3
pkgdesc='An easy to use screencast creator. Qt5 UI.'
arch=('i686' 'x86_64')
url='http://linuxecke.volkoh.de/vokoscreen/vokoscreen.html'
license=('GPL2')

depends=(
	'qt5-x11extras' 'qt5-multimedia' 'ffmpeg' 'lame'
	'desktop-file-utils' 'xdg-utils' 'lsof' 'pulseaudio-alsa'
)
makedepends=('qt5-tools')
provides=("${pkgname}=${pkgver}")
conflicts=("${pkgname}-git")

source=(
	"${pkgname}-${_pkgver}.tar.gz::https://github.com/vkohaupt/${pkgname}/archive/${_pkgver}.tar.gz"
	'desktop_file.patch'
	'fix_lrelease.patch'
)
sha512sums=(
	'd12078e46be291f4589ed90297b7932aa6c9dca9a4931894f8b2931b14ebc8a3eb129f41515e9a5409c8727546945dd0f37f1d1d531e7b804919f1bfe2d4febd'
	'3ddc567f831b9f6e2672997a77a099cf8fdd5a6a1d79157738c1670c9106fd6c4e09d74287a770c19bac23dcb73a19ce69cc1ac893d4988f75c7ac35668f7a90'
	'4c7e61e06a90de2815dd7564a9df050a939d5a3a1bb5514ee5808fd5277b5e6a12af80384f630e2c8429ca2decb318684b8f300a64846ae393c9482bc81425a4'
)

prepare() {
	cd "${srcdir}"/${pkgname}-${_pkgver}

	# Fix lrelease path
	patch -Np1 < ../fix_lrelease.patch

	# Desktop file description
	patch -Np1 < ../desktop_file.patch

	# Create build directory
	mkdir -p "${srcdir}"/build
}

build() {
	# Building package
	cd "${srcdir}"/build
	qmake-qt5 ../${pkgname}-${_pkgver} \
		QMAKE_CFLAGS="${CFLAGS}" \
		QMAKE_CXXFLAGS="${CXXFLAGS}" \
		CONFIG+=release \
		CONFIG+=c++14
	make
}

package() {
	# Installing package
	cd "${srcdir}"/build
	make INSTALL_ROOT="${pkgdir}" install
}

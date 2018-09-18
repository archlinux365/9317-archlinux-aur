# Maintainer: Alfredo Ramos <alfredo dot ramos at yandex dot com>

pkgname=hexeditor
pkgver=1.4.0
pkgrel=1
pkgdesc='A cross-platform Hex Editor'
arch=('i686' 'x86_64')
url='https://github.com/chipmunk-sm/HexEditor'
license=('GPL')

depends=('qt5-base' 'hicolor-icon-theme')
makedepends=('qt5-tools')
provides=("${pkgname}=${pkgver}")

source=(
	"${pkgname}-${pkgver}.tar.gz::https://github.com/chipmunk-sm/HexEditor/archive/v${pkgver}.tar.gz"
	'qmake_install.patch'
)
sha512sums=(
	'36b5f614391fd042216c67314e35cc85c9652034ad673e1ea83a72d188113e10f7ab701000a36b350168b105a71cbe59f0cc7d2b98bcf1eb1387be2024a55fc3'
	'ed0285385abbcabb82b19e9a3971a1836c6d3d8fc42a29baf35e7707f538a9e58b02220267e56a530e6905349c89307b5493f6876470280b2f3d201684b3613f'
)

prepare() {
	# QMake install instructions
	cd "${srcdir}"/HexEditor-${pkgver}
	patch -Np1 < ../qmake_install.patch

	# Create build directory
	mkdir -p "${srcdir}"/build
}

build() {
	# Build package
	cd "${srcdir}"/build
	qmake-qt5 ../HexEditor-${pkgver} \
		QMAKE_CFLAGS="${CFLAGS}" \
		QMAKE_CXXFLAGS="${CXXFLAGS}" \
		CONFIG+=release \
		CONFIG+=c++14
	make
}

package() {
	# Install package
	cd "${srcdir}"/build
	make INSTALL_ROOT="${pkgdir}" install
}

# Maintainer: Guilhem Saurel <saurel at laas dot fr>
# Contributor: Alfredo Ramos <alfredo dot ramos at yandex dot com>
# Contributor: Chris <christopher.r.mullins g-mail>
# Contributor: Ainola
# Contributor: speps

pkgname=pythonqt
pkgver=3.2
pkgrel=9
pkgdesc='A dynamic Python binding for Qt applications'
arch=('i686' 'x86_64')
url='http://pythonqt.sourceforge.net/'
license=('LGPL2.1')

depends=('python' 'qt5-multimedia' 'qt5-svg' 'qt5-webkit' 'qt5-declarative' 'qt5-xmlpatterns')
makedepends=('git' 'qt5-tools')
conflicts=("${pkgname}-svn" "${pkgname}-for-screencloud" 'qt5-python27-git')
replaces=("${pkgname}-qt5")

source=(
	"http://downloads.sourceforge.net/project/${pkgname}/${pkgname}/PythonQt-${pkgver}/PythonQt${pkgver}.zip"
    "fix_python.patch" "fix_format_security.patch"
)
sha512sums=(
	'1ee0f50f5035568b38e945108f5496ba64355c6357c1ea8dfc17ad90fa360540769f94e0b3e0e398176e8a21c8afe139607f0b5a2e82c63f1cbd40201a25e0f0'
    'd11787ee228ad906b41799fcfcf2116b280621e5d23475fa8b9110c812cf96746cfd904ad22d1ac25178be4e8a63bd6ffd93cca39ebce3cfd48d95bf2607c4fe'
    '2b514b17f6bce129656e7e8cf56434eebc1fa557f854c7a757f6a0ba8c142a8c18d28e81f7fbe77a391f425b43f6cf52dc6fc9229b70739ddcb52180c675eaa0'
)

prepare() {
	# Create build directory
	mkdir -p "${srcdir}"/build
	cd "${srcdir}"/build
	cp -R ../PythonQt${pkgver}/* ./

    patch -p0 -i ../fix_python.patch
    patch -p0 -i ../fix_format_security.patch
    sed -i "s=pydebug.h=cpython/pydebug.h=" src/PythonQt.cpp
}

build() {
	# Building package
	cd "${srcdir}"/build
	qmake-qt5 \
		QMAKE_CFLAGS="${CFLAGS}" \
		QMAKE_CXXFLAGS="${CXXFLAGS}" \
		CONFIG+=release
	make
}

package() {
	cd "${srcdir}"/build

	# Includes
	mkdir -p "${pkgdir}"/usr/include/PythonQt/{gui,extensions/PythonQt_QtAll}
	cp ../PythonQt${pkgver}/src/*.h "${pkgdir}"/usr/include/PythonQt/
	cp ../PythonQt${pkgver}/src/gui/*.h "${pkgdir}"/usr/include/PythonQt/gui/
	cp ../PythonQt${pkgver}/extensions/PythonQt_QtAll/*.h "${pkgdir}"/usr/include/PythonQt/extensions/PythonQt_QtAll/

	# Library
	mkdir -p "${pkgdir}"/usr/lib
	cp -a lib/*.so* "${pkgdir}"/usr/lib/
}

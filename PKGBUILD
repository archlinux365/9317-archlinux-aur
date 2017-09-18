# Maintainer: grufo <madmurphy333@gmail.com>

pkgname='libconfini'
pkgver='1.4.1'
pkgrel=1
pkgdesc='Yet another INI parser'
arch=('i686' 'x86_64')
url='https://madmurphy.github.io/libconfini/'
license=('GPL')
makedepends=('intltool')
source=("https://github.com/madmurphy/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('80ba0b8d7d7bd766f2485ff15bc81aef')

prepare() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	./autogen.sh
	./configure --prefix=/usr CFLAGS='-g -O3'

}

build() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	make

}

check() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	make check

}

package() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	chmod +x "${pkgdir}/usr/share/doc/${pkgname}/examples/compile_basic_example_c.sh"
	chmod +x "${pkgdir}/usr/share/doc/${pkgname}/examples/compile_typed_ini_c.sh"

}


# Maintainer: Miguel Revilla <yo at miguelrevilla dot com>

pkgname=odb
pkgver=2.5.0b17
pkgrel=1
pkgdesc="C++ Object-Relational Mapping compiler"
arch=('i686' 'x86_64')
depends=('build2')
conflicts=('libcutl' 'libstudxml')
options=('!libtool')
license=('GPL3')

build() {
	cd "${srcdir}"
	mkdir -p "${srcdir}/${pkgname}-${pkgver}"
	cd "${srcdir}/${pkgname}-${pkgver}"

	GPPVER="$(g++ --version | grep 'g++ (GCC)' | sed 's/g++ (GCC) //')"

	bpkg create -d odb-gcc-${GPPVER} cc \
	config.cxx=g++ \
	config.cc.coptions="-O3 -DODB_GCC_PLUGIN_DIR" \
	config.bin.rpath=${pkgdir}/usr/lib \
	config.install.root=${pkgdir}/usr

	cd odb-gcc-${GPPVER}
	yes | bpkg build --trust-yes odb@https://pkg.cppget.org/1/beta
}

package() {

	GPPVER="$(g++ --version | grep 'g++ (GCC)' | sed 's/g++ (GCC) //')"
	cd "${srcdir}/${pkgname}-${pkgver}/odb-gcc-${GPPVER}"

	bpkg install odb

	mkdir -p ${pkgdir}/usr/lib/gcc/x86_64-pc-linux-gnu/${GPPVER}/plugin/
	mv ${pkgdir}/usr/bin/odb.so ${pkgdir}/usr/lib/gcc/x86_64-pc-linux-gnu/${GPPVER}/plugin/

	mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}/
	mv ${pkgdir}/usr/share/doc/odb/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/
}

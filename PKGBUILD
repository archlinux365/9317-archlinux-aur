# Maintainer: Adrián Pérez de Castro <adrian@perezdecastro.org>
pkgname='fmsx'
pkgdesc='Portable MSX/MSX2/MSX2+ emulator'
pkgver='4.2'
pkgrel='1'
_dlname="fMSX${pkgver//./}"
url='http://fms.komkon.org/fMSX'
license='custom'
arch=('i686' 'x86_64')
depends=('libxext' 'bash' 'zlib')
makedepends=('sed')
source=(fmsx.sh "${url}/${_dlname}.zip")
sha512sums=('1c7b7485525e5798cde0fa4e82153f294ce88c358d4c0366a6266f837b2b3e5ce8540b0f5daf1d67b11e1afcf82912df8379e3a0cbe93854f0d86cb7d54d7d36'
            'e1d1805dd3eca534304e4f67102bbecaace3becf731d33614cab26be25c04e1e0c5503d9e55dc257476e0392798a3a87a98cf242fd7bdd089e725b7e878b2c2e')

prepare () {
    cd "${srcdir}"
    sed -e '1,/\*\*\*\*\//p' -e d fMSX/Menu.c > COPYING
}

build () {
	cd "${srcdir}"
	make -C fMSX/Unix
}

package () {
	cd "${srcdir}"
	mkdir -p "${pkgdir}/usr/lib/fmsx"
	install -m 755 fMSX/Unix/fmsx "${pkgdir}/usr/lib/fmsx"
	install -m 644 ROMs/* "${pkgdir}/usr/lib/fmsx"
	mkdir -p "${pkgdir}/usr/bin"
	install -m 755 "${startdir}/fmsx.sh" "${pkgdir}/usr/bin/fmsx"
	install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
